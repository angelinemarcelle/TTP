import React, { useState } from 'react';

function PreferencesPopup({ onSubmit }) {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [customTopic, setCustomTopic] = useState('');
  const predefinedTopics = [
    "Finance", "Banking", "Technology", "Accountancy",
    "Economy", "Environment", "Artificial Intelligence",
    "Productivity", "Data Science", "Investing",
    "Trading", "Cryptocurrency"
  ];

  const handleTopicChange = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleCustomTopicAdd = (e) => {
    if (e.key === 'Enter' && customTopic.trim() !== '') {
      setSelectedTopics([...selectedTopics, customTopic.trim()]);
      setCustomTopic('');
      e.preventDefault();
    }
  };

  const handleSubmit = () => {
    onSubmit(selectedTopics);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-xl w-full">
        <h2 className="text-xl font-semibold mb-6">Select Your Topics of Interest</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {predefinedTopics.map(topic => (
            <button
              key={topic}
              className={`px-3 py-1 rounded-full ${selectedTopics.includes(topic) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleTopicChange(topic)}
            >
              {topic}
            </button>
          ))}
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            onKeyDown={handleCustomTopicAdd}
            placeholder="Enter a custom topic"
            className={`px-3 py-1 rounded-full ${customTopic ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreferencesPopup;
