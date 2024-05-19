import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/survey3');  // Use the correct path for navigation
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">

        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center w-1/4"> 
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>

        {/* Question Column */}
        <div className="flex flex-col w-3/4 pl-5"> 
          <h1 className="text-2xl font-bold text-red-600 mb-6 p-2">Please select the option that best describes your current role at the bank:</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="radio" name="duration" value="Less than 1 Year" className="mr-2"/>
                Customer Service
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="duration" value="1-3 Years" className="mr-2"/>
                Operations
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="duration" value="3-5 Years" className="mr-2"/>
                Technology
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="duration" value="5+ Years" className="mr-2"/>
                Finance/Accounting
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="duration" value="5+ Years" className="mr-2"/>
                Management
              </label>
              <label className="block text-red-600">
                <input type="radio" name="duration" value="5+ Years" className="mr-2"/>
                Sales/Marketing
              </label>
            </div>
            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-5 bottom-5 py-2 px-4 hover:grey text-red-600 font-bold rounded-lg flex items-center justify-center"
            >
              Next <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo2;