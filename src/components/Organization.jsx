import React from 'react';
import { Users, Crown, Shield, Award } from 'lucide-react';

const Organization = () => {
  return (
    <section id="organisasi" className="relative py-16 lg:py-24 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header tanpa tulisan bagian */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>KEPEMIMPINAN & ORGANISASI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            Organisasi & <span className="text-gradient-galaxy">Volunteering</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Riwayat kepemimpinan, kepanitiaan, dan kontribusi organisasi kemahasiswaan di Universitas Islam Bandung.
          </p>
        </div>

        {/* 3 Main Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Fakansi Fikom */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#160a36] to-[#0c0520] border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-purple-900/40 border border-purple-500/30 text-yellow-300">
                  <Crown className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-yellow-300 px-2.5 py-0.5 rounded bg-yellow-950/40 border border-yellow-500/30">
                  2021
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-1">
                Festival Budaya Ilmu Komunikasi (Fakansi Fikom UNISBA)
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-3">
                Ketua Pelaksana
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Memimpin keseluruhan kepanitiaan dalam perencanaan dan eksekusi rangkaian acara budaya.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-purple-900/40 text-[11px] text-purple-300">
              Menjadi Ketua Pelaksana tahun 2021
            </div>
          </div>

          {/* Card 2: Fikom Islamic Fair & Festival */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#160a36] to-[#0c0520] border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-purple-900/40 border border-purple-500/30 text-cyan-300">
                  <Shield className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                  2023 & 2025
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-1">
                Fikom Islamic Fair & Fikom Festival
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-3">
                Koordinator Logistik & Runner
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mengelola logistik perlengkapan acara dan memastikan mobilitas di lapangan berjalan tepat waktu.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-purple-900/40 text-[11px] text-purple-300">
              Staf ahli logistik (2023) & Koordinator (2023, 2025)
            </div>
          </div>

          {/* Card 3: BEM Fikom UNISBA */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#160a36] to-[#0c0520] border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="p-2 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-xs font-bold text-purple-300 px-2.5 py-0.5 rounded bg-purple-950/40 border border-purple-500/30">
                  2022 - 2025
                </span>
              </div>
              <h3 className="text-lg font-heading font-bold text-white mb-1">
                BEM Fikom UNISBA (Departemen Agama)
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-3">
                Staf Ahli & Staf Departemen
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mengorganisasi kegiatan keagamaan, mendukung birokrasi departemen, dan menyusun arahan humas untuk sponsorship.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-purple-900/40 text-[11px] text-purple-300">
              Staf (2022–2023) & Staf Ahli (2024–2025)
            </div>
          </div>

        </div>

        {/* Detailed Real List from CV */}
        <div className="p-7 rounded-3xl bg-[#0c061e]/90 border border-purple-500/20 backdrop-blur-md">
          <h3 className="text-base font-heading font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Daftar Lengkap Riwayat & Tanggung Jawab Organisasi
          </h3>

          <div className="space-y-4">
            
            {/* Periode 2024 - 2025 */}
            <div className="p-4 rounded-xl bg-[#140a33]/60 border border-purple-500/15">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-cyan-300">
                  Staf Ahli Departemen Agama (2024–2025)
                </span>
                <span className="text-xs text-purple-300">BEM Fikom UNISBA</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc pl-5">
                <li>Menjadi koordinator logistik dan runner di acara Fikom Islamic Fair (2025)</li>
                <li>Membuat skema/ arahan humas kepada sponsorship dan media partner</li>
                <li>
                  <strong className="text-white">Kontribusi:</strong> Mengorganisasi kegiatan keagamaan, mendukung program kerja departemen, serta memberi arahan strategis dalam perencanaan acara BEM, Membantu jajaran staf dan juga kepala departemen agar jalur birokrasi berjalan.
                </li>
              </ul>
            </div>

            {/* Periode 2022 - 2023 */}
            <div className="p-4 rounded-xl bg-[#140a33]/60 border border-purple-500/15">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-purple-300">
                  Staf Departemen Agama (2022–2023)
                </span>
                <span className="text-xs text-purple-300">BEM Fikom UNISBA</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 list-disc pl-5">
                <li>Menjadi Koordinator logistik dan runner di acara Fikom Islamic Fair (2023)</li>
                <li>Menjadi Staf ahli logistik di acara Fikom Festival (2023)</li>
                <li>Menjadi staf acara di Lomba Karya Tulis Ilmiah Fikom UNISBA (2023)</li>
              </ul>
            </div>

            {/* Periode 2021 */}
            <div className="p-4 rounded-xl bg-[#140a33]/60 border border-purple-500/15">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-yellow-300">
                  Ketua Pelaksana Festival Budaya Ilmu Komunikasi (Fakansi Fikom UNISBA)
                </span>
                <span className="text-xs text-yellow-400">Tahun 2021</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 pl-5 list-disc">
                Memimpin keseluruhan kepanitiaan dalam perencanaan dan eksekusi rangkaian acara budaya Fakansi Fikom UNISBA.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Organization;
