import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PreferencesPopup from '../components/PreferencesPopup'; // Import the popup component

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(true); // State to show/hide popup

  useEffect(() => {
    fetchRecommendedArticles(1); // Assuming user ID is 1 as per example
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

  const handlePreferencesSubmit = (topics) => {
    const userId = 1; // Example user ID
    axios.post(`http://127.0.0.1:8000/update_user_preferences`, { user_id: userId, topics })
      .then(() => {
        fetchRecommendedArticles(userId);
        setShowPopup(false);
      })
      .catch(error => {
        console.error('Error updating preferences:', error);
      });
  };

  const handleDismiss = () => {
    setShowPopup(false);
  };

  // Hardcoded trending articles for demonstration
  const trendingArticles = [
    {
      article_id: 1,
      title: 'The Future of Quantitative Trading in Finance',
      author: 'Alex Grant',
      created_date: '2024-06-05'
    },
    {
      article_id: 2,
      title: 'Financial Literacy and Its Importance in Economic Empowerment',
      author: 'Linda Harper',
      created_date: '2024-05-29'
    },
    {
      article_id: 3,
      title: 'The Future of Fintech Innovations',
      author: 'Sophia Turner',
      created_date: '2024-05-31'
    }
  ];

  return (
    <div className="container mx-auto px-8 mt-20 flex justify-center">
      {showPopup && <PreferencesPopup onSubmit={handlePreferencesSubmit} onDismiss={handleDismiss} />}
      <div className="max-w-5xl w-full flex justify-between">
        {/* Recommended Articles Column */}
        <div className="flex-1 max-w-2xl pr-8">
          <div className="pt-4 mb-4">
            <h3 className="text-xl font-light">Recommended Articles</h3>
            <hr className="my-2"/>
          </div>
          <div className="flex flex-col space-y-8">
            {isLoading && <p>Loading articles...</p>}
            {error && <p>Error loading articles.</p>}
            {!isLoading && !error && articles.map(article => (
              <div key={article.article_id} className="border-b border-gray-200 pb-8 flex">
                {/* <img src={`https://unsplash.it/100/100?random=${article.article_id}`} alt="Random" className="w-24 h-24 object-cover mr-4" /> */}
                <div>
                  <h2 className="text-2xl font-semibold">{article.title}</h2>
                  <p className="text-gray-600 mt-2">{article.short_desc}</p>
                  <p className="text-sm text-gray-500 mt-2">By {article.author} - {new Date(article.created_date).toLocaleDateString()}</p>
                  <Link to={`/articles/${article.article_id}`} className="text-blue-500 hover:text-blue-600 mt-2 inline-block">Read More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar for Trending Articles and Recommended Topics */}
        <div className="w-1/4 pl-8">
          {/* Trending Articles */}
          <div className="mb-8 ">
            <div className="pt-4 mb-4">
              <h3 className="text-xl font-light">Trending Articles</h3>
              <hr className="my-2"/>
            </div>
            <div className="space-y-4">
              {trendingArticles.map(trending => (
                <div key={trending.article_id} className="border-b border-gray-200 pb-4">
                  <h4 className="text-lg font-semibold">{trending.title}</h4>
                  <p className="text-sm text-gray-500">By {trending.author} - {new Date(trending.created_date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Topics */}
          <div>
            <div className="pt-4 mb-4">
              <h3 className="text-xl font-light">Recommended Topics</h3>
              <hr className="my-2"/>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Programming</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Self Improvement</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Data Science</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Writing</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Technology</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Relationships</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full">Cryptocurrency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;
