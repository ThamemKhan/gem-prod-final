import { motion } from "framer-motion";

const fleet = [
  {
    name: "Road Construction Roller",
    spec: "10-12 Ton Vibratory",
    desc: "Tandem vibratory rollers delivering uniform compaction across base, binder, and surface layers.",
  },
  {
    name: "Hot Mix Plant",
    spec: "60-90 TPH Capacity",
    desc: "Batch-type asphalt plant for precise bitumen-aggregate mixing at controlled temperatures.",
  },
  {
    name: "Paver Machine",
    spec: "Hydrostatic Sensor Paver",
    desc: "Sensor-controlled paving for accurate thickness, level, and a flawless surface finish.",
  },
];

export function Equipment() {
  return (
    <section id="equipment" className="relative py-28 bg-[color:var(--navy)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(27,75,130,0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">Our Fleet</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-white leading-tight">
            Heavy-Duty
            <br />
            Equipment Fleet
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {fleet.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent p-8 border border-[color:var(--silver)]/20 hover:border-[color:var(--brand-blue)]/50 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,transparent,rgba(192,200,210,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-eyebrow text-[color:var(--brand-blue)]">{f.spec}</p>
              <h3 className="text-display text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
                {f.name}
              </h3>
              <p className="mt-5 text-[color:var(--silver)] text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px flex-1 bg-[color:var(--silver)]/20" />
                <span className="text-eyebrow text-[color:var(--silver)]/60">0{i + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
