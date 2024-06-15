import React from 'react';
import SurveyNo1 from './SurveyNo1';
import SurveyNo2 from './SurveyNo2';
import SurveyNo3 from './SurveyNo3';
import SurveyNo4 from './SurveyNo4';
import SurveyNo5 from './SurveyNo5';
import SurveyNo6 from './SurveyNo6';
import SurveyNo7 from './SurveyNo7';
import SurveyNo8 from './SurveyNo8';
import MentorPrompt from './MentorPrompt';

const FullSurvey = () => {
  return (
    <div className="bg-grey">

      <MentorPrompt />
      <SurveyNo1 />
      <SurveyNo2 />
      <SurveyNo3 />
      <SurveyNo4 />
      <SurveyNo5 />
      <SurveyNo6 />
      <SurveyNo7 />
      <SurveyNo8 />

    </div>
  );
};

export default FullSurvey;