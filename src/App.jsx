import React from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Organization from './components/Organization';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#04020b] text-slate-100 overflow-x-hidden">
      {/* Dynamic Starfield & Nebula Background */}
      <GalaxyBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Organization />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
