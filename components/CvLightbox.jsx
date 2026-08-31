"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cvImages } from "@/data/content";

export default function CvLightbox({ open, onClose }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!open) setPage(1);
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-6 top-6 text-text-dim transition-colors hover:text-text sm:right-8 sm:top-8"
      >
        <X size={28} />
      </button>

      <div className="flex w-full max-w-[640px] max-h-[92vh] flex-col items-center gap-3.5">
        <div className="relative max-h-[76vh] w-full overflow-hidden rounded-md shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <Image
            src={cvImages[page]}
            alt={`Halaman CV ${page}`}
            width={850}
            height={1202}
            className="h-auto max-h-[76vh] w-full object-contain"
          />
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`rounded-lg border px-3.5 py-1.5 font-mono text-xs transition-colors ${
                page === p
                  ? "border-brass bg-brass text-[#1a1206]"
                  : "border-line-strong text-text-dim hover:border-text-dim"
              }`}
            >
              Hal. {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
