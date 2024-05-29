import React from 'react';
import MentorGallery from '../components/MentorGallery';
import BuddiesGallery from '../components/BuddiesGallery'
import SurveyPrompt from '../components/survey/SurveyPrompt';


const MentorBuddyPage = () => {
    return (
        <div>
            <SurveyPrompt />
            <MentorGallery />
            <BuddiesGallery />
        </div>
    );
}

export default MentorBuddyPage;