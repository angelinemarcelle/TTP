import React from 'react';
import { useState } from 'react';
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
    const [surveyResponses, setSurveyResponses] = useState({
        buddy_id: 21,
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
    });
  
    const updateResponses = (key, value) => {
      setSurveyResponses(prev => ({ ...prev, [key]: value }));
    };
  
    return (
      <div className="bg-grey">
        <SurveyNo1 updateResponses={updateResponses} />
        <SurveyNo2 updateResponses={updateResponses} />
        <SurveyNo3 updateResponses={updateResponses} />
        <SurveyNo4 updateResponses={updateResponses} />
        <SurveyNo5 updateResponses={updateResponses} />
        <SurveyNo6 updateResponses={updateResponses} />
        <SurveyNo7 updateResponses={updateResponses} />
        <SurveyNo8 updateResponses={updateResponses} />

        {/* Render other survey components with updateResponses passed as props */}
        <SubmitSurvey surveyData={surveyResponses} />
      </div>
    );
  };
  
  export default SurveyPage;