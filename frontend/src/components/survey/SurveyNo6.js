import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo6 = ({ updateResponses }) => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [otherLanguage, setOtherLanguage] = useState('');

  const handleLanguageChange = (event) => {
  const language = event.target.value;
    if (event.target.checked) {
      setSelectedLanguages([...selectedLanguages, language]);
      updateResponses('question6', event.target.value);
    } else {
      setSelectedLanguages(selectedLanguages.filter(item => item !== language));
      updateResponses('question6', event.target.value);
    }
  };

  const handleOtherLanguageChange = (event) => {
    setOtherLanguage(event.target.value);
    updateResponses('question6', event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent the default form submission behavior

  //   console.log('Selected Languages:', selectedLanguages);
  //   if (selectedLanguages.Other) {
  //     console.log('Other Language:', otherLanguage);
  //   }

  //   // Smooth scroll and navigation
  //   scrollToTop();
  //   setTimeout(() => {
  //     navigate('/survey7'); // Use the correct path for navigation
  //   }, 1500); // Delay of 1500 milliseconds before navigating
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
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