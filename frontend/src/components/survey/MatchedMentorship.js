import React from 'react';
import { useLocation } from 'react-router-dom';

const MatchedMentorship = () => {
  const location = useLocation();
  const buddy = location.state?.buddy;
  console.log('Location state:', location.state);
  console.log('Buddy data:', buddy);

  // Check if buddy data is available
  if (!buddy) {
    return <div>No buddy information available.</div>;
  }

  // Accessing details from buddy data
  const { details } = buddy;

  return (
    <div className="bg-black text-white min-h-screen p-20">
      <h1 className="text-2xl font-bold">Thank you for filling in the survey!</h1>  
      <div className="container mx-auto mt-10 p-5 bg-grey rounded-lg shadow-lg">
        <div className="text-black">
          <h1 className="text-2xl text-black font-bold">Matched Buddy Information</h1>
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Description:</strong> {details.short_desc}</p>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>LinkedIn:</strong> {details.linkedin}</p>
          <p><strong>Instagram:</strong> {details.instagram}</p>
          <p><strong>Hobbies:</strong> {details.hobby.replace(/[\[\]"]/g, '')}</p>
          <p><strong>Languages:</strong> {details.language.replace(/[\[\]"]/g, '')}</p>
        </div>
    </div>
  </div>
  );
};

export default MatchedMentorship;