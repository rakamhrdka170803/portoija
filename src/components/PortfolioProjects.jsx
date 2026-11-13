import React, { useState } from 'react';
import { Sparkles, Maximize2, X, Eye, Music, CheckCircle2 } from 'lucide-react';

const PortfolioProjects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Proyek nyata tanpa duplikasi Lighting Show di grid!
  const projectItems = [
    {
      id: 'tamansari',
      title: '2024 – Malam Puncak Tamansari Bukit Bandung (2023)',
      role: 'Vendor & PIC Sound, Lighting, Layout',
      image: '/portfolio/tamansari_stage.jpeg',
      description:
        'Mengatur tata letak venue, mengawasi show tata cahaya (lighting show), serta berkoordinasi langsung dengan panitia lokal di malam puncak perayaan.',
      category: 'Stage & Rigging',
      tag: 'Tamansari Bukit Bandung',
    },
    {
      id: 'pocari',
      title: 'Pocari Sweat (2024 & 2025)',
      role: 'Vendor Tenda Tenant & Instalasi',
      image: '/portfolio/pocari_tenant.jpeg',
      description:
        'Melakukan pengukuran lapangan, merancang layout area tenant, menyusun invoice, serta berkoordinasi intensif dengan pihak Event Organizer untuk kelancaran berdirinya instalasi.',
      category: 'Tenant & Layout',
      tag: 'Pocari Sweat',
    },
    {
      id: 'dewa19',
      title: 'Dewa All Stars & Sehari Bersama Djarum Coklat (2023)',
      role: 'PIC Area Booth Tenant FNB & Liaison Artis',
      image: '/portfolio/concert_crowd.jpeg',
      description:
        'Mengontrol area, estimasi bongkar-pasang tenda, dan manajemen invoice. Serta menjadi jembatan komunikasi utama antara pihak EO, vendor, dan manajemen artis papan atas Dewa 19.',
      category: 'Konser Akbar Musik',
      tag: 'Dewa All Stars & Dewa 19',
    },
    {
      id: 'ardan',
      title: 'Ardan Senja Syahdu Vol. 6 & Coklat Kita Silaturahmi (2025)',
      role: 'Vendor Instalasi & Pengambilan Keputusan Operasional',
      image: '/portfolio/fireworks.jpeg',
      description:
        'Berkoordinasi dengan EO dan memastikan kesiapan area venue serta pengambilan keputusan operasional cepat di lapangan.',
      category: 'Venue Readiness',
      tag: 'Ardan Senja Syahdu',
    },
    {
      id: 'ganes',
      title: 'Ganes Soundsystem (HUT Polri & Inaugurasi UNJANI)',
      role: 'Dokumentasi & Media',
      image: '/portfolio/faisal_backstage.jpeg',
      description:
        'Mendokumentasikan perangkat audio-visual dan menyunting konten visual untuk kebutuhan media sosial.',
      category: 'Dokumentasi & Media',
      tag: 'Ganes Sound & UNJANI',
    },
  ];

  const lightingShowData = {
    title: 'LIGHTING SHOW',
    role: 'Tata Artistik & Bahasa Visual Cahaya',
    image: '/portfolio/lighting_show.jpeg',
    quote:
      'Di balik gemerlap cahaya sebuah event, lighting show bukan sekadar penerangan ia adalah bahasa visual yang menghadirkan suasana, mengarahkan perhatian, dan membangkitkan emosi. Setiap warna, gerak, dan sorotannya menyampaikan cerita, memperkuat identitas acara, serta menciptakan pengalaman yang tak terlupakan. Karena terkadang, momen paling berkesan tidak hanya dilihat, tetapi juga dirasakan melalui cahaya.',
  };

  return (
    <section id="karya" className="relative py-20 lg:py-28 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>BAGIAN 3</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Portofolio <span className="text-gradient-galaxy">Karya Sebelumnya</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            Dokumentasi foto asli dari pengerjaan acara, panggung, dan operasional lapangan. Klik kartu untuk membuka foto dalam ukuran penuh.
          </p>
        </div>

        {/* 1. Satu-satunya SHOWCASE TATA CAHAYA: LIGHTING SHOW */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1b0d40]/90 via-[#110729]/95 to-[#080317]/95 border border-purple-500/35 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Teks Filosofi Asli */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wider uppercase text-cyan-300">
                  Visual Atmosphere & Production
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white">
                LIGHTING SHOW
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-purple-300">
                Tata Artistik & Bahasa Visual Cahaya Panggung
              </p>

              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic border-l-2 border-purple-400/80 pl-4 py-1.5 bg-purple-950/20 rounded-r-xl">
                "{lightingShowData.quote}"
              </blockquote>
            </div>

            {/* Foto Lighting Show Interaktif */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setSelectedItem(lightingShowData)}
                className="relative w-full max-w-md rounded-2xl overflow-hidden bg-black border border-purple-500/40 shadow-xl cursor-pointer group hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={lightingShowData.image}
                    alt="Lighting Show"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-bold text-white bg-purple-900/80 px-3 py-1.5 rounded-lg border border-purple-400/50 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-300" /> Buka Foto Lighting
                  </span>
                  <span className="text-[11px] text-purple-200 bg-black/60 px-2.5 py-1 rounded-md">
                    Dokumentasi Asli
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Grid Portofolio Karya Nyata (Tanpa Duplikasi Lighting Show) */}
        <div>
          <h3 className="text-lg font-heading font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            Dokumentasi Proyek & Operasional Acara
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#0d0622]/90 border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Foto Asli */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/70">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0622] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#09041a]/90 text-cyan-300 border border-cyan-500/30">
                      {item.tag}
                    </span>

                    <span className="absolute bottom-3 right-3 p-2 rounded-lg bg-purple-950/80 border border-purple-400/40 text-purple-200 group-hover:bg-purple-600 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Deskripsi Teks Asli */}
                  <div className="p-5">
                    <h4 className="text-base font-heading font-bold text-white group-hover:text-purple-300 transition-colors leading-snug mb-1.5">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs font-semibold text-cyan-400 mb-3">
                      {item.role}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-purple-900/30 flex items-center justify-between text-[11px] text-purple-300">
                  <span>Klik untuk perbesar foto</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal saat Gambar Diklik */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-[#100729] border border-purple-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-purple-900 border border-purple-400/40 text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 sm:p-7 bg-gradient-to-b from-[#140a36] to-[#0b051c]">
              <span className="text-xs font-bold text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 inline-block mb-2">
                {selectedItem.tag || 'Dokumentasi'}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-1">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-300 mb-3">
                {selectedItem.role}
              </p>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedItem.description || selectedItem.quote}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioProjects;
