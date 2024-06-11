import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MatchedMentorship = () => {
  const location = useLocation();
  const mentor = location.state?.buddy;
  const buddy = location.state?.buddy;
  console.log('Location state:', location.state);
  console.log('Mentor data:', buddy);
  console.log('Buddy data:', buddy);

  if (!mentor && !buddy) {
    return <div>No mentor or buddy information available.</div>;
  }

  const renderDetails = (details) => (
    <div className="container mx-auto mt-10 lg:mt-0 p-5 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-4">{details.role} Information</h1>
        <img src={`/images/${details.role}${details.id}Image.png`} alt={`${details.role} Image`} className="mb-4 rounded-lg"/>
        <p className="text-lg font-semibold">{details.name}</p>
        <p>{details.short_desc}</p>
        <p className="mb-4"><strong>Hobbies:</strong> {details.hobby.replace(/[\[\]"]/g, '')}</p>
        <div className="flex space-x-4">
          <a href={`mailto:${details.email}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="hover:text-gray-400"/>
          </a>
          <a href={details.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-gray-400"/>
          </a>
          <a href={details.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:text-gray-400"/>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen p-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold p-5">Thank you for filling in the survey!</h1>
      </div>
      <div className="flex flex-auto content-center lg:space-x-2 items-start">
        <div className="flex-auto justify-center mr-2">
          {mentor && renderDetails({ ...mentor.details, role: 'Mentor' })}
        </div>
        <div className="flex-auto justify-center ml-2">
          {buddy && renderDetails({ ...buddy.details, role: 'Buddy' })}
        </div>
      </div>
    </div>
  );
};

export default MatchedMentorship;