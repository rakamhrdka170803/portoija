import React from 'react';
import { MessageSquare, Download, MapPin, Award, FileText, CheckCircle2 } from 'lucide-react';
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
    <section className="relative min-h-[90vh] pt-28 pb-16 lg:pt-36 lg:pb-20 flex items-center justify-center overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Sisi Kiri: Profil Singkat */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#160a36] border border-purple-500/30">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold text-purple-200">
                Project In Charge (PIC) & Event Logistics
              </span>
            </div>

            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 mb-1">
                Profil & Portofolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-tight">
                Muhammad <span className="text-gradient-galaxy">Faisal Maulani</span>
              </h1>
            </div>

            {/* Lokasi & Pendidikan Real */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 text-purple-300">
                <MapPin className="w-4 h-4 text-cyan-400" /> Bandung
              </span>
              <span className="text-purple-600">•</span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-purple-400" /> S1 Ilmu Komunikasi UNISBA (IPK 3.23)
              </span>
              <span className="text-purple-600">•</span>
              <span className="text-cyan-300 font-semibold">Pengalaman 3+ Tahun</span>
            </div>

            {/* Profil Singkat Real dari CV */}
            <div className="p-5 rounded-2xl bg-[#0f0727]/90 border border-purple-500/20 backdrop-blur-md">
              <p className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
                Profil Singkat
              </p>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Sarjana Ilmu Komunikasi Universitas Islam Bandung dengan pengalaman lebih dari 3 tahun di bidang event management, produksi logistik, dan desain grafis. Terbiasa memegang tanggung jawab sebagai Project In Charge (PIC), mengelola vendor, berkoordinasi lintas tim, serta memiliki kemampuan komunikasi yang kuat. Siap berkontribusi secara profesional untuk mendukung kesuksesan operasional dan strategis perusahaan.
              </p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="https://wa.me/6285954834026?text=Halo%20Muhammad%20Faisal%20Maulani,%20saya%20melihat%20portofolio%20Anda."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-900/40 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href="/CV_Muhammad_Faisal_Maulani.pdf"
                download="CV_Muhammad_Faisal_Maulani.pdf"
                onClick={triggerConfetti}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-[#150a33] hover:bg-[#1d0e46] border border-purple-500/30 transition-all"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="/Portfolio_Muhammad_Faisal_Maulani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-[#100727] hover:bg-[#190c3d] border border-indigo-500/30 transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Lihat Dokumen Porto</span>
              </a>
            </div>

            {/* Info Kontak Cepat */}
            <div className="pt-2 text-xs text-slate-400 flex flex-wrap gap-4">
              <span>WhatsApp: <strong className="text-slate-200">085954834026</strong></span>
              <span>Email: <strong className="text-slate-200">muh.faisalm21@gmail.com</strong></span>
            </div>

          </div>

          {/* Sisi Kanan: Foto Profil (Tanpa elemen floating yang kepotong!) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Card Bingkai Mewah */}
              <div className="p-3.5 rounded-3xl bg-gradient-to-b from-[#1c0d40] via-[#110729] to-[#080317] border border-purple-500/30 shadow-2xl glow-purple">
                
                {/* Wadah Foto dengan rounded rapi */}
                <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 relative">
                  <img
                    src="/profile.jpeg"
                    alt="Muhammad Faisal Maulani"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Gradien halus bawah foto */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09041a] to-transparent opacity-90" />
                </div>

                {/* Info Card di bawah foto - Rapi dan tidak kepotong */}
                <div className="mt-3 p-3.5 rounded-xl bg-[#0e0724] border border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                        Project In Charge (PIC)
                      </p>
                      <p className="text-base font-bold text-white">
                        Muhammad Faisal Maulani
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-purple-900/60 border border-purple-400/40 text-[11px] font-semibold text-cyan-300">
                      UNISBA
                    </span>
                  </div>
                  
                  {/* Real Experience Badges di dalam kartu */}
                  <div className="mt-2.5 pt-2 border-t border-purple-900/40 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-500/20">
                      MPL Season 14
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-500/20">
                      Dewa 19 & Dewa All Stars
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-500/20">
                      Pocari Sweat
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-purple-950 text-purple-200 border border-purple-500/20">
                      Lighting Show
                    </span>
                  </div>
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
