import React from 'react';
import '../Pillars.css';

export default function Pillars() {
  const pillarData = [
    {
      title: "Wellness",
      description: "Nourishing our bodies and minds through Pilates, Zumba, and mental health workshops.",
      color: "#C6E6E3" // Mint
    },
    {
      title: "Wealth",
      description: "Mastering financial literacy and building healthy money habits for the modern woman.",
      color: "#81BFB7" // Wintergreen
    },
    {
      title: "Whimsy",
      description: "Exploring creativity through pottery, sip & paint, and DIY neuroplasticity crafts.",
      color: "#F3A2BE" // Bubble Gum
    }
  ];

  return (
    <section className="pillars-section" id="pillars">
      <h2 className="pillars-main-title">The Three Pillars</h2>
      <div className="pillars-container">
        {pillarData.map((pillar, index) => (
          <div key={index} className="pillar-card" style={{ borderTop: `8px solid ${pillar.color}` }}>
            <h3 style={{ color: pillar.color }}>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}