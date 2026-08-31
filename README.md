# Dedi Murphy — Portfolio

Portfolio pribadi dibangun dengan **Next.js 14 (App Router)**, **React**, dan **Tailwind CSS**.
Kontennya diambil langsung dari CV, dengan tema visual "buku besar akuntansi / ERP" yang
disesuaikan dengan pekerjaan sehari-hari sebagai programmer ERP/CRM/Accounting.

## Struktur Proyek

```
portfolio-next/
├─ app/
│  ├─ layout.jsx        # Root layout, font (Fraunces/Inter/JetBrains Mono), metadata SEO
│  ├─ page.jsx           # Merakit semua section jadi satu halaman
│  └─ globals.css        # Tailwind + sedikit CSS custom (grid background, selection color)
├─ components/
│  ├─ Header.jsx         # Nav sticky
│  ├─ Hero.jsx            # Hero + kartu CV yang bisa diklik (tilt effect)
│  ├─ CvLightbox.jsx      # Modal untuk lihat 3 halaman CV
│  ├─ Experience.jsx      # Daftar pengalaman kerja (ledger, bisa expand/collapse)
│  ├─ Projects.jsx        # Grid proyek
│  ├─ Skills.jsx          # Skill dikelompokkan per kategori
│  ├─ Education.jsx       # Edukasi & sertifikasi
│  ├─ Contact.jsx         # CTA kontak
│  ├─ Footer.jsx
│  └─ RevealOnScroll.jsx  # Wrapper animasi fade-in saat discroll
├─ data/
│  └─ content.js          # Semua data (pengalaman, proyek, skill, dst) — edit di sini
└─ public/images/          # Gambar 3 halaman CV (JPG)
```

## Menjalankan di Lokal

Butuh Node.js 18.18+ (disarankan versi LTS terbaru).

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build untuk Produksi

```bash
npm run build
npm run start
```

## Cara Mengedit Konten

Hampir semua teks (pengalaman, proyek, skill, sertifikasi, kontak) ada di satu file:
`data/content.js`. Tinggal ubah/tambah item di array-nya, tidak perlu sentuh komponen.

Untuk mengganti gambar CV, timpa file di `public/images/cv-page-1.jpg`, `cv-page-2.jpg`,
`cv-page-3.jpg` dengan nama file yang sama (atau ubah path di `data/content.js` → `cvImages`).

Link LinkedIn di `data/content.js` (`profile.linkedin`) masih placeholder (`#`) — ganti dengan
URL profil LinkedIn kamu.

## Deploy

Cara termudah adalah lewat [Vercel](https://vercel.com) (pembuat Next.js):

1. Push project ini ke repository GitHub.
2. Import repo di Vercel → Vercel otomatis mendeteksi Next.js dan men-deploy-nya.
3. Setiap push ke branch utama akan otomatis re-deploy.

Alternatif lain: Netlify, atau hosting apa pun yang mendukung Node.js.
