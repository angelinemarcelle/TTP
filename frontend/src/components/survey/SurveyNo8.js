import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo8 = () => {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState({});
  const [otherGoal, setOtherGoal] = useState('');

  const handleGoalChange = (event) => {
    const { name, checked } = event.target;
    setSelectedGoals(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleOtherGoalChange = (event) => {
    setOtherGoal(event.target.value);
  };

  const handleNext = () => {
    navigate('/survey9');  // Use the correct path for navigation
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">What is your primary goal for participating in the buddy program?</h1>
          <form className="w-full">
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="Networking" onChange={handleGoalChange} checked={selectedGoals.Networking || false} className="mr-2"/>
                Networking
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="SkillDevelopment" onChange={handleGoalChange} checked={selectedGoals.SkillDevelopment || false} className="mr-2"/>
                Skill development
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="CulturalIntegration" onChange={handleGoalChange} checked={selectedGoals.CulturalIntegration || false} className="mr-2"/>
                Cultural integration
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="ProvidingMentorship" onChange={handleGoalChange} checked={selectedGoals.ProvidingMentorship || false} className="mr-2"/>
                Providing mentorship
              </label>
              <label className="block mb-4 text-red-600">
                <input type="checkbox" name="ReceivingMentorship" onChange={handleGoalChange} checked={selectedGoals.ReceivingMentorship || false} className="mr-2"/>
                Receiving mentorship
              </label>
              <label className="block text-red-600">
                <input type="checkbox" name="Other" onChange={handleGoalChange} checked={selectedGoals.Other || false} className="mr-2"/>
                Other
              </label>
              {selectedGoals.Other && (
                <input
                  type="text"
                  value={otherGoal}
                  onChange={handleOtherGoalChange}
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

export default SurveyNo8;