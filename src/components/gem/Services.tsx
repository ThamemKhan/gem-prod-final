import { motion } from "framer-motion";
import { Building2, Layers, Construction } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Civil Works",
    desc: "End-to-end civil construction including structural work, drainage systems, earthwork, and site development with precision engineering.",
  },
  {
    icon: Layers,
    title: "Tar Road Construction",
    desc: "Specialised in Bituminous Macadam, Dense Bituminous Macadam, and all grades of tar road laying with proper gradient and drainage.",
  },
  {
    icon: Construction,
    title: "Road Roller & Compaction",
    desc: "Modern road construction rollers for perfect compaction, ensuring long-lasting road surfaces that withstand heavy traffic and monsoon conditions.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-[color:var(--navy)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,134,193,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">What We Build</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-white leading-tight">
            Core Capabilities
            <br />
            <span className="text-[color:var(--silver)]">for modern infrastructure.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-8 hover:border-[color:var(--brand-blue)]/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--silver)]/60 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[color:var(--brand-blue)]/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -inset-x-20 -top-20 h-40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-[color:var(--brand-blue)]/15 border border-[color:var(--brand-blue)]/30 flex items-center justify-center">
                  <s.icon className="h-7 w-7 text-[color:var(--brand-blue)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-display text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[color:var(--silver)] leading-relaxed text-sm">
                  {s.desc}
                </p>
                <div className="mt-8 h-px bg-white/10 group-hover:bg-[color:var(--brand-blue)]/40 transition" />
                <p className="mt-4 text-eyebrow text-[color:var(--brand-blue)] opacity-0 group-hover:opacity-100 transition">
                  Learn More →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
