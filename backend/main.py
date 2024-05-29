import os
from fastapi import FastAPI
import chromadb
from supabase import create_client
from pydantic import BaseModel

from dotenv import load_dotenv 
load_dotenv() 

app = FastAPI()
chroma_client = None
supabase_client = None

@app.on_event("startup")
async def startup_event():
    
    # initialize chromadb
    global chroma_client
    chroma_client = chromadb.PersistentClient(path="chromadb")
    
    # initialize supabase
    global supabase_client
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    supabase_client = create_client(supabase_url, supabase_key)
    
class SurveyResults(BaseModel):
    question1: int
    question2: str
    question3: str
    question4: str
    question5: list
    question6: list
    question7: str
    question8: list

@app.post("/save_survey_results")
async def save_survey_results(data: SurveyResults):
    # Process the survey data here
    # For example, save to a database or perform other logic
    print(data)
    return {"message": "Survey results saved successfully", "data": data.dict()}

@app.get("/recommend_buddy/")
async def recommend_buddy(
    user_id: int,
):
    """
    Recommends a buddy based on survey result.

    Parameters:
        user_id : The ID of the user 

    Returns:
        list: The ID of the buddies.
    """
    
    ### Logic
    '''
    1. Get the user id
    2. Get the recommended buddy based on the query from the vector database
    '''
    ###

    try:
        
        # Get Collection
        buddy_collection = chroma_client.get_collection('buddy')

        # Get User
        user = buddy_collection.get(str(user_id))

        # Get Query Sentence
        query_sentence = user['documents'][0]
        
        # Get recommended buddy
        result = buddy_collection.query(
            query_texts=query_sentence,
            n_results=1,
            where={
                "$and" : [
                    {"years_of_experience" : {"$gte" : user['metadatas'][0]['years_of_experience'] - 2}},      
                    {"years_of_experience" : {"$gte" : user['metadatas'][0]['years_of_experience'] - 2}},

                    {"interaction_frequency" : user['metadatas'][0]['interaction_frequency']},

                    {"meeting_preference" :  user['metadatas'][0]['meeting_preference']},

                    {"email" :  {"$ne" : user['metadatas'][0]['email']}},
                ]
            }
        )

        response_body = {
            "user_id" : int(result['ids'][0][0]),
            "details" : result['metadatas'][0][0]
        }

        return response_body
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}
    

 
@app.get("/recommend_mentor/")
async def recommend_mentor(
    mentor_request : str,
):
    """
    Recommends a mentor based on mentor request.

    Parameters:
        mentor_request (str): explanation about preferred mentor

    Returns:
        int: The ID of the mentor.
    """
    
    ### Logic
    '''
    1. Get the recommended mentor based on the query from the vector database
    '''
    ###

    try:
    
        # Get Collection
        mentor_collection = chroma_client.get_collection('mentor')
        
        result = mentor_collection.query(
            query_texts=mentor_request,
            n_results=1,
        )
        
        recommended_mentor_id = int(result['ids'][0][0])
        
        # Get detail from supabase
        mentor_info = supabase_client.table("mentor").select("*").eq('mentor_id', recommended_mentor_id).execute().model_dump()['data'][0]
        
        return mentor_info
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}


@app.get("/recommend_article/")
async def recommend_article(
    user_id: int,
):
    """
    Recommends an article based on the given user ID and topic.

    Parameters:
        user_id (int): The ID of the user.

    Returns:
        int: The ID of the recommended article.
    """
    
    ### Logic
    '''
    1. Check if user ID has filled the preferred topics (check from user database)
    2. If yes, recommend an article based on the preferred topics
    3. if no, return error message
    '''
    ###

    try:
        
        # Get user preferences
        user_info = supabase_client.table("user").select("*").eq('user_UID', 1).execute()
        preferred_topics = user_info.model_dump()['data'][0]['preferred_topic']
    
        # Get Collection
        article_collection = chroma_client.get_collection('article')
        
        query_sentences = "articles about " + ", ".join(preferred_topics)
        
        result = article_collection.query(
            query_texts=query_sentences,
            n_results=3,
        )
        
        recommended_article_ids = [int(article_id) for article_id in result['ids'][0]]
        
        # Get detail from supabase
        recommended_articles = []
        for article_id in recommended_article_ids:
            article_info = supabase_client.table("article").select("*").eq('article_id', article_id).execute()
            recommended_articles.append(article_info.model_dump()['data'][0])
        
        return {
            "recommended_articles": recommended_articles,
        }
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}
    