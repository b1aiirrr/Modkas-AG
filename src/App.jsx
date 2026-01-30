import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustSignals from './components/TrustSignals';
import VehicleGallery from './components/VehicleGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white text-base selection:bg-brand-orange/30">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <VehicleGallery />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
