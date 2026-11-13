import React from 'react';
import { Sparkles, Compass, Lightbulb, Users, FileCheck, Layers, Music, Zap } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6 text-purple-400" />,
      title: 'Project In Charge (PIC) & Lapangan',
      description: 'Mengomandani seluruh alur teknis lapangan dari titik nol pengukuran venue, flow penonton, tata letak booth, hingga pembongkaran aman tepat waktu.',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-cyan-400" />,
      title: 'Lighting Show & Stage Atmosphere',
      description: 'Memahami tata artistik pencahayaan panggung sebagai instrumen emosi dan visual storytelling yang membuat setiap konser menjadi momen megah.',
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: 'Komunikasi & Talent Liaison',
      description: 'Menjadi jembatan komunikasi diplomatis dan solid antara Event Organizer (EO), vendor teknis, kru lapangan, hingga manajemen artis nasional.',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-indigo-400" />,
      title: 'Administrasi & Finansial Rapi',
      description: 'Pengelolaan invoice profesional, penghitungan estimasi waktu kerja pengerjaan tenda/booth, dan transparansi koordinasi vendor.',
    },
  ];

  return (
    <section id="tentang" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TENTANG SAYA & NILAI KERJA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Menghadirkan Presisi di Balik Kemegahan <span className="text-gradient-galaxy">Panggung Acara</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Kombinasi latar belakang akademis Ilmu Komunikasi dengan jam terbang operasional lapangan menangani konser akbar, festival musik, dan aktivasi brand nasional.
          </p>
        </div>

        {/* Narrative Box + Philosophy Carousel/Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#13092e]/90 via-[#0d0621]/90 to-[#070314]/90 border border-purple-500/25 shadow-xl backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Dedikasi Operasional & Manajemen Komunikasi
                </h3>
              </div>
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Saya adalah lulusan <strong className="text-purple-300 font-semibold">S1 Ilmu Komunikasi Universitas Islam Bandung (IPK 3.23)</strong> yang telah aktif berkecimpung di industri manajemen acara, produksi logistik, dan desain grafis sejak tahun 2022.
                </p>
                <p>
                  Dalam setiap penyelenggaraan event, saya terbiasa memegang kendali sebagai <strong className="text-white font-semibold">Project In Charge (PIC)</strong>. Tugas ini mencakup pengukuran akurasi venue di lapangan, perancangan denah layout teknis, negosiasi dan pengawasan vendor, hingga koordinasi lintas divisi yang menuntut kecepatan dan ketepatan pengambilan keputusan.
                </p>
                <p>
                  Bagi saya, keberhasilan sebuah acara tidak hanya diukur dari ramainya penonton, melainkan dari rantai kerja di balik panggung yang berjalan mulus, aman, terstruktur, dan tepat sasaran secara anggaran dan waktu.
                </p>
              </div>
            </div>

            {/* Quick Metrics Badge in card */}
            <div className="pt-6 mt-6 border-t border-purple-500/20 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div>
                <span className="text-xs text-purple-300 uppercase tracking-wider block">Pendidikan</span>
                <span className="font-bold text-white text-sm">S1 Ilmu Komunikasi</span>
              </div>
              <div>
                <span className="text-xs text-cyan-300 uppercase tracking-wider block">Universitas</span>
                <span className="font-bold text-white text-sm">UNISBA Bandung</span>
              </div>
              <div>
                <span className="text-xs text-pink-300 uppercase tracking-wider block">Spesialisasi</span>
                <span className="font-bold text-white text-sm">PIC & Event Logistics</span>
              </div>
            </div>
          </div>

          {/* Philosophy Card - Lighting Show */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden p-8 bg-gradient-to-br from-[#1a0c40] via-[#10072b] to-[#08031a] border border-purple-500/40 shadow-2xl flex flex-col justify-between group">
            
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/30 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/50 border border-purple-400/30 text-xs font-semibold text-purple-200">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  FILOSOFI PRODUKSI
                </span>
                <Music className="w-5 h-5 text-purple-400" />
              </div>

              <h4 className="text-2xl font-heading font-black text-white mb-4">
                The Power of <span className="text-gradient-purple">Lighting Show</span>
              </h4>

              <blockquote className="text-slate-200 text-sm sm:text-base italic leading-relaxed pl-4 border-l-2 border-purple-400/60 my-4">
                "Di balik gemerlap cahaya sebuah event, lighting show bukan sekadar penerangan — ia adalah bahasa visual yang menghadirkan suasana, mengarahkan perhatian, dan membangkitkan emosi. Setiap warna, gerak, dan sorotannya menyampaikan cerita, memperkuat identitas acara, serta menciptakan pengalaman yang tak terlupakan."
              </blockquote>

              <p className="text-xs text-purple-300 font-medium">
                — Kutipan Nilai Artistik Muhammad Faisal Maulani
              </p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-purple-800/40 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span>Audio Visual & Stage Illumination</span>
              </div>
              <span className="text-xs font-semibold text-cyan-400">GrandMA & DMX Control</span>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0f0727]/80 hover:bg-[#150a36]/90 border border-purple-500/20 hover:border-purple-400/50 shadow-lg backdrop-blur-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
