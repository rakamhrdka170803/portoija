import React from 'react';
import { Users, Crown, Shield, Award, Calendar, Sparkles } from 'lucide-react';

const Organization = () => {
  const leadershipActivities = [
    {
      title: 'Ketua Pelaksana',
      event: 'Festival Budaya Ilmu Komunikasi (Fakansi Fikom UNISBA)',
      year: '2021',
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      badge: 'Kepemimpinan Utama',
      badgeColor: 'border-yellow-500/40 text-yellow-300 bg-yellow-950/50',
      description:
        'Memimpin keseluruhan struktur kepanitiaan dalam tahap perencanaan konseptual, budgeting, perizinan birokrasi kampus, hingga eksekusi panggung festival budaya akbar.',
      roleDetails: [
        'Memimpin puluhan staf lintas divisi kepanitiaan',
        'Mengawasi alur penganggaran dan sponsor',
        'Eksekusi rundown hari H dengan zero-incident',
      ],
    },
    {
      title: 'Koordinator Logistik & Runner',
      event: 'Fikom Islamic Fair & Fikom Festival',
      year: '2023 & 2025',
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      badge: 'Logistik & Operasional',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/50',
      description:
        'Mengelola suplai dan distribusi perlengkapan teknis acara, merancang mobilitas runner lapangan agar seluruh kebutuhan panggung terpenuhi dalam hitungan menit.',
      roleDetails: [
        'Pengelolaan ratusan item perlengkapan panggung & tenda',
        'Distribusi cepat logistik operasional hari H',
        'Staf Ahli Logistik Fikom Festival 2023',
      ],
    },
    {
      title: 'Staf Ahli & Staf Departemen Agama',
      event: 'BEM Fikom UNISBA',
      year: '2022 - 2023 & 2024 - 2025',
      icon: <Award className="w-6 h-6 text-purple-400" />,
      badge: 'Eksekutif Mahasiswa',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/50',
      description:
        'Memberikan arahan strategis dalam perencanaan acara BEM, membantu jajaran staf dan kepala departemen agar jalur birokrasi lancar, serta membuat skema arahan humas sponsor & media partner.',
      roleDetails: [
        'Penyusunan proposal sponsorship & media partner',
        'Pengelolaan birokrasi departemen kemahasiswaan',
        'Koordinasi kegiatan sosial & keagamaan fakultas',
      ],
    },
    {
      title: 'Staf Acara',
      event: 'Lomba Karya Tulis Ilmiah Fikom UNISBA',
      year: '2023',
      icon: <Users className="w-6 h-6 text-pink-400" />,
      badge: 'Academic Event',
      badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-950/50',
      description:
        'Mengawal alur teknis sesi presentasi karya tulis ilmiah, koordinasi kebutuhan dewan juri, dan penataan rundown sesi penjurian agar berjalan tepat waktu.',
      roleDetails: [
        'Manajemen rundown teknis penjurian',
        'Liaison akademis juri dan peserta lomba',
      ],
    },
  ];

  return (
    <section id="organisasi" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORGANISASI & KEPEMIMPINAN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Jiwa Kepemimpinan & <span className="text-gradient-galaxy">Kolektivitas Tim</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Pengalaman memimpin dan menggerakkan tim kepanitiaan besar di lingkungan akademis dan organisasi kemahasiswaan bergengsi.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipActivities.map((act, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#12072e]/90 via-[#0d0621]/90 to-[#070314]/90 border border-purple-500/20 hover:border-purple-400/50 shadow-xl backdrop-blur-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {act.icon}
                    </div>
                    <div>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${act.badgeColor}`}>
                        {act.badge}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors mt-1">
                        {act.title}
                      </h3>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    {act.year}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-cyan-300 mb-3">
                  {act.event}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {act.description}
                </p>
              </div>

              <div className="pt-4 border-t border-purple-900/30 space-y-1.5">
                {act.roleDetails.map((detail, dIdx) => (
                  <p key={dIdx} className="text-xs text-slate-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{detail}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Organization;
