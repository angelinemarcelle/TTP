import React from 'react';
import SurveyNo1 from '../components/survey/SurveyNo1';
import SurveyNo2 from '../components/survey/SurveyNo2';
import SurveyNo3 from '../components/survey/SurveyNo3';
import SurveyNo4 from '../components/survey/SurveyNo4';
import SurveyNo5 from '../components/survey/SurveyNo5';
import SurveyNo6 from '../components/survey/SurveyNo6';
import SurveyNo7 from '../components/survey/SurveyNo7';
import SurveyNo8 from '../components/survey/SurveyNo8';
import SubmitSurvey from '../components/survey/SubmitSurvey';

const SurveyPage = () => {
  return (
    <div className="bg-grey">
      <SurveyNo1 />
      <SurveyNo2 />
      <SurveyNo3 />
      <SurveyNo4 />
      <SurveyNo5 />
      <SurveyNo6 />
      <SurveyNo7 />
      <SurveyNo8 />
      <SubmitSurvey />


    </div>
  );
};

export default SurveyPage;