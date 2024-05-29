import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitSurvey = ({ surveyData }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("Submitting survey data:", surveyData);
      // Here you would typically make an API call to submit your survey data
      // const response = await fetch('https://api.yourdomain.com/submit_survey', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(surveyData)
      // });

      // Assuming the response is successful
      navigate('/survey-completed');  // Redirect to a confirmation or thank you page
    } catch (error) {
      console.error('Failed to submit survey:', error);
      // Handle failure (e.g., show an error message to the user)
    }
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