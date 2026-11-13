import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, FileText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Organisasi & Volunteering', href: '#organisasi' },
    { name: 'Pengalaman Kerja', href: '#pengalaman' },
    { name: 'Portofolio Karya', href: '#karya' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#070314]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#09041a] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300">
                  FM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-purple-300 transition-colors">
                MUHAMMAD FAISAL MAULANI
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-purple-300/80 tracking-wider uppercase">
                Event Management & PIC
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#12082b]/70 px-4 py-1.5 rounded-full border border-purple-500/20 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-purple-600/20 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/CV_Muhammad_Faisal_Maulani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 rounded-xl transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>CV PDF</span>
            </a>
            <a
              href="https://wa.me/6285954834026?text=Halo%20Muhammad%20Faisal%20Maulani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl shadow-md transition-all hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#140b33] border border-purple-500/30 text-slate-300 hover:text-white"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09041a]/95 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-purple-900/40 flex flex-col gap-2">
              <a
                href="/CV_Muhammad_Faisal_Maulani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-200"
              >
                <FileText className="w-4 h-4" />
                <span>Buka CV (PDF)</span>
              </a>
              <a
                href="https://wa.me/6285954834026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-xs font-semibold text-white shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
