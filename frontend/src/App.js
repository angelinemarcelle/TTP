import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import EventSlider from './components/EventSlider';
import ImageGallery from './components/MentorGallery';
import BuddiesGallery from './components/BuddiesGallery';
import MentorGallery from './components/MentorGallery';
import TimerCountdown from './components/TimerCountdown';
import LogInBox from './components/LogInBox';
import UpdateProfileBox from './components/UpdateProfileBox';
import SurveyNo1 from './components/survey/SurveyNo1';
import SurveyNo2 from './components/survey/SurveyNo2';
import SurveyNo3 from './components/survey/SurveyNo3';
import SurveyNo4 from './components/survey/SurveyNo4';
import SurveyNo5 from './components/survey/SurveyNo5';
import SurveyNo6 from './components/survey/SurveyNo6';
import SurveyNo7 from './components/survey/SurveyNo7';
import SurveyNo8 from './components/survey/SurveyNo8';
import SurveyNo9 from './components/survey/SurveyNo9';
import MatchedBuddies from './components/survey/MatchedBuddies';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ImageSlider from './components/AboutUs/ImageSlider'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SurveyNo1 />} />
          <Route path="/survey2" element={<SurveyNo2 />} />
          <Route path="/survey3" element={<SurveyNo3 />} />
          <Route path="/survey4" element={<SurveyNo4 />} />
          <Route path="/survey5" element={<SurveyNo5 />} />
          <Route path="/survey6" element={<SurveyNo6 />} />
          <Route path="/survey7" element={<SurveyNo7 />} />
          <Route path="/survey8" element={<SurveyNo8 />} />
          <Route path="/survey9" element={<SurveyNo9 />} />
          <Route path="/MatchedBuddies" element={<MatchedBuddies buddyName="John Doe" />} />

        </Routes>
      </div>
      <Navbar />
      <ImageSlider />
      <AboutUs />
      <Footer />
      <MentorGallery />
      <BuddiesGallery />
      
    </Router>
  );
}

export default App;