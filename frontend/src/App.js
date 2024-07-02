import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SurveyPrompt from './components/survey/SurveyPrompt';
import SurveyPage from './pages/survey_page';

import HomePage from './pages/home_page';
import MentorBuddyPage from './pages/mentorbuddy_page';
import EventsPage from './pages/events_page';
import ErrorPage from './pages/error_page';
import ArticlesPage from './pages/articles_page';
import ArticleDetail from "./pages/articles_detail_page"
import UserProfile from './pages/user_profile';

import MatchedMentorship from './components/survey/MatchedMentorship';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/mentorbuddy" element={<MentorBuddyPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />} />
        <Route path="/survey" element={<SurveyPrompt />} />
        <Route path="/fullsurvey" element={<SurveyPage />} />
        <Route path="/matched-mentorship" element={<MatchedMentorship />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;