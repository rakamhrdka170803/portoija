import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="pengalaman" className="relative py-16 lg:py-24 overflow-visible bg-[#060312]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-semibold text-purple-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>BAGIAN 2</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Pengalaman Kerja
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Rekam jejak pengalaman kerja nyata dari CV dan Portofolio.
          </p>
        </div>

        {/* Stack Pengalaman Kerja Utama */}
        <div className="space-y-8">
          
          {/* Card 1: Vendor Event (Freelance) | 2022 - Sekarang */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#140a36]/90 via-[#0e0624]/90 to-[#070314]/90 border border-purple-500/30 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-purple-900/40">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Freelance
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white mt-2">
                  Vendor Event (Freelance)
                </h3>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-300 flex items-center gap-1.5 self-start sm:self-auto">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>2022 - Sekarang</span>
              </div>
            </div>

            {/* 3 Tanggung Jawab Nyata */}
            <div className="space-y-4 mt-6">
              
              <div className="p-4 rounded-2xl bg-[#190c42]/60 border border-purple-500/20">
                <h4 className="text-sm font-bold text-cyan-300 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  Project In Charge (PIC) & Pengelolaan Lapangan
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-6">
                  Bertanggung jawab penuh atas pengukuran venue, pembuatan layout, penyusunan estimasi waktu pengerjaan, serta pengontrolan area booth dan operasional acara skala regional hingga nasional (seperti MPL Season 14, Pocari, Ardan Senja Syahdu, dan Dewa All Stars).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#190c42]/60 border border-purple-500/20">
                <h4 className="text-sm font-bold text-purple-300 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  Manajemen Klien & Komunikasi Strategis
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-6">
                  Menjadi jembatan komunikasi utama antara pihak Event Organizer (EO), vendor, dan manajemen artis/bintang tamu (seperti pada acara SMKN 2 Garut bersama Dewa 19).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#190c42]/60 border border-purple-500/20">
                <h4 className="text-sm font-bold text-pink-300 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  Administrasi & Keuangan
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-6">
                  Mengelola pembuatan invoice, mengkoordinasikan kru/karyawan di lapangan, serta mengambil keputusan cepat untuk kelancaran operasional acara.
                </p>
              </div>

            </div>
          </div>

          {/* Card 2: PT Media Bewara West Java Today / 2024 */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#140a36]/90 via-[#0e0624]/90 to-[#070314]/90 border border-purple-500/30 shadow-xl backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-purple-900/40">
              <div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-purple-950 text-purple-300 border border-purple-500/30">
                  Magang
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-white mt-2">
                  PT Media Bewara West Java Today
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-cyan-300 mt-0.5">
                  Magang – Desainer Grafis
                </p>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-purple-300 flex items-center gap-1.5 self-start sm:self-auto">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>2024</span>
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#190c42]/40 border border-purple-500/15 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Membuat materi desain grafis untuk berbagai kebutuhan publikasi media.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#190c42]/40 border border-purple-500/15 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Mendukung pengembangan branding visual perusahaan.</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#190c42]/40 border border-purple-500/15 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>Melakukan pemantauan dan riset berita harian.</span>
              </div>
            </div>
          </div>

          {/* Card 3: Pengalaman Kerja Tambahan dari Dokumen Portofolio */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0c061e]/90 border border-purple-500/20 backdrop-blur-md">
            <h4 className="text-base font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Pengalaman Operasional & Lapangan (Dokumen Portofolio)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#140a33]/80 border border-purple-500/15 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-cyan-300 block mb-1">Dokumentasi & Media</span>
                  <h5 className="font-bold text-white text-sm mb-2">
                    Ganes Soundsystem (HUT Polri & Inaugurasi UNJANI)
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mendokumentasikan perangkat dan menyunting konten visual untuk media sosial.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#140a33]/80 border border-purple-500/15 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amber-300 block mb-1">2023 • PIC Area Booth</span>
                  <h5 className="font-bold text-white text-sm mb-2">
                    Dewa All Stars & Sehari Bersama Djarum Coklat
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    PIC Area Booth Tenant FNB: Mengontrol area, estimasi bongkar-pasang tenda, dan manajemen invoice.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#140a33]/80 border border-purple-500/15 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-purple-300 block mb-1">2025 • Vendor Instalasi</span>
                  <h5 className="font-bold text-white text-sm mb-2">
                    Ardan Senja Syahdu Vol. 6 & Coklat Kita Silaturahmi
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Vendor Instalasi & Pengambilan Keputusan Operasional — Berkoordinasi dengan EO dan memastikan kesiapan area venue.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
