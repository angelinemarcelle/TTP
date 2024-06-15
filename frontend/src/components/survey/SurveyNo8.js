import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo8 = ({ updateResponses }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);

  // const handleGoalChange = (event) => {
  //   const goal = event.target.value;
  //   setSelectedGoals(prevGoals => {
  //     const newGoals = event.target.checked
  //       ? [...prevGoals, goal]
  //       : prevGoals.filter(item => item !== goal);

  //     // Update responses immediately after state update
  //     updateResponses('question8', newGoals);

  //     return newGoals;
  //   });
  // };


  const handleGoalChange = (event) => {
    setSelectedGoals(event.target.value);
    updateResponses('question8', event.target.value);
  };

  return (
    <div className="min-h-[50vh] bg-black flex items-center justify-center p-10">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What is your primary goal for participating in the buddy program?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Networking" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Networking')} />
                Networking
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Skill Development" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Skill Development')} />
                Skill Development
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Cultural Integration" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Cultural Integration')} />
                Cultural Integration
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Providing Mentorship" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Providing Mentorship')} />
                Providing Mentorship
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" value="Receiving Mentorship" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Receiving Mentorship')} />
                Receiving Mentorship
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo8;