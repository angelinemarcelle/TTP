import os
from fastapi import FastAPI
import chromadb
import supabase
from supabase import create_client, Client

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
    
    
@app.get("/")
async def root():
    """
    Returns a JSON response with a message "Hello World".
    """
    return {"message": "Hello World"}

@app.get("/recommend_article/")
async def recommend_article(
    user_id: int,
):
    """
    Recommends an article based on the given user ID and topic.

    Parameters:
        user_id (int): The ID of the user.
        topic (str): The topic for which an article is recommended.

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
    
