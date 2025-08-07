import React from 'react';
import "./TripForm.css"; // Assuming you have a CSS file for styling

const TripFrom = () => {
  return (
    <div className="trip-from-container">
      <h2>Where are you going from?</h2>
      <div className="input-group">
        <input 
          type="text" 
          placeholder="Enter your departure location"
          className="from-input"
        />
      </div>
    </div>
  );
};

export default TripFrom; // tripform