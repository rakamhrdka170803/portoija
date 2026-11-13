import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Sparkles, MessageSquare, Download, Globe2, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#38bdf8', '#34d399', '#ffffff'],
    });
  };

  return (
    <section id="kontak" className="relative py-20 lg:py-28 overflow-visible bg-[#04020b]/95">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[300px] bg-gradient-to-t from-purple-900/20 via-blue-900/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>KOLABORASI & KOMUNIKASI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Hubungi <span className="text-gradient-galaxy">Saya</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Siap berkontribusi secara profesional untuk mendukung kesuksesan operasional dan strategis acara Anda.
          </p>
        </div>

        {/* Executive Contact Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#140a36]/90 via-[#0e0624]/95 to-[#070314]/95 border border-purple-500/30 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Sisi Kiri: Kontak Langsung */}
            <div className="space-y-4 flex flex-col justify-between">
              
              <div>
                <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  Saluran Kontak Langsung
                </h3>

                <div className="space-y-3.5">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6285954834026?text=Halo%20Muhammad%20Faisal%20Maulani,%20saya%20ingin%20berdiskusi%20mengenai%20proyek%20event."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#190c42]/60 hover:bg-[#23115c]/80 border border-purple-500/25 hover:border-green-400/50 transition-all group shadow-md"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-green-950/60 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400">WhatsApp / Telepon</p>
                        <p className="text-base font-bold text-white">0859 5483 4026</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-300 bg-green-950/60 px-3 py-1.5 rounded-xl border border-green-500/40">
                      Chat WA
                    </span>
                  </a>

                  {/* Email */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[#190c42]/60 border border-purple-500/25 shadow-md">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400">Email Resmi</p>
                        <p className="text-sm sm:text-base font-bold text-white truncate">muh.faisalm21@gmail.com</p>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('muh.faisalm21@gmail.com')}
                      className="shrink-0 p-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition-colors"
                      title="Salin Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Lokasi */}
                  <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#190c42]/60 border border-purple-500/25 shadow-md">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Basis Domisili</p>
                      <p className="text-sm sm:text-base font-bold text-white">Bandung, Jawa Barat (Siap Mobilisasi)</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Sisi Kanan: Bahasa yang Dikuasai & Unduh Berkas */}
            <div className="space-y-5 flex flex-col justify-between">
              
              {/* Bahasa yang Dikuasai (Menggantikan LinkedIn & IG) */}
              <div className="p-6 rounded-2xl bg-[#190c42]/60 border border-purple-500/25 shadow-md">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-heading font-bold text-white">
                    Bahasa yang Dikuasai
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#120730] border border-purple-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Bahasa Indonesia</p>
                      <p className="text-xs text-slate-400">Bahasa Utama</p>
                    </div>
                    <span className="text-xs font-bold text-green-300 bg-green-950/60 px-3 py-1 rounded-lg border border-green-500/30">
                      Fasih
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#120730] border border-purple-500/20 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">Bahasa Inggris</p>
                      <p className="text-xs text-slate-400">Komunikasi Internasional</p>
                    </div>
                    <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-lg border border-cyan-500/30">
                      Menengah / Advanced
                    </span>
                  </div>
                </div>
              </div>

              {/* Unduh Dokumen CV & Portofolio Resmi */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/70 to-indigo-950/70 border border-purple-500/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Dokumen CV Resmi</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Format PDF lengkap siap cetak</p>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href="/CV_Muhammad_Faisal_Maulani.pdf"
                    download="CV_Muhammad_Faisal_Maulani.pdf"
                    onClick={triggerConfetti}
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs font-bold text-white shadow-md transition-all hover:scale-105"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh CV</span>
                  </a>
                  <a
                    href="/Portfolio_Muhammad_Faisal_Maulani.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#12082b] hover:bg-[#1a0c3d] border border-purple-500/30 text-xs font-bold text-purple-200 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Porto PDF</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
