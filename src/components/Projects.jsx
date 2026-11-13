import React, { useState } from 'react';
import { Sparkles, ExternalLink, Calendar, MapPin, Tag, CheckCircle2, SlidersHorizontal, Flame, Radio, Zap } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Konser & Musik', 'Brand Activation & Tenant', 'Teknis & Lighting'];

  const projects = [
    {
      id: 'mpl-s14',
      title: 'MPL Season 14 (Mobile Legends Professional League)',
      category: 'Brand Activation & Tenant',
      role: 'Project In Charge (PIC) & Area Control',
      period: '2024',
      scale: 'Skala Nasional',
      description:
        'Bertanggung jawab penuh atas pengukuran venue secara presisi, perancangan denah layout booth pameran, penyusunan estimasi waktu kerja pengerjaan, serta pengontrolan operasional ribuan penonton di panggung e-sports terbesar di Asia Tenggara.',
      highlights: [
        'Pengukuran akurat layout booth partner & stage',
        'Pengendalian mobilitas kru dan vendor instalasi',
        'Penyusunan timeline pengerjaan tanpa keterlambatan',
      ],
      tags: ['MPL S14', 'E-Sports Nasional', 'Venue Measurement', 'Booth Layout', 'Vendor PIC'],
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/50',
    },
    {
      id: 'dewa-19',
      title: 'Konser Dewa 19 (SMKN 2 Garut) & Dewa All Stars',
      category: 'Konser & Musik',
      role: 'Talent Liaison & PIC Area Booth Tenant FNB',
      period: '2023',
      scale: 'Skala Nasional (Konser Musik Akbar)',
      description:
        'Menjadi jembatan komunikasi utama (liaison) antara pihak Event Organizer (EO), vendor teknis, dan manajemen grup band legendaris Dewa 19. Mengontrol area booth FNB, estimasi bongkar pasang tenda, serta penyusunan administrasi invoice.',
      highlights: [
        'Komunikasi strategis dengan manajemen artis Dewa 19',
        'Pengontrolan steril area FNB ribuan penonton',
        'Manajemen administrasi invoice dan pembongkaran tertib',
      ],
      tags: ['Dewa 19', 'Dewa All Stars', 'Talent Liaison', 'F&B Tenant', 'Stage Ops'],
      gradient: 'from-amber-600 via-purple-700 to-violet-800',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/50',
    },
    {
      id: 'pocari-sweat',
      title: 'Pocari Sweat Activation & Tenant Zone',
      category: 'Brand Activation & Tenant',
      role: 'Vendor Tenda Tenant & Instalasi Lapangan',
      period: '2024 & 2025',
      scale: 'Brand Activation',
      description:
        'Melakukan pengukuran topografi lapangan, merancang layout penempatan tenda tenant sponsor dan fasilitas peserta, menyusun invoice administrasi, serta berkoordinasi intensif dengan tim EO demi kelancaran instalasi.',
      highlights: [
        'Survey dan pengukuran lapangan terbuka',
        'Rancang layout presisi stan Garmin & tenant partner',
        'Penyusunan invoice dan koordinasi intensif EO',
      ],
      tags: ['Pocari Sweat', 'Tenant Installation', 'Layout Engineering', 'Vendor Lead'],
      gradient: 'from-cyan-600 via-blue-700 to-indigo-900',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/50',
    },
    {
      id: 'tamansari-bukit',
      title: 'Malam Puncak Tamansari Bukit Bandung',
      category: 'Teknis & Lighting',
      role: 'Vendor & PIC Sound, Lighting & Layout',
      period: '2023 - 2024',
      scale: 'Festival Budaya & Perayaan',
      description:
        'Mengatur tata letak venue panggung utama, mengawasi show tata cahaya (lighting show) megah berdurasi penuh, serta berkoordinasi langsung dengan jajaran panitia lokal hingga malam puncak berakhir dengan sukses.',
      highlights: [
        'Pengawasan tata cahaya (Lighting Show Direction)',
        'Sinkronisasi sound system & panggung utama',
        'Koordinasi intensif aparat & panitia lokal',
      ],
      tags: ['Lighting Show', 'Sound Production', 'Stage Management', 'Night Festival'],
      gradient: 'from-purple-600 via-pink-600 to-indigo-700',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/50',
    },
    {
      id: 'ardan-senja',
      title: 'Ardan Senja Syahdu Vol. 6 & Coklat Kita Silaturahmi',
      category: 'Konser & Musik',
      role: 'Vendor Instalasi & Pengambilan Keputusan Operasional',
      period: '2025',
      scale: 'Konser Musik & Komunitas',
      description:
        'Memastikan kesiapan total area panggung dan venue, berkoordinasi langsung dengan EO untuk mitigasi risiko cuaca, serta mengambil keputusan operasional taktis di lapangan demi keselamatan dan kepuasan pengunjung.',
      highlights: [
        'Kesiapan rigging panggung dan instalasi listrik',
        'Keputusan cepat terhadap dinamika lapangan',
        'Kolaborasi intensif bersama EO Radio Ardan & Coklat Kita',
      ],
      tags: ['Ardan Senja Syahdu', 'Coklat Kita', 'Rapid Decision', 'Venue Readiness'],
      gradient: 'from-violet-600 via-indigo-600 to-cyan-700',
      badgeColor: 'border-violet-500/40 text-violet-300 bg-violet-950/50',
    },
    {
      id: 'ganes-sound',
      title: 'Ganes Soundsystem (HUT Polri & Inaugurasi UNJANI)',
      category: 'Teknis & Lighting',
      role: 'Dokumentasi Teknis & Media Visual',
      period: '2023 - 2024',
      scale: 'Institusi & Akademik',
      description:
        'Mendokumentasikan konfigurasi perangkat audio berkekuatan tinggi serta memproduksi materi penyuntingan visual untuk media sosial dan arsip portofolio teknis.',
      highlights: [
        'Dokumentasi teknis perangkat sound system berstandar konser',
        'Penyuntingan video dan visual promosi media',
        'Kemitraan institusi kepolisian & universitas',
      ],
      tags: ['Ganes Sound', 'HUT Polri', 'UNJANI', 'Technical Media', 'Audio Setup'],
      gradient: 'from-indigo-600 via-purple-700 to-blue-800',
      badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-950/50',
    },
  ];

  const filteredProjects =
    activeFilter === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="karya" className="relative py-20 lg:py-28 overflow-hidden bg-[#060312]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>REKAM JEJAK KARYA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Proyek & Konser Pilihan <span className="text-gradient-galaxy">Skala Nasional</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Portofolio pengerjaan langsung di lapangan: mulai dari turnamen e-sports akbar, konser band papan atas, hingga festival brand prestisius.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0e0724]/90 p-1.5 rounded-2xl border border-purple-500/20 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-900/50'
                    : 'text-slate-400 hover:text-white hover:bg-purple-900/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-[#0d0622]/90 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Period */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border ${project.badgeColor}`}
                    >
                      {project.scale}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      {project.period}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-black text-white group-hover:text-purple-300 transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <div className="inline-block text-xs font-semibold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40 mb-4">
                    {project.role}
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-purple-900/30">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags Footer */}
                <div className="pt-4 border-t border-purple-900/30 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#160b38] text-purple-200/90 border border-purple-500/15"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-3xl pointer-events-none transition-colors" />
            </div>
          ))}
        </div>

        {/* Bottom Banner: Ready for More */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-[#110729] to-indigo-950/50 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="text-left">
            <h4 className="text-xl font-heading font-bold text-white">
              Punya Rencana Konser, Pameran, atau Festival?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Saya siap memegang kendali operasional dan memastikan seluruh elemen teknis berjalan lancar tanpa celah.
            </p>
          </div>
          <a
            href="https://wa.me/6285954834026?text=Halo%20Faisal,%20kami%20ada%20proyek%20event%20dan%20ingin%20berkolaborasi."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-purple-900/50 transition-all hover:scale-105"
          >
            Konsultasikan Kebutuhan Event
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
