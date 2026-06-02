import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import Pillars from './components/Pillars';
import EventsSection from './components/EventsSection'; 
import Footer from './components/Footer';// 1. Import it here
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home"><Banner /></div>
        <div id="about"><AboutSection /></div>
        <div id="pillars"><Pillars /></div>
        <div id="events"><EventsSection /></div> {/* 2. Add it here to match the nav link */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;