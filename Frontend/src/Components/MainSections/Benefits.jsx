import React from 'react';
import './Benefits.css'; // Assuming you have a CSS file for styling

const Benefits = () => {
  const benefits = [
    {
      title: "Best Price Guarantee",
      description: "We offer the most competitive prices, so you can travel without worrying about your budget.",
      icon: "💸"
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help you with any questions or issues.",
      icon: "📞"
    },
    {
      title: "Hand-Picked Destinations",
      description: "Explore unique and breathtaking destinations carefully selected by our travel experts.",
      icon: "🗺"
    }
  ];

  return (
    <section className="benefits-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;