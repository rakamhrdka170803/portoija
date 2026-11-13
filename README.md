# Web Profil & Portofolio Muhammad Faisal Maulani

Situs profil dan portofolio profesional interaktif berstandar tinggi dengan tema **Galaksi Mewah (Cosmic Dark Luxury)**. Didesain secara responsif untuk menonjolkan keahlian **Event Management, Production Logistics Specialist, dan Project In Charge (PIC)**.

---

## 🌌 Fitur Utama & Tema Desain
- **Palette Galaksi Mewah**: Gradien kosmik hitam pekat (`#04020b`), ungu nebula (`#8b5cf6`, `#a855f7`), biru elektrik (`#3b82f6`), dan starlight cyan (`#38bdf8`).
- **Interactive Starfield Canvas**: Latar belakang bintang berkilau dinamis, partikel debu nebula, dan komet/shooting stars.
- **Glassmorphism Mewah**: Kartu transparan dengan efek blur kaca kosmik, glow border, dan tipografi modern (Outfit, Plus Jakarta Sans, Space Grotesk).
- **Struktur Konten Lengkap**:
  - **Hero Section**: Foto resmi dengan cosmic halo border, indikator ketersediaan PIC, dan statistik karier.
  - **Tentang & Filosofi Acara**: Uraian profil lulusan S1 Ilmu Komunikasi UNISBA, dedikasi operasional lapangan, dan filosofi tata cahaya *Lighting Show*.
  - **Karya & Proyek Unggulan**: Filter interaktif untuk proyek skala nasional (MPL Season 14, Konser Dewa 19 / SMKN 2 Garut, Pocari Sweat, Tamansari Bukit Bandung, Ardan Senja Syahdu, Ganes Soundsystem).
  - **Pengalaman Kerja**: Riwayat PIC Vendor Event & Desainer Grafis Media.
  - **Kompetensi & Sertifikasi**: Manajemen operasional, tata artistik panggung, komunikasi interpersonal, sertifikasi resmi TV, dan kemahiran bahasa.
  - **Organisasi & Kepemimpinan**: Riwayat Ketua Pelaksana Fakansi Fikom UNISBA 2021, Koordinator Logistik Fikom Fair, dan BEM Fikom UNISBA.
  - **Hubungi Saya**: Tombol WhatsApp instan, salin alamat email, LinkedIn, Instagram, dan formulir pesan otomatis.
  - **Download CV & Portofolio**: Tombol unduh langsung dokumen PDF resmi lengkap dengan animasi selebrasi partikel.

---

## 🚀 Cara Menjalankan di Lokal (Localhost)

1. Pastikan dependensi sudah terpasang:
   ```bash
   npm install
   ```
2. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
3. Buka tautan lokal di browser (biasanya `http://localhost:5173`).

---

## ☁️ Panduan Deploy ke Vercel

Website ini sudah dioptimalkan dan siap di-deploy langsung ke Vercel tanpa konfigurasi rumit tambahan.

### Cara 1: Deploy Lewat GitHub (Sangat Direkomendasikan)
1. Buat repositori baru di GitHub (misal: `porto-faisal`).
2. Hubungkan folder ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portofolio Muhammad Faisal Maulani"
   git branch -M main
   git remote add origin https://github.com/USERNAME/porto-faisal.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com) dan login.
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repositori GitHub Anda.
6. Konfigurasi Vercel akan otomatis mendeteksi:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Klik **Deploy**! Website Anda akan aktif dalam hitungan detik dengan domain gratis `.vercel.app`.

### Cara 2: Deploy Cepat Lewat Vercel CLI
1. Jalankan di terminal:
   ```bash
   npx vercel
   ```
2. Ikuti instruksi login dan konfirmasi di layar terminal.
3. Untuk rilis produksi langsung:
   ```bash
   npx vercel --prod
   ```

---

## 📁 Struktur Dokumen & Aset
- `public/profile.jpeg`: Foto formal resmi Muhammad Faisal Maulani.
- `public/CV_Muhammad_Faisal_Maulani.pdf`: Berkas CV asli siap unduh.
- `public/Portfolio_Muhammad_Faisal_Maulani.pdf`: Berkas portofolio asli.
- `vercel.json`: Konfigurasi routing rewrite untuk Vercel.
