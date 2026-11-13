import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles, Building2, Layers } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project In Charge (PIC) & Pengelolaan Lapangan',
      company: 'Vendor Event (Freelance)',
      period: '2022 - Sekarang',
      location: 'Bandung & Skala Nasional',
      badge: 'Posisi Utama',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/60',
      description:
        'Memimpin operasional panggung, vendor logistik, dan area tenant di berbagai perhelatan akbar mulai dari konser band nasional papan atas hingga turnamen resmi berskala nasional.',
      responsibilities: [
        {
          heading: 'PIC & Manajemen Lapangan',
          detail:
            'Bertanggung jawab penuh atas pengukuran venue, pembuatan layout, penyusunan estimasi waktu pengerjaan, serta pengontrolan area booth dan operasional acara skala regional hingga nasional (MPL Season 14, Pocari Sweat, Ardan Senja Syahdu, Dewa All Stars).',
        },
        {
          heading: 'Manajemen Klien & Komunikasi Strategis',
          detail:
            'Menjadi jembatan komunikasi utama antara pihak Event Organizer (EO), vendor, dan jajaran manajemen artis/bintang tamu nasional (seperti pada acara SMKN 2 Garut bersama Dewa 19).',
        },
        {
          heading: 'Administrasi, Finansial & Keputusan Cepat',
          detail:
            'Mengelola pembuatan invoice, mengkoordinasikan kru/karyawan di lapangan, serta mengambil keputusan cepat dan taktis untuk kelancaran operasional acara di segala situasi.',
        },
      ],
    },
    {
      title: 'Magang – Desainer Grafis',
      company: 'PT Media Bewara West Java Today',
      period: '2024',
      location: 'Jawa Barat',
      badge: 'Creative & Media',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/60',
      description:
        'Mengembangkan aset visual dan identitas media berita daring, mengintegrasikan komunikasi visual yang komunikatif dan menarik bagi pembaca umum.',
      responsibilities: [
        {
          heading: 'Materi Desain Publikasi',
          detail:
            'Membuat berbagai materi desain grafis dinamis untuk kebutuhan publikasi media daring dan media sosial perusahaan.',
        },
        {
          heading: 'Pengembangan Branding Visual',
          detail:
            'Mendukung perancangan dan konsistensi branding visual perusahaan demi memperkuat kredibilitas media.',
        },
        {
          heading: 'Riset Media & Berita Terkini',
          detail:
            'Melakukan pemantauan dan riset berita harian untuk menghasilkan infografis serta visual pelengkap berita yang akurat.',
        },
      ],
    },
  ];

  return (
    <section id="pengalaman" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>KARIER PROFESIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Pengalaman <span className="text-gradient-galaxy">Kerja Nyata</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Rekam jejak profesional dalam mengelola kepemimpinan lapangan dan desain grafis media terkemuka.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-indigo-600 opacity-30" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#12082e]/90 via-[#0e0624]/90 to-[#070314]/90 border border-purple-500/20 hover:border-purple-400/50 shadow-xl backdrop-blur-xl transition-all duration-300 group"
            >
              {/* Header inside card */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-lg border ${exp.badgeColor}`}>
                      {exp.badge}
                    </span>
                    <span className="text-xs font-medium text-purple-300 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span className="font-semibold text-white">{exp.company}</span>
                    <span className="text-purple-500">•</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-900/30 border border-purple-500/30 text-purple-300">
                  <Briefcase className="w-7 h-7 text-cyan-300" />
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed my-5">
                {exp.description}
              </p>

              {/* Responsibilities list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-4 rounded-2xl bg-[#160a36]/60 border border-purple-500/15 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                        {resp.heading}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {resp.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
