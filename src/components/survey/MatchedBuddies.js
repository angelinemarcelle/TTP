import React from 'react';

const MatchedBuddies = ({ buddyName }) => {
    console.log('Buddy Name:', buddyName); // This will show what value is being received
  
    return (
      <div className="min-h-screen bg-green-200 flex items-center justify-center p-5">
        <div className="bg-white shadow-lg rounded-lg p-10 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">You are matched!</h1>
          <p className="text-lg text-black">
            You are matched with <strong>{buddyName}</strong>.
          </p>
        </div>
      </div>
    );
};

export default MatchedBuddies;