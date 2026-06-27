import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Site Survey", d: "Detailed terrain mapping & feasibility study." },
  { n: "02", t: "Soil Testing", d: "CBR, density, and stability analysis." },
  { n: "03", t: "Sub-base Prep", d: "Grading, leveling & WBM layer setup." },
  { n: "04", t: "Bitumen Laying", d: "Hot-mix paving with calibrated thickness." },
  { n: "05", t: "Compaction", d: "Multi-pass rolling for max density." },
  { n: "06", t: "Quality Check", d: "Density, gradient & finish verification." },
  { n: "07", t: "Handover", d: "Documented, certified, ready for traffic." },
];

export function Process() {
  return (
    <section className="relative py-28 bg-[color:var(--light-silver)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">How We Work</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-[color:var(--navy)] leading-tight">
            A seven-step
            <br />
            <span className="text-[color:var(--steel)]">construction protocol.</span>
          </h2>
        </div>

        <div className="mt-16 overflow-x-auto pb-6 -mx-6 px-6">
          <div className="relative flex gap-6 min-w-max">
            {/* connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute top-12 left-6 right-6 h-[2px] bg-gradient-to-r from-[color:var(--brand-blue)] via-[color:var(--steel)] to-transparent"
            />
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="relative w-56 shrink-0"
              >
                <div className="relative z-10 h-6 w-6 rounded-full bg-[color:var(--brand-blue)] border-4 border-[color:var(--light-silver)] mb-6 mx-auto ring-2 ring-[color:var(--brand-blue)]/30" />
                <div className="text-display text-5xl font-bold text-[color:var(--steel)]">{s.n}</div>
                <h3 className="text-display text-xl font-bold text-[color:var(--navy)] mt-2">{s.t}</h3>
                <p className="text-sm text-[color:var(--navy)]/70 mt-2">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
