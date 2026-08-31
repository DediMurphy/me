export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-10 text-center font-mono text-xs text-text-faint sm:px-8">
      © {new Date().getFullYear()} Dedi Murphy — Dibuat dengan Next.js &amp; sedikit rasa akuntansi.
    </footer>
  );
}
