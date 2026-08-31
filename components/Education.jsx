import { education, certifications } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="relative z-10 border-t border-line px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-content">
        <RevealOnScroll className="mb-11">
          <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-brass-bright">
            Ledger Balance
          </p>
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Edukasi &amp; Sertifikasi</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="mb-1 font-serif text-lg font-semibold">{education.degree}</h3>
            <p className="mb-3.5 text-[13.5px] text-brass-bright">
              {education.school} · {education.gpa}
            </p>
            {education.notes.map((note, i) => (
              <div
                key={i}
                className={`py-3 text-[13.5px] ${
                  i < education.notes.length - 1 ? "border-b border-line" : ""
                }`}
              >
                {note}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="mb-1 font-serif text-lg font-semibold">Sertifikasi</h3>
            <p className="mb-3.5 text-[13.5px] text-brass-bright">Pelatihan &amp; kredensial profesional</p>
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className={`flex items-center justify-between gap-3.5 py-3 text-[13.5px] ${
                  i < certifications.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <span>{cert.name}</span>
                <span className="whitespace-nowrap font-mono text-[11.5px] text-text-faint">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
