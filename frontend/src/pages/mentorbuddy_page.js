import React from 'react';
import BuddiesGallery from '../components/mentorship/BuddiesGallery'
import SurveyPrompt from '../components/survey/SurveyPrompt';
import MentorGallery from '../components/mentorship/NewMentorGallery';


const MentorBuddyPage = () => {
    return (
        <div>
            <MentorGallery />
            <BuddiesGallery />
            <SurveyPrompt />
        </div>
    );
}

export default MentorBuddyPage;