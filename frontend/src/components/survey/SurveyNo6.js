import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo6 = ({ updateResponses }) => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguages(prevLanguages => {
      const newLanguages = event.target.checked
        ? [...prevLanguages, language]
        : prevLanguages.filter(item => item !== language);

      // Update responses immediately after state update
      updateResponses('question6', newLanguages);

      return newLanguages;
    });
  };

  return (
    <div className="min-h-[50vh] bg-black flex items-center justify-center p-10">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What languages are you fluent in and prefer to use in a professional context?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              {['English', 'Cantonese', 'Chinese'].map(language => (
                <label key={language} className="block mb-4 text-red-600">
                  <input
                    type="checkbox"
                    name="languages"
                    value={language}
                    className="mr-2"
                    onChange={handleLanguageChange}
                    checked={selectedLanguages.includes(language)}
                  />
                  {language}
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo6;