import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import ContactCTA from './components/ContactCTA';
import { IconWhatsApp } from './components/Icons';

function App() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-glow"></div>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Process />
        <Services />
        <Portfolio />
        <ContactCTA />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/5548999324253"
          target="_blank"
          rel="noreferrer"
          className="floating-wa"
          title="Falar com a NexaSync"
        >
          <IconWhatsApp size={28} color="#0A0A0A" />
        </a>
      </div>
    </>
  );
}

export default App;
