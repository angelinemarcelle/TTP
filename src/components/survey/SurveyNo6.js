import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo6 = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState({});
  const [otherLanguage, setOtherLanguage] = useState('');

  const handleLanguageChange = (event) => {
    const { name, checked } = event.target;
    setSelectedLanguages(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleOtherLanguageChange = (event) => {
    setOtherLanguage(event.target.value);
  };

  const handleNext = () => {
    navigate('/survey7');  // Use the correct path for navigation
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What languages are you fluent in and prefer to use in a professional context?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="English" onChange={handleLanguageChange} checked={selectedLanguages.English || false} className="mr-2"/>
                English
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="Cantonese" onChange={handleLanguageChange} checked={selectedLanguages.Cantonese || false} className="mr-2"/>
                Cantonese
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="Chinese" onChange={handleLanguageChange} checked={selectedLanguages.Chinese || false} className="mr-2"/>
                Chinese
              </label>
              <label className="block text-red-600">
                <input type="checkbox" name="Other" onChange={handleLanguageChange} checked={selectedLanguages.Other || false} className="mr-2"/>
                Other
              </label>
              {selectedLanguages.Other && (
                <input
                  type="text"
                  value={otherLanguage}
                  onChange={handleOtherLanguageChange}
                  placeholder="Please specify"
                  className="mt-2 mb-4 p-2 border rounded"
                />
              )}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-5 bottom-5 py-2 px-4 hover:grey text-red-600 font-bold rounded-lg flex items-center justify-center">
              Next <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo6;