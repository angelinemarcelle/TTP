import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EventSlider from './components/EventSlider';
import AboutUs from './components/AboutUs';
import ImageSlider from './components/AboutUs/ImageSlider';  // Note: Ensure usage or remove if not needed
import SurveyPrompt from './components/survey/SurveyPrompt';
import SurveyPage from './pages/survey_page';

import HomePage from './pages/home_page';
import MentorBuddyPage from './pages/mentorbuddy_page';
import EventsPage from './pages/events_page';
import ErrorPage from './pages/error_page';
import ArticlesPage from './pages/articles_page';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/mentorbuddy" element={<MentorBuddyPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/survey" element={<SurveyPrompt />} />
        <Route path="/fullsurvey" element={<SurveyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;