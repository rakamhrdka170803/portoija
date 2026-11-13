import React from 'react';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Organization from './components/Organization';
import Experience from './components/Experience';
import PortfolioProjects from './components/PortfolioProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#04020b] text-slate-100 overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Dynamic Starfield & Nebula Canvas Background */}
      <GalaxyBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        {/* Hero & Profil Singkat */}
        <Hero />

        {/* 1. Organisasi & Volunteering */}
        <Organization />

        {/* 2. Pengalaman Kerja */}
        <Experience />

        {/* 3. Portofolio Karya Sebelumnya (Kartu dengan Foto Real & Lightbox) */}
        <PortfolioProjects />

        {/* Keahlian & Sertifikasi Real dari CV */}
        <Skills />

        {/* Hubungi Saya & Kontak */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
