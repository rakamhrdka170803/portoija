import React from 'react';
import { ArrowUp, Heart, Shield, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030109] border-t border-purple-500/20 pt-12 pb-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/30">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-indigo-600 to-cyan-400 p-[1.5px]">
              <div className="w-full h-full bg-[#09041a] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-extrabold text-lg text-white">FM</span>
              </div>
            </div>
            <div>
              <p className="font-heading font-bold text-base text-white">
                Muhammad Faisal Maulani
              </p>
              <p className="text-xs text-purple-300">
                Event Management, Production Logistics Specialist & PIC
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300">
            <a href="#tentang" className="hover:text-purple-300 transition-colors">Tentang</a>
            <a href="#karya" className="hover:text-purple-300 transition-colors">Karya Proyek</a>
            <a href="#pengalaman" className="hover:text-purple-300 transition-colors">Pengalaman</a>
            <a href="#keahlian" className="hover:text-purple-300 transition-colors">Keahlian</a>
            <a href="#organisasi" className="hover:text-purple-300 transition-colors">Organisasi</a>
            <a href="#kontak" className="hover:text-purple-300 transition-colors">Kontak</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12082b] hover:bg-purple-900/40 border border-purple-500/30 text-xs font-semibold text-purple-200 transition-all hover:scale-105"
          >
            <span>Ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Muhammad Faisal Maulani. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Didesain dengan palet galaksi mewah & siap dideploy ke Vercel</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
