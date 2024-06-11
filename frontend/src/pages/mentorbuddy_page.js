import React from 'react';
import MentorGallery from '../components/MentorGallery';
import BuddiesGallery from '../components/BuddiesGallery'
import SurveyPrompt from '../components/survey/SurveyPrompt';
import MentorPrompt from '../components/MentorPrompt';


const MentorBuddyPage = () => {
    return (
        <div>
            <SurveyPrompt />
            <MentorPrompt />
            <MentorGallery />
            <BuddiesGallery />
        </div>
    );
}

export default MentorBuddyPage;