export const profile = {
  name: "Dedi Murphy",
  location: "Kab. Bogor, Jawa Barat",
  email: "dedimurphy05@gmail.com",
  phone: "+6285694807231",
  whatsapp: "https://wa.me/6285694807231",
  github: "https://github.com/DediMurphy",
  linkedin: "#",
  gpa: "3.85 / 4.00",
};

export const cvImages = {
  1: "/images/cv-page-1.jpg",
  2: "/images/cv-page-2.jpg",
  3: "/images/cv-page-3.jpg",
};

export const experience = [
  {
    id: "JE-03",
    status: "AKTIF",
    role: "Programmer",
    org: "PT ERP Saas Indonesia",
    date: "Sep 2025 — Sekarang",
    bullets: [
      "Mengembangkan dan memelihara fitur inti untuk sistem CRM, Accounting, dan Sales menggunakan VB.NET dan ASP.NET Framework.",
      "Mengintegrasikan Midtrans Payment Gateway untuk pembayaran online yang aman, termasuk penanganan transaksi dan status pembayaran.",
      "Merancang dan mengoptimalkan arsitektur SQL Server — stored procedure, trigger, dan indexing tingkat lanjut untuk pengambilan data berkecepatan tinggi.",
      "Mengidentifikasi dan menyelesaikan isu teknis kompleks serta bug yang dilaporkan klien untuk menjaga stabilitas sistem.",
      "Menganalisis kebutuhan bisnis yang rumit menjadi solusi teknis yang scalable dan laporan otomatis untuk stakeholder.",
      "Berkolaborasi lintas tim dalam unit testing dan debugging menggunakan Visual Studio.",
    ],
    stack: ["VB.NET", "ASP.NET", "SQL Server", "Midtrans API"],
  },
  {
    id: "JE-02",
    status: "SELESAI",
    role: "Programmer — Internship",
    org: "PT Inti Anugerah Teknologi Indonesia",
    date: "Okt 2024 — Mei 2025",
    bullets: [
      "Mengembangkan dan memelihara fitur aplikasi ERP menggunakan C# dan ASP.NET Framework.",
      "Merancang dan mengoptimalkan MySQL dan SQL Server — stored procedure, trigger, dan indexing.",
      "Merancang laporan bisnis dinamis (invoice, laporan keuangan, data operasional) dengan Fast Report dan Crystal Reports.",
      "Menerjemahkan kebutuhan bisnis menjadi desain sistem berbasis MVC.",
      "Menggunakan Jenkins untuk otomasi proses build dan deployment.",
      "Melakukan Quality Control (QC) testing serta menyusun dokumentasi dan manual pengguna.",
    ],
    stack: ["C#", "ASP.NET MVC", "MySQL", "Jenkins", "Crystal Reports"],
  },
  {
    id: "JE-01",
    status: "SELESAI",
    role: "Mobile Development Learning Path",
    org: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
    date: "Agu 2023 — Jan 2024",
    bullets: [
      "Meraih Top 50 dari 639 tim pada Product-based Capstone Project nasional — SoulSupport, aplikasi kesehatan mental.",
      "Menyelesaikan learning path Android/Kotlin dari fundamental hingga clean architecture dan integrasi API.",
      "Berkolaborasi lintas fungsi dengan tim Machine Learning dan Cloud Computing dalam satu aplikasi mobile penuh.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
];

export const projects = [
  {
    id: "MOD-10",
    tag: "Full-Stack",
    title: "Sistem Manajemen Proyek & Tim",
    bullets: [
      "Aplikasi internal untuk manajemen proyek, task, absensi, work log, dan pengajuan cuti tim, lengkap dengan role & permission.",
      "Backend REST API dengan Express.js dan Prisma ORM ke MySQL, autentikasi JWT dan middleware otorisasi berbasis role.",
      "Frontend React 19 + Vite dengan Zustand untuk state management dan kalender jadwal interaktif (FullCalendar).",
    ],
    stack: ["React", "Vite", "Zustand", "Express.js", "Prisma", "MySQL", "JWT"],
  },
  {
    id: "MOD-09",
    tag: "Studi Kasus Teknis",
    title: "Order Service API",
    bullets: [
      "REST API pengelolaan produk, customer, dan pesanan sebagai studi kasus teknis, dengan arsitektur berlapis handler → service → repository → domain.",
      "Pengurangan stok atomik lewat UPDATE berkondisi di database dan transaksi dibungkus rollback otomatis saat error.",
      "State machine status pesanan dan price snapshot (price_at_order) agar riwayat pesanan tidak berubah saat harga produk diperbarui.",
    ],
    stack: ["Go", "Gin", "SQLite", "database/sql"],
  },
  {
    id: "MOD-08",
    tag: "Full-Stack",
    title: "Simple Messaging App",
    bullets: [
      "Aplikasi chat real-time dengan autentikasi JWT (access & refresh token) dan WebSocket untuk pengiriman pesan instan.",
      "Backend Go + Fiber dengan GORM ke MySQL, password di-hash dengan bcrypt.",
      "Riwayat pesan tersimpan ke database dan notifikasi browser untuk pesan masuk.",
    ],
    stack: ["Go", "Fiber", "GORM", "MySQL", "WebSocket", "JWT"],
  },
  {
    id: "MOD-07",
    tag: "REST API",
    title: "Blog API",
    bullets: [
      "RESTful API CRUD artikel blog (create, read, update, delete) dengan arsitektur modular — handler, service, dan repository terpisah.",
      "Dibangun dengan Go dan Gin, penyimpanan data di MySQL, migrasi database lewat script SQL.",
    ],
    stack: ["Go", "Gin", "MySQL", "REST API"],
  },
  {
    id: "MOD-06",
    tag: "Mobile — Flutter",
    title: "Tourism Explorer App",
    bullets: [
      "Aplikasi eksplorasi destinasi wisata: daftar lokasi, halaman detail, dan fitur bookmark.",
      "State management dengan Provider, konsumsi REST API eksternal via package http.",
    ],
    stack: ["Flutter", "Dart", "Provider", "REST API"],
  },
  {
    id: "MOD-05",
    tag: "Mobile — Flutter",
    title: "Movie Catalog App",
    bullets: [
      "Aplikasi katalog film dengan daftar film populer dan halaman detail lengkap.",
      "UI responsif dengan custom typography (Montserrat) untuk berbagai ukuran layar.",
    ],
    stack: ["Flutter", "Dart"],
  },
  {
    id: "MOD-04",
    tag: "Eksperimen Pribadi",
    title: "Smart Data Analytics & Auto-Report Generator",
    bullets: [
      "Aplikasi analitik bertenaga AI yang mengubah pertanyaan bahasa natural menjadi query SQL menggunakan LLM lokal (Ollama).",
      "Full-stack: frontend Next.js + backend ASP.NET Core (.NET 8) Web API terintegrasi PostgreSQL.",
      "Validasi keamanan hanya mengizinkan query SELECT — mencegah eksekusi SQL destruktif.",
    ],
    stack: ["Next.js", "ASP.NET Core 8", "PostgreSQL", "Ollama", "TypeScript"],
  },
  {
    id: "MOD-03",
    tag: "Produksi",
    title: "ERP System — CRM, Sales & Accounting",
    bullets: [
      "Mengembangkan dan memelihara modul ERP untuk CRM, Sales, dan Accounting.",
      "Mengoptimalkan stored procedure, trigger, dan indexing SQL Server.",
      "Membangun laporan bisnis dan menyelesaikan isu produksi bersama tim.",
    ],
    stack: ["VB.NET", "C#", "ASP.NET", "SQL Server"],
  },
  {
    id: "MOD-02",
    tag: "Tugas Akhir",
    title: "Pet Hotel Management System",
    bullets: [
      "Aplikasi web untuk manajemen penitipan hewan sebagai proyek akhir kuliah.",
      "Modul registrasi pelanggan, booking, dan pelaporan.",
      "Integrasi Midtrans Payment Gateway untuk transaksi online yang aman.",
    ],
    stack: ["PHP", "CodeIgniter 3", "MySQL", "Midtrans"],
  },
  {
    id: "MOD-01",
    tag: "Capstone Bangkit",
    title: "Soul Support",
    bullets: [
      "Aplikasi Android untuk dukungan kesehatan mental, dikembangkan saat Bangkit Academy.",
      "Mengintegrasikan API Machine Learning ke dalam aplikasi mobile.",
      "Meraih Top 50 Capstone Project Nasional dari 639 tim.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Firebase"],
  },
];

export const skillGroups = [
  { title: "Bahasa", items: ["C#", "Kotlin", "PHP", "JavaScript", "SQL", "Python", "HTML/CSS"] },
  { title: "Framework", items: [".NET / ASP.NET", "React", "Vue.js", "Node.js", "Express.js", "Tailwind"] },
  { title: "Database", items: ["SQL Server", "MySQL", "PostgreSQL"] },
  {
    title: "Tooling",
    items: ["Git", "Visual Studio", "Jenkins", "Docker", "REST API", "Crystal Reports", "Fast Report"],
  },
];

export const education = {
  degree: "S1 Teknologi Informasi",
  school: "Universitas Bina Sarana Informatika",
  gpa: "GPA 3.85 / 4.00",
  notes: [
    "Tugas Akhir: Website Penitipan Hewan (CodeIgniter 3)",
    "Kursus Laravel Programmer Jaman Now Premium — Progress",
  ],
};

export const certifications = [
  { name: "BNSP — Software Development, Program Analyst", date: "Agu 2024–2026" },
  { name: "Fundamental JavaScript Course, Dea Course", date: "Jun 2022" },
  { name: "Cisco — PCAP: Programming Essentials in Python", date: "Nov–Des 2022" },
];
