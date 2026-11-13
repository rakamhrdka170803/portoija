import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventConcept: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#38bdf8', '#34d399', '#ffffff'],
    });

    const waText = `Halo Muhammad Faisal Maulani, perkenalkan saya ${formData.name} (${formData.email}).\nKonsep Acara: ${formData.eventConcept || '-'}\nPesan: ${formData.message}`;
    const waUrl = `https://wa.me/6285954834026?text=${encodeURIComponent(waText)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="kontak" className="relative py-20 lg:py-28 overflow-hidden bg-[#04020b]/90">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[350px] bg-gradient-to-t from-purple-900/25 via-blue-900/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KOLABORASI & KOMUNIKASI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Mari Rancang Acara <span className="text-gradient-galaxy">Spektakuler Berikutnya</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Siap berkontribusi sebagai Project In Charge (PIC), manajemen logistik vendor, maupun supervisi tata cahaya & panggung konser Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#12082e]/90 to-[#0a0418]/90 border border-purple-500/25 shadow-xl backdrop-blur-xl">
              <h3 className="text-xl font-heading font-bold text-white mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285954834026?text=Halo%20Muhammad%20Faisal%20Maulani,%20saya%20ingin%20berdiskusi%20mengenai%20proyek%20event."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#160a36]/60 hover:bg-[#1f0f4a]/80 border border-purple-500/20 hover:border-cyan-400/50 transition-all group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-green-950/50 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp / Telepon</p>
                      <p className="text-sm font-bold text-white">0859 5483 4026</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded-lg border border-cyan-800/40">
                    Chat
                  </span>
                </a>

                {/* Email with copy */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#160a36]/60 border border-purple-500/20 group">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Email Resmi</p>
                      <p className="text-sm font-bold text-white truncate">muh.faisalm21@gmail.com</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('muh.faisalm21@gmail.com')}
                    className="shrink-0 p-2 rounded-lg bg-purple-900/30 hover:bg-purple-800/40 text-purple-300 transition-colors"
                    title="Salin Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#160a36]/60 border border-purple-500/20">
                  <div className="w-10 h-10 rounded-xl bg-blue-950/50 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Basis Operasional</p>
                    <p className="text-sm font-bold text-white">Bandung, Jawa Barat (Mobilisasi Nasional)</p>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-purple-900/30">
                <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
                  Tautan Profil Media & Karier
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/muhammadfaisalmaulani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#160b38] hover:bg-[#20104e] border border-purple-500/20 hover:border-blue-400 text-xs font-semibold text-slate-200 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/faisalmuhammadm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#160b38] hover:bg-[#20104e] border border-purple-500/20 hover:border-pink-400 text-xs font-semibold text-slate-200 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Download CV Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/20 to-blue-900/30 border border-purple-500/30 backdrop-blur-md flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Butuh Dokumen CV Lengkap?</h4>
                <p className="text-xs text-slate-400 mt-0.5">Versi format PDF siap cetak & tinjau</p>
              </div>
              <a
                href="/CV_Muhammad_Faisal_Maulani.pdf"
                download="CV_Muhammad_Faisal_Maulani.pdf"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-md shadow-purple-900/50 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form with WhatsApp Sync */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#12082e]/90 via-[#0e0624]/90 to-[#070314]/90 border border-purple-500/25 shadow-2xl backdrop-blur-xl h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-heading font-black text-white">
                      Kirim Pesan / Permintaan Kerjasama
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Isi formulir berikut, Anda akan langsung terhubung ke WhatsApp saya dengan draf pesan siap kirim.
                    </p>
                  </div>
                  <MessageSquare className="w-6 h-6 text-purple-400 hidden sm:block" />
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center space-y-3 my-8 animate-fadeIn">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-300">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Pesan Disiapkan!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Mengarahkan Anda ke WhatsApp untuk mengirim pesan langsung ke Muhammad Faisal Maulani...
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-purple-400 underline hover:text-purple-300 pt-2"
                    >
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Nama Anda / Nama Lembaga <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="cth. Bpk. Hendra / EO Nada Kreasi"
                          className="w-full px-4 py-3 rounded-xl bg-[#090417] border border-purple-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Email Kontak <span className="text-purple-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nama@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#090417] border border-purple-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Jenis / Konsep Event
                      </label>
                      <input
                        type="text"
                        value={formData.eventConcept}
                        onChange={(e) => setFormData({ ...formData, eventConcept: e.target.value })}
                        placeholder="cth. Konser Musik Outdoor, Brand Booth Activation, dll"
                        className="w-full px-4 py-3 rounded-xl bg-[#090417] border border-purple-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Rincian Pesan / Kebutuhan PIC <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ceritakan rencana acara, tanggal pelaksanaan, lokasi, atau peran yang Anda butuhkan..."
                        className="w-full px-4 py-3 rounded-xl bg-[#090417] border border-purple-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all duration-300 hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan ke WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-6 border-t border-purple-900/30 text-center">
                <p className="text-xs text-slate-400">
                  Respon cepat dalam waktu 1x24 jam untuk setiap tawaran kerja sama profesional.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
