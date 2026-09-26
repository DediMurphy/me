import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-line px-6 py-20 sm:px-8 sm:py-24">
      <RevealOnScroll className="mx-auto max-w-content">
        <div className="relative overflow-hidden rounded-[20px] border border-line-strong bg-gradient-to-br from-ink-2 to-ink px-6 py-14 text-center sm:px-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(201,138,59,0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(111,155,127,0.10), transparent 45%)",
            }}
          />
          <h2 className="relative mb-3.5 font-serif text-3xl font-semibold sm:text-4xl">
            Mari bangun sistem yang lebih rapi.
          </h2>
          <p className="relative mx-auto mb-8 max-w-[50ch] text-[15px] text-text-dim">
            Terbuka untuk peran Full Stack Developer atau .NET Backend Developer. Silakan hubungi
            langsung lewat email atau LinkedIn.
          </p>
          <div className="relative flex flex-wrap justify-center gap-3.5">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brass px-5 py-3 text-sm font-semibold text-[#1a1206] transition-transform hover:-translate-y-0.5 hover:bg-brass-bright"
            >
              <Mail size={15} /> {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-text-dim"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:border-text-dim"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
