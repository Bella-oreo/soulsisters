import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection'; // This must be here!
import Pillars from './components/Pillars';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Banner />
      <AboutSection />
      <Pillars />
      {/* You can add more components here as you build out the site */}
    </main>
    </div>
  );
}

export default App;
