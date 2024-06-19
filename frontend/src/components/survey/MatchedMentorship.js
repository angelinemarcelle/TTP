import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const MatchedMentorship = () => {
  const location = useLocation();
  const mentor = location.state?.mentor;
  const buddy = location.state?.buddy;
  console.log('Location state:', location.state);
  console.log('Mentor data:', mentor);
  console.log('Buddy data:', buddy);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!mentor && !buddy) {
    return <div>No mentor or buddy information available.</div>;
  }

  const renderMentorDetails = (details) => (
    <div className="container mx-auto mt-10 lg:mt-0 p-5 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-4">Mentor Information</h1>
        <p className="text-lg font-semibold">{details.name}</p>
        <p><strong>Department:</strong> {details.department}</p>
        <p><strong>Position:</strong> {details.position}</p>
        <p><strong>Description:</strong> {details.short_desc}</p>
        <p><strong>Specialization:</strong> {details.specialization}</p>
        <p><strong>Email:</strong> <a href={`mailto:${details.email}`}>{details.email}</a></p>
        <div className="flex space-x-4 mt-4">
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

  const renderBuddyDetails = (details) => (
    <div className="container mx-auto mt-10 lg:mt-0 p-5 bg-gray-800 rounded-lg shadow-lg">
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-4">Buddy Information</h1>
        <p className="text-lg font-semibold">{details.name}</p>
        <p><strong>Role:</strong> {details.role}</p>
        <p><strong>Description:</strong> {details.short_desc}</p>
        <p><strong>Professional Interest:</strong> {details.professional_interest}</p>
        <p><strong>Hobbies:</strong> {details.hobby?.replace(/[\[\]"]/g, '') || 'N/A'}</p>
        <p><strong>Years of Experience:</strong> {details.years_of_experience}</p>
        <p><strong>Meeting Preference:</strong> {details.meeting_preference}</p>
        <p><strong>Interaction Frequency:</strong> {details.interaction_frequency}</p>
        <p><strong>Email:</strong> <a href={`mailto:${details.email}`}>{details.email}</a></p>
        <div className="flex space-x-4 mt-4">
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
      <div className="space-y-10">
        {mentor && renderMentorDetails(mentor.details)}
        {buddy && renderBuddyDetails(buddy.details.details)}
      </div>
    </div>
  );
};

export default MatchedMentorship;
