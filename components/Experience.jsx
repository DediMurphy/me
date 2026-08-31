"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  const [openId, setOpenId] = useState(experience[0]?.id ?? null);

  return (
    <section id="experience" className="relative z-10 border-t border-line px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-content">
        <RevealOnScroll className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-brass-bright">
              Journal Entry — Pekerjaan
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Pengalaman</h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-relaxed text-text-dim">
            Dicatat seperti buku besar akuntansi yang biasa saya bangun — klik tiap baris untuk detail.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="border-t border-line-strong">
          {experience.map((job) => {
            const isOpen = openId === job.id;
            return (
              <div
                key={job.id}
                onClick={() => setOpenId(isOpen ? null : job.id)}
                className="grid cursor-pointer grid-cols-[56px_1fr] gap-4 border-b border-line py-7 transition-colors hover:bg-white/[0.02] sm:grid-cols-[74px_1fr] sm:gap-5"
              >
                <div className="pt-1 font-mono text-[13px] text-text-faint">
                  {job.id}
                  <span
                    className={`mt-2 block w-fit rounded border px-1.5 py-0.5 text-[10px] tracking-wide ${
                      job.status === "AKTIF"
                        ? "border-accent-green/35 text-accent-green"
                        : "border-line-strong text-text-faint"
                    }`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="font-serif text-lg font-semibold sm:text-xl">{job.role}</span>
                      <span className="text-text-dim">·</span>
                      <span className="font-medium text-brass-bright">{job.org}</span>
                      <ChevronDown
                        size={14}
                        className={`ml-1 text-text-faint transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <div className="whitespace-nowrap font-mono text-xs text-text-faint">{job.date}</div>
                  </div>

                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 600 : 0, marginTop: isOpen ? 16 : 0 }}
                  >
                    <ul className="list-disc space-y-1.5 pl-[18px] text-[14.5px] leading-relaxed text-text-dim marker:text-brass">
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-line-strong bg-surface px-2.5 py-1 font-mono text-[11.5px] text-text-dim"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
