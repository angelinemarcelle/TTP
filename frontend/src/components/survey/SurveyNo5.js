import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo5 = ({ updateResponses }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  
  const handleHobbyChange = (event) => {
    const hobby = event.target.value;
    setSelectedHobbies(prevHobbies => {
      const newHobbies = event.target.checked
        ? [...prevHobbies, hobby]
        : prevHobbies.filter(item => item !== hobby);

      // Update responses immediately after state update
      updateResponses('question5', newHobbies);

      return newHobbies;
    });
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
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What are your main hobbies or interests outside of work?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              {['Sports & Working Out', 'Arts and Crafts', 'Reading', 'Tech Gadgets', 'Travel', 'Food & Cooking'].map(hobby => (
                <label key={hobby} className="block mb-4 text-red-600">
                  <input
                    type="checkbox"
                    name="hobbies"
                    value={hobby}
                    className="mr-2"
                    onChange={handleHobbyChange}
                    checked={selectedHobbies.includes(hobby)}
                  />
                  {hobby}
                </label>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo5;