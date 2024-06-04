import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo4 = ({ updateResponses }) => {
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
    updateResponses('question4', event.target.value);
  };

  return (
    <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">

        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center w-1/4"> 
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>

        {/* Question Column */}
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">How often would you like to interact with your buddy?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              {/* Radio options dynamically generated */}
              {['Daily', 'Weekly', 'Bi-weekly', 'Monthly'].map((frequency) => (
                <label key={frequency} className="block mb-4 text-red-600">
                  <input
                    type="radio"
                    name="interactionFrequency"
                    value={frequency}
                    className="mr-2"
                    onChange={handleFrequencyChange}
                    checked={selectedFrequency === frequency}
                  />
                  {frequency}
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo4;