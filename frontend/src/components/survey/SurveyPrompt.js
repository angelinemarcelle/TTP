import React from 'react';

const SurveyPrompt = () => {
  // Function to handle opening a new window
  const startSurvey = () => {
    // Open a new window with the specified URL
    window.open('/fullsurvey', '_blank');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-md text-center p-10 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Help Us Match You Perfectly!</h1>
        <p className="text-gray-600 mb-6">
          Take a moment to fill out our survey. Your responses will help us match you with the ideal mentor and buddy for your professional journey.
        </p>
        <button
          className="bg-red-600 text-white py-2 px-4 font-bold rounded hover:bg-red-700 transition-colors"
          onClick={startSurvey}  // Use the startSurvey function for onClick
          aria-label="Take our matching survey"
        >
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyPrompt;