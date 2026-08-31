import { skillGroups } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 border-t border-line px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-content">
        <RevealOnScroll className="mb-11">
          <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-brass-bright">
            Chart of Accounts — Stack
          </p>
          <h2 className="mb-2.5 font-serif text-3xl font-semibold sm:text-4xl">Skill</h2>
          <p className="max-w-[46ch] text-sm leading-relaxed text-text-dim">
            Dikelompokkan seperti chart of accounts di sistem accounting — tiap kategori punya perannya
            sendiri.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-line bg-ink-2 p-5">
              <h3 className="mb-3.5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-faint">
                <span className="text-brass">§</span> {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line-strong bg-surface px-2.5 py-1 font-mono text-[11.5px] text-text-dim"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
