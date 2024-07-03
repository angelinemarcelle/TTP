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
    <div className="flex justify-center mt-32 mb-10">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-3 text-left">{article.title}</h1>
        <p className="text-sm text-gray-500 text-left mb-6">By {article.author} - {new Date(article.created_date).toLocaleDateString()}</p>
        <hr className="border-gray-300 my-6" />
        <div className="prose lg:prose-xl">
          <p>{article.body}</p>
        </div>
        <hr className="border-gray-300 my-6" />
        <div className="mt-4 flex flex-wrap justify-left gap-2">
          {article.category.split(',').map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">{tag.trim()}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
