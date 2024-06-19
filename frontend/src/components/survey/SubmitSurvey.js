import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const SubmitSurvey = ({ surveyData, mentorRequest }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      console.log("Submitting survey data:", surveyData);

      // Submit general survey data
      await axios.post('http://127.0.0.1:8000/save_survey_results', surveyData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Get buddy recommendation
      const buddyResponse = await axios.get('http://127.0.0.1:8000/recommend_buddy', {
        params: {
          user_id: surveyData.buddy_id
        }
      });

      const buddy = buddyResponse.data;
      console.log("Buddy recommendation received:", buddy);

      // Get mentor recommendation if there is a mentorRequest
      let mentor = null;
      if (mentorRequest) {
        const mentorResponse = await axios.get('http://127.0.0.1:8000/recommend_mentor', {
          params: {
            mentor_request: mentorRequest
          }
        });
        mentor = mentorResponse.data;
        console.log("Mentor recommendation received:", mentor);
      }

      // Navigate to the MatchedMentorship component and pass the mentor and buddy data
      navigate('/matched-mentorship', {
        state: {
          mentor: mentor ? { details: mentor } : null,
          buddy: { details: buddy }
        }
      });
    } catch (error) {
      console.error('Failed to submit survey:', error);
      alert(`Failed to submit survey: ${error.response ? error.response.data.message : 'Server unreachable'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-black pb-10 pt-5">
      {loading ? (
        <div className="flex flex-col items-center">
          <CircularProgress color="secondary" />
          <p className="text-white mt-2">Submitting survey, please wait...</p>
        </div>
      ) : (
        <button 
          className="bg-red-600 text-white py-2 px-4 font-bold rounded hover:bg-red-700 transition-colors text-center"
          onClick={handleSubmit}
        >
          Submit Survey
        </button>
      )}
    </div>
  );
};

export default SubmitSurvey;
