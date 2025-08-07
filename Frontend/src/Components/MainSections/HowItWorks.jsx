import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Choose Your Destination",
      description: "Browse our wide selection of hand-picked travel packages and destinations tailored for every type of traveler."
    },
    {
      stepNumber: 2,
      title: "Book with Ease",
      description: "Our seamless booking process allows you to secure your trip in just a few clicks, with secure payment options."
    },
    {
      stepNumber: 3,
      title: "Enjoy Your Adventure",
      description: "All the details are handled. All you have to do is show up and create memories that will last a lifetime."
    }
  ];

  return (
    <section className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">{step.stepNumber}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;