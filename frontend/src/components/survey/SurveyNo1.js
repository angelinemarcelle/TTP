import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo1 = ({ updateResponses }) => {
  const [years, setYears] = useState('');

  const handleInputChange = (event) => {
    setYears(event.target.value);
    updateResponses('question1', event.target.value);
  };


  return (
    <div className="min-h-[50vh] bg-black flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl overflow-hidden">

        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center w-1/4"> 
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>

        {/* Question Column */}
        <div className="flex flex-col w-3/4 pl-5 overflow-auto"> 
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">How long have you worked at UBS?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto pr-10">
              <input 
                type="number" 
                name="years" 
                value={years} 
                onChange={handleInputChange} 
                className="w-full p-2 border border-red-600 rounded-md"
                placeholder="Enter number of years"
                min="0"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo1;