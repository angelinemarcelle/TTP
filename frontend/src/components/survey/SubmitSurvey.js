import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitSurvey = ({ surveyData }) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    // try {
    //   console.log("Submitting survey data:", surveyData);

    //   // Use Axios for the API call
    //   await axios.post('https://api.yourdomain.com/submit_survey', surveyData, {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });

    //   // Navigate to the thank-you page on successful submission
    //   navigate('/survey-completed');
    // } catch (error) {
    //   console.error('Failed to submit survey:', error);
    //   // Handle errors more gracefully
    //   alert(`Failed to submit survey: ${error.response ? error.response.data.message : 'Server unreachable'}`);
    // }
    console.log(surveyData)
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