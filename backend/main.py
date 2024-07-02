import os
import pandas as pd
import chromadb
from fastapi import FastAPI
from supabase import create_client
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv 
load_dotenv() 

app = FastAPI()
chroma_client = None
supabase_client = None

def update_chromadb():
     
    # Indexing Articles
    
    articles = supabase_client.table("article").select("*").execute().model_dump()['data']
    
    try:
        article_collection = chroma_client.get_collection("article")
    except:
        article_collection = chroma_client.create_collection("article")
        
    def create_article_sentence(article):
        return f"{article['title']}. {article['short_desc']}"
    
    article_collection.add(
        ids=[str(article['article_id']) for article in articles],
        documents=[create_article_sentence(article) for article in articles],
        metadatas=[
            {
                "category": article['category'],
                "created_date": article['created_date'],
            } for article in articles        
        ]
    )
    
    # Indexing Mentors
    
    mentors = supabase_client.table("mentor").select("*").execute().model_dump()['data']
    
    try:
        mentor_collection = chroma_client.get_collection("mentor")
    except:
        mentor_collection = chroma_client.create_collection("mentor")
    
    def create_mentor_sentence(mentor):
        return  f"A mentor from {mentor['department']} department, working as a {mentor['position']} " \
                f"specializing in {mentor['specialization']}. {mentor['short_desc']}"
                
    mentor_collection.add(
        ids=[str(mentor['mentor_id']) for mentor in mentors],
        documents=[create_mentor_sentence(mentor) for mentor in mentors],
        metadatas=[
            {
                "name": mentor['name'],
                "department": mentor['department'],
                "position": mentor['position'],
                "short_desc": mentor['short_desc'],
                "email": mentor['email'],
            } for mentor in mentors        
        ]
    )
    
    # Indexing Buddies
    
    buddies = supabase_client.table("buddy").select("*").execute().model_dump()['data']
    
    try:
        buddy_collection = chroma_client.get_collection("buddy")
    except:
        buddy_collection = chroma_client.create_collection("buddy")
        
    def create_buddy_sentence(buddy):
        return f"A buddy from {buddy['role']}, with interest in {buddy['professional_interest']} " \
            f"likes {', '.join(eval(buddy['hobby']))}. proficient in { ', '.join(eval(buddy['language']))} " \
            f"with a goal in {buddy['buddy_program_goal']}"
            
    buddy_collection.add(
        ids=[str(buddy['buddy_id']) for buddy in buddies],
        documents=[create_buddy_sentence(buddy) for buddy in buddies],
        metadatas=[
            {
                "name": buddy['name'],
                "short_desc": buddy['short_desc'],
                "email": buddy['email'],
                "linkedin": buddy['linkedin'],
                "instagram": buddy['instagram'],
                "years_of_experience": buddy['years_of_experience'],
                "role": buddy['role'],
                "professional_interest": buddy['professional_interest'],
                "interaction_frequency": buddy['interaction_frequency'],
                "hobby": buddy['hobby'],
                "language": buddy['language'],
                "meeting_preference": buddy['meeting_preference'],
                "buddy_program_goal": buddy['buddy_program_goal'] 
            } for buddy in buddies        
        ]
    )
        

# Configuring CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allows specific origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.on_event("startup")
async def startup_event():
    
    # initialize supabase
    global supabase_client
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    supabase_client = create_client(supabase_url, supabase_key)
    
     # initialize chromadb
    global chroma_client
    chroma_client = chromadb.PersistentClient(path="chromadb")
    
    update_chromadb()
    
class SurveyResults(BaseModel):
    buddy_id: int
    question1: int
    question2: str
    question3: str
    question4: str
    question5: list
    question6: list
    question7: str
    question8: str

@app.post("/save_survey_results")
async def save_survey_results(data: SurveyResults):

    data, count = supabase_client.table('buddy').update({"buddy_id": data.buddy_id,
                                                         "years_of_experience": data.question1, 
                                                         "role": data.question2,
                                                         "professional_interest": data.question3,
                                                         "interaction_frequency": data.question4,
                                                         "hobby": str(data.question5),
                                                         "language": str(data.question6),
                                                         "meeting_preference": data.question7,
                                                         "buddy_program_goal": data.question8}).eq('buddy_id', data.buddy_id).execute()
    
    update_chromadb()

    return {"message": "Survey results saved successfully"}

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

    # try:
        
    # Get Collection
    buddy_collection = chroma_client.get_collection('buddy')

    # Get User
    user = buddy_collection.get(str(user_id))

    # Get Query Sentence
    query_sentence = user['documents'][0]
    print(query_sentence)

    # Get recommended buddy
    result = buddy_collection.query(
        query_texts=query_sentence,
        n_results=1,
        where={
            "$and" : [
                {"years_of_experience" : {"$gte" : user['metadatas'][0]['years_of_experience'] - 2}},      
                {"years_of_experience" : {"$lte" : user['metadatas'][0]['years_of_experience'] + 2}},

                {"interaction_frequency" : user['metadatas'][0]['interaction_frequency']},

                {"meeting_preference" :  user['metadatas'][0]['meeting_preference']},

                {"email" :  {"$ne" : user['metadatas'][0]['email']}},
            ]
        }
    )
    print(result)

    response_body = {
        "user_id" : int(result['ids'][0][0]),
        "details" : result['metadatas'][0][0]
    }

    return response_body
        
    
    # except Exception as e:
    # #     return {"message": "Error",
    # #             "error": str(e)}
    

 
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
            n_results=5,
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


@app.get("/articles/")
async def articles(
    article_id: int,
):
    """
    Get an article based on the given article ID.

    Parameters:
        article_id (int): The ID of the article.

    Returns:
        article: dictionary containing details of the article.
    """

    try:
        
        # Get user preferences
        article_response = supabase_client.table("article").select("*").eq('article_id', article_id).execute()
        article_details = article_response.model_dump()['data'][0]
    
        return article_details
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}

@app.get("/mentors/")
async def mentors(

):
    """
    Objective:
        returns list of mentors along with their information from Supabase

    """

    try:
        
        # Get user preferences
        mentor_response = supabase_client.table("mentor").select("*").execute()
        mentor_details = mentor_response.model_dump()['data']
    
        return mentor_details
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}

@app.get("/buddies/")
async def buddies(

):
    """
    Objective:
        returns list of buddies along with their information from Supabase

    """

    try:
        
        # Get user preferences
        buddies_response = supabase_client.table("buddy").select("*").execute()
        buddies_details = buddies_response.model_dump()['data']
    
        return buddies_details
        
    
    except Exception as e:
        return {"message": "Error",
                "error": str(e)}