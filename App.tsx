
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Memberships from './pages/Memberships';
import Trainers from './pages/Trainers';
import Blog from './pages/Blog';
import AIPlanner from './pages/AIPlanner';
import Locations from './pages/Locations';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/planner" element={<AIPlanner />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
