import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/planner'); // ✅ This will route to AIPlanner
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Your Next Adventure Awaits</h1>
        <p>Explore breathtaking destinations and create unforgettable memories with us.</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;