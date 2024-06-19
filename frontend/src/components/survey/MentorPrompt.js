import React, { useState } from 'react';
import BlackUBS3Keys from "../../image/logo/BlackUBS3KeysLogo.png";

const MentorPrompt = ({ updateMentorRequest }) => {
  const [request, setRequest] = useState('');

  const handleRoleChange = (event) => {
    setRequest(event.target.value);
    updateMentorRequest(event.target.value);
  };

  return (
    <div className="min-h-[50vh] bg-black flex items-center justify-center pt-40 pb-10">
      <div className="relative flex flex-row items-center bg-white bg-opacity-40 rounded-2xl shadow-xl px-5 py-20 w-full max-w-3xl overflow-hidden">
        {/* Logo Column */}
        <div className="flex flex-col items-center justify-center w-1/4">
          <img src={BlackUBS3Keys} alt="Logo" className="h-24 mb-4" />
        </div>

        {/* Question Column */}
        <div className="flex flex-col w-3/4 pl-5 pr-10">
          <h1 className="text-2xl font-bold text-red-600 mb-6">What do you look for in a mentor?</h1>
          <form className="w-full" onSubmit={handleRoleChange}>
            <div className="text-left inner-form w-auto mx-auto">
              <textarea
                name="text"
                className="w-full h-32 p-3 border border-red-600 rounded-md resize-none"
                placeholder="I want a mentor that works in the Finance department and has experience in Financial Modelling"
                onChange={handleRoleChange}
                value={request}
                style={{ fontSize: '0.875rem' }} // Adjusting font size to ensure visibility
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MentorPrompt;