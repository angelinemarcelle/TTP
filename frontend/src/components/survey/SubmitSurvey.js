import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitSurvey = ({ surveyData, mentorRequest }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("Submitting survey data:", surveyData);

      // Submit general survey data
      await axios.post('http://127.0.0.1:8000/save_survey_results', surveyData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Check if there is a mentorRequest and submit it to the recommend_mentor endpoint
      if (mentorRequest) {
        const mentorRecommendation = await axios.get('http://127.0.0.1:8000/recommend_mentor', {
          params: {
            mentor_request: mentorRequest
          }
        });

        console.log("Mentor recommendation received:", mentorRecommendation.data);

        // Navigate to the MatchedMentorship component and pass the mentor and buddy data
        navigate('/matched-mentorship', {
          state: {
            mentor: {
              details: mentorRecommendation.data
            },
            buddy: {
              // details: buddy
            }
          }
        });
      } else {
        // Navigate to a success page or another relevant page if no mentorRequest is provided
        navigate('/matched-mentorship');
      }
    } catch (error) {
      console.error('Failed to submit survey:', error);
      alert(`Failed to submit survey: ${error.response ? error.response.data.message : 'Server unreachable'}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-black pb-10 pt-5">
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