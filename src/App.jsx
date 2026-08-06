import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BoxHoney from './components/BoxHoney';
import Skills from './components/Skills';
import CertificateSlider from './components/CertificateSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-egypt-blended-bg text-egypt-sand font-sans relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <BoxHoney />
        <Skills />
        <CertificateSlider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
