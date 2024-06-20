import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecommendedArticles(21); // Assuming user ID is 21 as per your example
  }, []);

  const fetchRecommendedArticles = (userId) => {
    const url = `http://127.0.0.1:8000/recommend_article/?user_id=${userId}`;
    axios.get(url)
      .then(response => {
        setArticles(response.data.recommended_articles);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        setError(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
        <Navbar />
        <div className="p-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map(article => (
                    <div key={article.article_id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p className="text-gray-600">{article.short_desc}</p>
                        <p className="text-sm text-gray-500">By {article.author} - {new Date(article.created_date).toLocaleDateString()}</p>
                        <Link to={`/articles/${article.article_id}`} className="text-blue-500 hover:text-blue-600">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
);
}

export default ArticlesPage;