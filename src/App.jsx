import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AICenter from './pages/AICenter';
import CreateRequestPage from './pages/CreateRequestPage';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import JoinPage from './pages/JoinPage';
import NotificationsPage from './pages/NotificationsPage';
import MessagesPage from './pages/MessagesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ExplorePage from './pages/ExplorePage';
import OnboardingPage from './pages/OnboardingPage';
import RequestDetailPage from './pages/RequestDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StudentList from './components/StudentList';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster position="top-right" reverseOrder={false} />
      <div className="antialiased font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/feed" element={<ExplorePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/ai-center" element={<AICenter />} />
          <Route path="/create-request" element={<CreateRequestPage />} />
          <Route path="/post-request" element={<CreateRequestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/request/:id" element={<RequestDetailPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/student" element={<StudentList />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
