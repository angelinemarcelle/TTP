import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; // Assuming the path is correct

const SurveyNo9 = () => {
  const navigate = useNavigate();
  const [hasPreferences, setHasPreferences] = useState(false);
  const [preferences, setPreferences] = useState('');

  const handlePreferenceChange = (event) => {
    setHasPreferences(event.target.value === 'Yes');
  };

  const handlePreferencesDetail = (event) => {
    setPreferences(event.target.value);
  };

  const handleSubmit = () => {
    navigate('/MatchedBuddies');
  };

  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center p-5">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>
        <div className="flex flex-col w-3/4 pl-5">
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">Do you have any specific preferences or needs for a buddy in terms of professional background or expertise areas?</h1>
          <form className="w-full" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="text-left inner-form w-auto mx-auto">
                <label className="block mb-4 text-red-600">
                <input type="radio" name="preference" value="Yes" onChange={handlePreferenceChange} checked={hasPreferences} className="mr-2"/>
                Yes
                </label>
                {hasPreferences && (
                    <input
                    type="text"
                    value={preferences}
                    onChange={handlePreferencesDetail}
                    placeholder="Please specify your preferences"
                    className="mt-2 mb-4 p-2 border rounded"
                    />
                )}
                <label className="block text-red-600">
                <input type="radio" name="preference" value="No" onChange={handlePreferenceChange} checked={!hasPreferences} className="mr-2"/>
                No
                </label>
            </div>
            <button
              type="submit"
              className="absolute right-5 bottom-5 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center">
              Submit <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo9;