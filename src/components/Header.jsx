import React, { useState, useEffect } from 'react';
import '../Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'pillars', 'events'];
      const scrollPosition = window.scrollY + 120; // Accounts for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-container">
      <div className="logo-placeholder">✨</div>
      <nav className="nav-menu">
        {['home', 'about', 'pillars', 'events'].map((sec) => (
          <a
            key={sec}
            className={`nav-link ${activeSection === sec ? 'active' : ''}`}
            href={`#${sec}`}
          >
            {sec === 'home' ? 'Home' : sec === 'about' ? 'About Us' : sec === 'pillars' ? 'Communities' : 'Events'}
          </a>
        ))}
        <button className="nav-button">Join Us</button>
      </nav>
    </header>
  );
}