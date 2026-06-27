import { motion } from "framer-motion";
import { HardHat, Clock, Cog, ClipboardCheck } from "lucide-react";

const items = [
  { icon: HardHat, t: "Engineering Expertise", d: "Led by a qualified Civil Engineer with deep field experience." },
  { icon: Clock, t: "On-Time Delivery", d: "Project timelines strictly honored from groundbreak to handover." },
  { icon: Cog, t: "Modern Equipment", d: "Latest road construction machinery for precision and durability." },
  { icon: ClipboardCheck, t: "End-to-End Service", d: "Survey to handover, all under one accountable roof." },
];

export function WhyChoose() {
  return (
    <section className="relative py-28 bg-steel-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(135deg,transparent_49%,rgba(255,255,255,0.05)_49%,rgba(255,255,255,0.05)_51%,transparent_51%)] bg-[length:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">Why Choose Us</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-white leading-tight">
            The Gem Road Difference
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-6 p-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.07] hover:-translate-y-1 transition"
            >
              <div className="shrink-0 h-16 w-16 rounded-xl border border-white/20 flex items-center justify-center group-hover:border-[color:var(--brand-blue)] transition">
                <it.icon className="h-8 w-8 text-[color:var(--silver)] group-hover:text-[color:var(--brand-blue)] transition" strokeWidth={1.25} />
              </div>
              <div>
                <h3 className="text-display text-2xl font-bold text-white">{it.t}</h3>
                <p className="text-[color:var(--silver)] mt-2 text-sm leading-relaxed">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
