import React from 'react';
import '../EventsSection.css';

export default function EventsSection() {
  const upcomingEvents = [
    {
      date: "30 May",
      title: "Neuroplasticity & Clay Workshop",
      time: "10:00 AM - 12:00 PM",
      description: "Join us for a hands-on workshop exploring the connection between neuroplasticity and creativity through clay modeling. Discover how engaging in creative activities can enhance brain function and promote mental well-being.",
      location: "Westlands, Nairobi",
      badge: "Whimsy",
      badgeColor: "#F3A2BE" // Bubble Gum
    },
    {
      date: "13 June",
      title: "Mindful Money & Chai",
      time: "10:00 AM - 1:00 PM",
      description: "Join us for a discussion on mindful money management and enjoy a cup of chai.",
      location: "Kilimani, Nairobi",
      badge: "Wealth",
      badgeColor: "#81BFB7" // Wintergreen
    }
  ];

  return (
    <section className="events-section">
      <h2 className="events-main-title">Upcoming Experiences</h2>
      <p className="events-subtitle">Curated spaces designed for connection, learning, and joy.</p>
      
      <div className="events-container">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-date-box" style={{ backgroundColor: event.badgeColor }}>
              <h3>{event.date.split(" ")[0]}</h3>
              <span>{event.date.split(" ")[1]}</span>
            </div>
            
            <div className="event-details">
              <span className="event-badge" style={{ backgroundColor: `${event.badgeColor}22`, color: event.badgeColor }}>
                {event.badge}
              </span>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-info">🕒 {event.time} | 📍 {event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
            
            <button className="book-btn" style={{ borderColor: event.badgeColor }}>
              Book Spot
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}