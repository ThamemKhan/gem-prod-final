export function Footer() {
  return (
    <footer className="relative bg-[color:var(--navy)] text-[color:var(--silver)] pt-16 pb-8 border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-[3px] road-dashes opacity-60" />
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-display text-3xl font-bold text-white">
            GEM ROAD <span className="text-[color:var(--brand-blue)]">CONSTRUCTIONS</span>
          </h3>
          <p className="text-eyebrow text-[color:var(--silver)] mt-2">Tar Road · Civil Works</p>
          <p className="mt-6 text-sm text-white/60 leading-relaxed max-w-xs">
            Engineering durable roads and civil structures across Tamil Nadu since 2013.
          </p>
        </div>
        <div>
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-5">Quick Links</p>
          <ul className="space-y-3 text-sm">
            {["Home", "Services", "Equipment", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-white transition">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-5">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>Er. S. Mohammed Shafi</li>
            <li><a href="tel:9843407000" className="hover:text-white">9843407000</a></li>
            <li className="break-all"><a href="mailto:gembuildersmd@gmail.com" className="hover:text-white">gembuildersmd@gmail.com</a></li>
            <li className="text-white/60">Ramanathapuram, Coimbatore – 641045</li>
          </ul>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 pt-6 mx-auto max-w-7xl px-6 text-xs text-white/40 flex flex-col sm:flex-row gap-2 justify-between">
        <p>© 2026 Gem Road Constructions. All Rights Reserved.</p>
        {/* <p>Designed with precision.</p> */}
      </div>
    </footer>
  );
}
