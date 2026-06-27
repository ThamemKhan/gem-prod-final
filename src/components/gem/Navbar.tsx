import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Civil Works" },
  { href: "#equipment", label: "Equipment" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[color:var(--navy)]/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex flex-col leading-none">
          <span className="text-display text-2xl md:text-3xl font-bold text-white">
            GEM ROAD <span className="text-[color:var(--brand-blue)]">CONSTRUCTIONS</span>
          </span>
          <span className="mt-1 h-[2px] w-24 bg-gradient-to-r from-[color:var(--silver)] to-transparent" />
          <span className="text-eyebrow text-[10px] mt-1 text-[color:var(--silver)]">
            Tar Road · Civil Works
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors text-eyebrow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:9843407000"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white pulse-glow hover:brightness-110 transition"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[color:var(--navy)]/95 backdrop-blur-xl ${
          open ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-eyebrow text-white/80 hover:text-[color:var(--brand-blue)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:9843407000"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" /> Call 9843407000
          </a>
        </nav>
      </div>
    </header>
  );
}
