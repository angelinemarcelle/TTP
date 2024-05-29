import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png"; 

const SurveyNo7 = () => {
  const navigate = useNavigate();
  const [meetingPreference, setMeetingPreference] = useState('');

  const handleMeetingChange = (event) => {
    setMeetingPreference(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    console.log('Meeting Preference:', meetingPreference);

    // Smooth scroll and navigation
    scrollToTop();
    setTimeout(() => {
      navigate('/survey8');
    }, 1500);
  };

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
          <h1 className="text-2xl font-bold text-red-600 mb-6 pr-5">Do you prefer virtual meetings, in-person interactions, or a combination of both for your buddy interactions?</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="text-left inner-form w-auto mx-auto">
              <label className="block mb-4 text-red-600">
                <input type="radio" name="meetingPreference" value="Virtual Only" onChange={handleMeetingChange} checked={meetingPreference === 'Virtual Only'} className="mr-2"/>
                Virtual Only
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="meetingPreference" value="Face-to-face Only" onChange={handleMeetingChange} checked={meetingPreference === 'Face-to-face Only'} className="mr-2"/>
                Face-to-face Only
              </label>
              <label className="block mb-4 text-red-600">
                <input type="radio" name="meetingPreference" value="Hybrid" onChange={handleMeetingChange} checked={meetingPreference === 'Hybrid'} className="mr-2"/>
                Hybrid
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyNo7;