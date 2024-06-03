import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const SurveyNo8 = ({ updateResponses }) => {
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [otherGoal, setOtherGoal] = useState('');

  const handleGoalChange = (event) => {
    const goal = event.target.value;
    if (event.target.checked) {
      setSelectedGoals([...selectedGoals, goal]);
      updateResponses('question8', selectedGoals);
    } else {
      setSelectedGoals(selectedGoals.filter(item => item !== goal));
      updateResponses('question8', selectedGoals);
    }
  };

  const handleOtherGoalChange = (event) => {
    setOtherGoal(event.target.value);
    updateResponses('question8', event.target.value);
  };

  return (
    <div className="min-h-[75vh] bg-black flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What is your primary goal for participating in the buddy program?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Networking" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Networking')} />
                Networking
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Skill Development" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Skill Development')} />
                Skill Development
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Cultural Integration" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Cultural Integration')} />
                Cultural Integration
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Providing Mentorship" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Providing Mentorship')} />
                Providing Mentorship
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Receiving Mentorship" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Receiving Mentorship')} />
                Receiving Mentorship
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" value="Other" className="mr-2" onChange={handleGoalChange} checked={selectedGoals.includes('Other')} />
                Other
              </label>
              {selectedGoals.includes('Other') && (
                <input 
                  type="text"
                  value={otherGoal}
                  onChange={handleOtherGoalChange}
                  placeholder="Please specify"
                  className="block w-[50vh] p-2 border border-red-600 rounded-md mb-4"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo8;