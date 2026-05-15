import React from 'react';
import '../AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-container" id="about">
      <div className="about-content">
        <h2 className="about-title">Our Why</h2>
        <p className="about-paragraph">
          The Zora Collective is a curated space where Nairobi’s most ambitious 
          women meet at the intersection of wellness and growth. We believe 
          that girlhood should be as intellectual as it is fun—from mastering 
          financial literacy to exploring the wonders of neuroplasticity through DIY crafts.
        </p>
        <div className="accent-dash"></div>
      </div>
    </section>
  );
}