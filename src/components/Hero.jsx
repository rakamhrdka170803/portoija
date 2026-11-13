import React from 'react';
import { MessageSquare, Download, MapPin, Award, CheckCircle2, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const Hero = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#38bdf8', '#c084fc', '#f472b6', '#ffffff'],
    });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#160a36]/90 border border-purple-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-purple-200">
                Terbuka untuk Project In Charge (PIC) & Event Collaboration
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-sm sm:text-base font-semibold tracking-widest uppercase text-cyan-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Profil & Portofolio Resmi
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-heading font-black tracking-tight leading-[1.1]">
                <span className="text-white">Muhammad</span>{' '}
                <span className="text-gradient-galaxy">Faisal Maulani</span>
              </h1>
            </div>

            {/* Role & Core Identity */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 to-indigo-950/40 border border-purple-500/20 backdrop-blur-md w-full">
              <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-100 to-cyan-300">
                Event Management, Production Logistics Specialist & Creative Operations PIC
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bandung, Jawa Barat
                </span>
                <span className="text-purple-600">•</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Award className="w-3.5 h-3.5 text-purple-400" /> S1 Ilmu Komunikasi UNISBA
                </span>
                <span className="text-purple-600">•</span>
                <span className="text-cyan-300 font-medium">3+ Tahun Pengalaman</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Spesialis eksekusi panggung dan operasional acara dengan rekam jejak menangani konser berskala nasional, turnamen e-sports, hingga festival akbar. Terbiasa memimpin sebagai <strong className="text-white font-semibold">Project In Charge (PIC)</strong>, mengelola vendor, tata letak venue, koordinasi artis papan atas, hingga pengawasan tata cahaya panggung (<span className="text-purple-300 italic">lighting show</span>).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="https://wa.me/6285954834026?text=Halo%20Faisal,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20tentang%20proyek%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Diskusi Proyek via WhatsApp</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="/CV_Muhammad_Faisal_Maulani.pdf"
                  download="CV_Muhammad_Faisal_Maulani.pdf"
                  onClick={triggerConfetti}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-[#160c38] hover:bg-[#201252] border border-purple-500/30 hover:border-purple-400 transition-all duration-200 shadow-md"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download CV</span>
                </a>

                <a
                  href="/Portfolio_Muhammad_Faisal_Maulani.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-[#12082b] hover:bg-[#1d0e44] border border-indigo-500/30 hover:border-cyan-400 transition-all duration-200 shadow-md"
                >
                  <span>PDF Asli</span>
                </a>
              </div>
            </div>

            {/* Key Trust Signals / Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-purple-900/40 w-full">
              <div className="p-3 rounded-xl bg-[#0e0724]/70 border border-purple-500/15">
                <p className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                  3+ Thn
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Pengalaman Event</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0e0724]/70 border border-purple-500/15">
                <p className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  15+
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Proyek Skala Nasional</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0e0724]/70 border border-purple-500/15">
                <p className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                  100%
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Tanggung Jawab PIC</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0e0724]/70 border border-purple-500/15">
                <p className="text-2xl sm:text-3xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                  3.23
                </p>
                <p className="text-xs text-slate-400 mt-0.5">IPK S1 UNISBA</p>
              </div>
            </div>

          </div>

          {/* Right Column: Cosmic Photo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Decorative Cosmic Halo Glows */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-60 animate-pulse-slow" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-400/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600/30 rounded-full blur-2xl" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1b0d3d] via-[#110729] to-[#080317] border border-purple-500/30 shadow-2xl p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900">
                  <img
                    src="/profile.jpeg"
                    alt="Muhammad Faisal Maulani"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Cosmic Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09041a] via-transparent to-transparent opacity-80" />
                  
                  {/* Tag on photo */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="p-3 rounded-xl bg-[#0e0724]/85 backdrop-blur-md border border-purple-500/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                            Lead Operator & Coordinator
                          </p>
                          <p className="text-base font-bold text-white">
                            Muhammad Faisal Maulani
                          </p>
                        </div>
                        <span className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-cyan-300">
                          <ShieldCheck className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tag 1: Top Right */}
                <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#140b33]/95 border border-purple-500/40 backdrop-blur-lg shadow-xl shadow-purple-950/80">
                  <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
                  <span className="text-xs font-bold text-purple-100">Dewa 19 & MPL Season 14</span>
                </div>

                {/* Floating Tag 2: Bottom Left */}
                <div className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#140b33]/95 border border-cyan-500/40 backdrop-blur-lg shadow-xl shadow-blue-950/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-100">Lighting & Field Logistics PIC</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
