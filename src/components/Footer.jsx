import React from 'react';
import '../Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">

        <div className="footer-cta-card">
            <h2>Become a part of the Zora Collective</h2>
            <p>Sunscribe to receive personal invitations to our upcoming experiences and weekly wellness notes</p>
            <div className="cta-input-group">
                <input type="email" placeholder="Enter your email" aria-label="Email address"/>
                <button className="cta-submit-btn">Join the Sisterhood</button>
            </div>
        </div>

        <div className="footer-main-content">
            <div className="footer-brand-column">
                <div className="footer-logo-placeholder">✨</div>
                <h3>The Zora Collective</h3>
                <p>A curated santuary for Nairobi's ambitious women meeting at the intersection of wellness, wealth and whimsy. </p>

            </div>

            <div className="footer-links-columns">
              <h4>Explore</h4>
              <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pillars">Our Pillars</a></li>
              <li><a href="#events">Upcoming Events</a></li>
              </ul>  
            </div>

          <div className="footer-links-column">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://whatsapp.com" target="_blank" rel="noreferrer">WhatsApp Community</a></li>
            <li><a href="mailto:hello@zoracollective.com">Contact Us</a></li>
          </ul>
        </div>
        </div>

        <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} The Zora Collective. Crafted with love in Nairobi.</p>
        </div>
        </footer>
  );
}