import React from 'react';
import BuddiesGallery from '../components/BuddiesGallery'
import SurveyPrompt from '../components/survey/SurveyPrompt';
import MentorGallery from '../components/NewMentorGallery';


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