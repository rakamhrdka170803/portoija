import React from 'react';
import { Sparkles, Sliders, Palette, Users2, Award, Globe2, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Manajemen Acara & Operasional',
      subtitle: 'Field Logistics & Coordination',
      icon: <Sliders className="w-5 h-5 text-cyan-400" />,
      glowColor: 'group-hover:border-cyan-500/50',
      skills: [
        'Event Management (Regional & Nasional)',
        'Project In Charge (PIC) Lapangan',
        'Koordinasi & Distribusi Logistik',
        'Pengelolaan & Negosiasi Vendor',
        'Pembuatan Layout & Pengukuran Venue',
        'Manajemen Waktu & Timeline Eksekusi',
        'Pengontrolan Area Booth & Tenant F&B',
        'Administrasi Keuangan & Pembuatan Invoice',
      ],
    },
    {
      title: 'Media, Visual & Kreatif',
      subtitle: 'Production & Artistic Atmosphere',
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      glowColor: 'group-hover:border-purple-500/50',
      skills: [
        'Lighting Show & Tata Cahaya Panggung',
        'Desain Grafis Publikasi Media',
        'Produksi & Perancangan Program TV',
        'Dokumentasi & Audio Visual Recording',
        'Penyuntingan Konten Visual Media Sosial',
        'Visual Atmosphere & Mood Setting',
        'Pengoperasian Stage Lighting Desk',
      ],
    },
    {
      title: 'Interpersonal & Kepemimpinan',
      subtitle: 'Human Coordination & Communication',
      icon: <Users2 className="w-5 h-5 text-pink-400" />,
      glowColor: 'group-hover:border-pink-500/50',
      skills: [
        'Public Speaking & Briefing Lapangan',
        'Talent Liaison (Manajemen Hubungan Artis)',
        'Komunikasi Lintas Divisi & Koordinasi Kru',
        'Negosiasi Strategis dengan Pihak Ketiga',
        'Pengambilan Keputusan Cepat di Situasi Kritis',
        'Kerja Tim Solid & Kemandirian Tinggi',
      ],
    },
  ];

  return (
    <section id="keahlian" className="relative py-20 lg:py-28 overflow-hidden bg-[#070314]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KOMPETENSI & KEAHLIAN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Keahlian Utama & <span className="text-gradient-galaxy">Kecakapan Teknis</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Sinergi komprehensif antara strategi manajerial, kecakapan artistik visual, serta komunikasi interpersonal berstandar industri.
          </p>
        </div>

        {/* 3 Main Skill Pods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`group p-7 rounded-3xl bg-gradient-to-b from-[#13082e]/90 to-[#0b051c]/90 border border-purple-500/20 ${cat.glowColor} transition-all duration-300 shadow-xl flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-2.5 mt-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 p-2 rounded-xl bg-[#160b36]/40 hover:bg-[#1a0d42]/70 border border-purple-500/10 hover:border-purple-500/30 transition-all text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-900/30 flex items-center justify-between text-xs text-purple-300">
                <span>Verified Practical Competency</span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Bar: Certification & Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Certification Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/60 to-[#12082b] border border-purple-500/30 flex items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-400/40 flex items-center justify-center shrink-0 text-yellow-300">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-300 block mb-1">
                Sertifikasi & Pelatihan Resmi
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Pengelolaan Komunikasi Program Televisi
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Standar kompetensi penyiaran, manajemen produksi media, dan alur komunikasi broadcast.
              </p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#12082b] to-indigo-950/60 border border-indigo-500/30 flex items-center gap-5 backdrop-blur-md shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 border border-cyan-400/40 flex items-center justify-center shrink-0 text-cyan-300">
              <Globe2 className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                Kemahiran Bahasa (Languages)
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm font-semibold text-white">Bahasa Indonesia:</span>
                  <span className="text-xs text-slate-300 font-medium">Fasih (Native)</span>
                </div>
                <span className="text-purple-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm font-semibold text-white">Bahasa Inggris:</span>
                  <span className="text-xs text-slate-300 font-medium">Menengah / Advanced</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
