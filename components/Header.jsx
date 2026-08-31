import { profile } from "@/data/content";

const links = [
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#skills", label: "Skill" },
  { href: "#education", label: "Edukasi" },
  { href: "#contact", label: "Kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-serif text-lg font-semibold">
          <span className="inline-block h-2 w-2 rotate-45 bg-brass" />
          {profile.name}
        </a>

        <nav className="hidden gap-7 text-[13.5px] text-text-dim sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg border border-line-strong px-3.5 py-2 font-mono text-xs transition-colors hover:border-brass hover:text-brass-bright"
        >
          Hubungi Saya
        </a>
      </div>
    </header>
  );
}
