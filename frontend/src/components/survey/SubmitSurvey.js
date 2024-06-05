import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const fetchBuddyRecommendation = async (userId) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/recommend_buddy?user_id=${userId}`);
    console.log("Buddy recommendation received:", response.data);
    return response.data; // Assuming the API returns the recommended buddy data
  } catch (error) {
    console.error('Failed to fetch buddy recommendation:', error);
    alert(`Failed to fetch buddy recommendation: ${error.response ? error.response.data.message : 'Server unreachable'}`);
  }
};

const SubmitSurvey = ({ surveyData }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("Submitting survey data:", surveyData);

      // Use Axios for the API call
      await axios.post('http://127.0.0.1:8000/save_survey_results', surveyData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Fetch buddy recommendation after submitting survey
      if (surveyData.buddy_id) {
        // await fetchBuddyRecommendation(surveyData.buddy_id);
        const buddy = await fetchBuddyRecommendation(surveyData.buddy_id);
        navigate('/matched-mentorship', { state: { buddy } });
      }
  
    } catch (error) {
      console.error('Failed to submit survey:', error);
      // Handle errors more gracefully
      alert(`Failed to submit survey: ${error.response ? error.response.data.message : 'Server unreachable'}`);
    }


    // console.log(surveyData)
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-black pb-10">
      <button 
        className="bg-red-600 text-white py-2 px-4 font-bold rounded hover:bg-red-700 transition-colors text-center"
        onClick={handleSubmit}
      >
        Submit Survey
      </button>
    </div>
  );
};

export default SubmitSurvey;