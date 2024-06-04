import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo3 = ({ updateResponses }) => {
  const [selectedInterests, setSelectedInterests] = useState('');

  const handleInterestChange = (event) => {
    setSelectedInterests(event.target.value);
    updateResponses('question3', event.target.value);
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
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What are your key areas of professional development interest?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              {/* radio inputs for selecting multiple interests */}
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Leadership Skills" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Leadership Skills')} />
                Leadership Skills
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Technical Expertise" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Technical Expertise')} />
                Technical Expertise
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Regulatory Compliance" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Regulatory Compliance')} />
                Regulatory Compliance
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Project Management" className="mr-2" onChange={handleInterestChange} checked={selectedInterests.includes('Project Management')} />
                Project Management
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo3;