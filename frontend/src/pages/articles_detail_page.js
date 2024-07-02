import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ArticleDetail() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchArticleDetail(articleId);
    }, [articleId]);
  
    const fetchArticleDetail = (id) => {
      const url = `http://127.0.0.1:8000/articles/?article_id=${id}`;
      
      axios.get(url)
        .then(response => {
          setArticle(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching article details:', error);
          setError(error);
          setIsLoading(false);
        });
    };
  
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error loading the article details.</p>;
    }
  
    return (
        <div>
        <div className="p-8 mt-20">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p className="text-sm text-gray-500">By {article.author} - {new Date(article.created_date).toLocaleDateString()}</p>
            <p className="mt-4">{article.body}</p>
        </div>
    </div>
    );
  }

  export default ArticleDetail;