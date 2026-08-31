import { projects } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 border-t border-line px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-content">
        <RevealOnScroll className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-brass-bright">
              Module Records
            </p>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Proyek</h2>
          </div>
          <p className="max-w-[46ch] text-sm leading-relaxed text-text-dim">
            Dari sistem produksi di tempat kerja sampai eksperimen pribadi dengan AI dan stack modern.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-surface-2"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brass transition-transform duration-300 group-hover:scale-y-100" />
              <p className="mb-3 font-mono text-[11px] tracking-wide text-text-faint">
                {project.id} · {project.tag}
              </p>
              <h3 className="mb-2.5 font-serif text-[19.5px] font-semibold">{project.title}</h3>
              <ul className="mb-4 list-disc space-y-1.5 pl-[18px] text-sm leading-relaxed text-text-dim">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-line-strong bg-ink px-2.5 py-1 font-mono text-[11.5px] text-text-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
