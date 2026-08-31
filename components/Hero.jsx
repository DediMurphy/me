"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { profile, cvImages } from "@/data/content";
import CvLightbox from "./CvLightbox";

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [tilt, setTilt] = useState({ rotate: 2.2, ty: 0 });
  const stageRef = useRef(null);

  function handleMouseMove(e) {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const stage = stageRef.current;
    if (!stage) return;
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rotate: 2.2 - x * 3, ty: y * -4 });
  }

  function handleMouseLeave() {
    setTilt({ rotate: 2.2, ty: 0 });
  }

  return (
    <section id="top" className="relative z-10 px-6 pb-16 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        {/* Copy */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent-green">
            <span className="h-1.5 w-1.5 animate-softpulse rounded-full bg-accent-green" />
            Terbuka untuk peluang baru
          </div>

          <h1 className="mb-4 font-serif text-[38px] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[58px]">
            Membangun sistem{" "}
            <em className="font-medium italic text-brass-bright">ERP &amp; CRM</em> yang
            benar-benar dipakai perusahaan.
          </h1>

          <p className="mb-7 max-w-[52ch] text-[16.5px] leading-relaxed text-text-dim">
            Programmer dengan pengalaman langsung mengembangkan modul CRM, Sales, dan Accounting di
            lingkungan produksi — dari stored procedure SQL Server sampai integrasi payment gateway.
            Sedang menuju peran Full Stack Developer / .NET Backend Developer.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brass px-5 py-3 text-sm font-semibold text-[#1a1206] shadow-[0_1px_0_rgba(255,255,255,0.15)_inset] transition-all hover:-translate-y-0.5 hover:bg-brass-bright"
            >
              Hubungi Saya →
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-text-dim"
            >
              Lihat Pengalaman
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-text-faint">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} /> {profile.email}
            </span>
            <span>GPA {profile.gpa}</span>
            <span>BNSP Certified — Program Analyst</span>
          </div>
        </div>

        {/* CV document card */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative"
          style={{ perspective: 1400 }}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="relative mx-auto block w-full max-w-[380px] cursor-pointer rounded-md border border-black/5 bg-paper text-left shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55),0_8px_22px_-6px_rgba(0,0,0,0.4)] transition-transform duration-500 [transition-timing-function:cubic-bezier(.2,.8,.2,1)] hover:-translate-y-1.5 hover:rotate-0 hover:scale-[1.015]"
            style={{ transform: `rotate(${tilt.rotate}deg) translateY(${tilt.ty}px)` }}
            aria-label="Buka CV lengkap"
          >
            <span className="absolute -top-4 left-8 z-10 block h-[26px] w-[52px] -rotate-3 rounded-sm bg-gradient-to-b from-[#8f97a2] to-[#5c636c] shadow-md" />
            <Image
              src={cvImages[1]}
              alt="Preview halaman pertama CV Dedi Murphy"
              width={850}
              height={1202}
              className="block w-full rounded-[5px]"
              priority
            />
            <span className="absolute -right-3.5 bottom-5 z-20 flex h-[104px] w-[104px] -rotate-[14deg] animate-stampfloat items-center justify-center rounded-full border-[2.5px] border-stamp bg-paper/90 text-center font-mono text-[10.5px] font-bold uppercase leading-tight tracking-wide text-stamp [mix-blend-mode:multiply]">
              GPA 3.85 · TOP 50/639
            </span>
          </button>
          <p className="mt-5 text-center font-mono text-xs text-text-faint">
            Klik dokumen untuk lihat <b className="font-semibold text-text-dim">CV lengkap (3 halaman)</b>
          </p>
        </div>
      </div>

      <CvLightbox open={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </section>
  );
}
