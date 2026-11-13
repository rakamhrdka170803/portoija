import React from 'react';
import { Award, CheckCircle2, Globe2, Sliders, Palette, Users2 } from 'lucide-react';

const Skills = () => {
  return (
    <section id="keahlian" className="relative py-16 lg:py-24 overflow-visible bg-[#060312]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Keahlian & Sertifikasi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Daftar kompetensi resmi dan pelatihan dari CV Muhammad Faisal Maulani.
          </p>
        </div>

        {/* 3 Kategori Keahlian Real dari CV */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* 1. Manajemen Acara & Operasional */}
          <div className="p-6 rounded-2xl bg-[#0f0727]/90 border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-3">
                Manajemen Acara & Operasional
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Event Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Koordinasi Logistik</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Pengelolaan Vendor</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Manajemen Waktu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Pembuatan Layout & Invoice</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Media & Kreatif */}
          <div className="p-6 rounded-2xl bg-[#0f0727]/90 border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-3">
                Media & Kreatif
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Desain Grafis Dasar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Produksi & Perancangan Program TV</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Dokumentasi & Penyuntingan Konten</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Interpersonal */}
          <div className="p-6 rounded-2xl bg-[#0f0727]/90 border border-purple-500/25 shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-bold text-white mb-3">
                Interpersonal
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Public Speaking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Kerja Tim & Individu</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Negosiasi</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Koordinasi Lintas Divisi</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Sertifikasi & Pelatihan + Bahasa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Sertifikasi */}
          <div className="p-5 rounded-2xl bg-[#140a33]/80 border border-purple-500/20 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-300 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                Sertifikasi & Pelatihan
              </span>
              <h4 className="text-base font-bold text-white">
                Pengelolaan Komunikasi Program Televisi
              </h4>
            </div>
          </div>

          {/* Bahasa */}
          <div className="p-5 rounded-2xl bg-[#140a33]/80 border border-purple-500/20 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
              <Globe2 className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider block">
                Kemahiran Bahasa
              </span>
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm mt-0.5">
                <span className="text-white">
                  <strong>Bahasa Indonesia:</strong> Fasih
                </span>
                <span className="text-purple-600">•</span>
                <span className="text-white">
                  <strong>Bahasa Inggris:</strong> Menengah/Advanced
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
