import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Cat = "All" | "Tar Roads" | "Civil Works" | "Municipal";

const projects: { title: string; cat: Exclude<Cat, "All">; length: string; type: string; year: string; h: string }[] = [
  { title: "Municipal Road, Sowripalayam", cat: "Municipal", length: "4.2 KM", type: "BM + DBM", year: "2024", h: "h-72" },
  { title: "Industrial Access Road, SIDCO", cat: "Tar Roads", length: "2.8 KM", type: "Dense Bituminous", year: "2024", h: "h-96" },
  { title: "Drainage & Civil Works, Ramnagar", cat: "Civil Works", length: "1.5 KM", type: "RCC + Earthwork", year: "2023", h: "h-80" },
  { title: "Village Connectivity Road, Pollachi", cat: "Tar Roads", length: "6.0 KM", type: "BM Single Coat", year: "2023", h: "h-72" },
  { title: "Layout Roads, Ondipudur", cat: "Municipal", length: "3.4 KM", type: "Premix Carpet", year: "2023", h: "h-96" },
  { title: "Compound & Site Works, Peelamedu", cat: "Civil Works", length: "0.8 KM", type: "Site Development", year: "2022", h: "h-80" },
];

const cats: Cat[] = ["All", "Tar Roads", "Civil Works", "Municipal"];

export function Projects() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="relative py-28 bg-[color:var(--light-silver)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">Portfolio</p>
            <h2 className="text-display text-5xl md:text-6xl font-bold text-[color:var(--navy)] leading-tight">
              Roads We've Built
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-eyebrow px-5 py-2.5 rounded-full border transition ${
                  active === c
                    ? "bg-[color:var(--navy)] text-white border-[color:var(--navy)]"
                    : "bg-white text-[color:var(--navy)]/70 border-[color:var(--silver)] hover:border-[color:var(--brand-blue)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden bg-[color:var(--navy)] ${p.h} cursor-pointer`}
              >
                {/* Decorative road */}
                <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--steel)]/40 to-[color:var(--navy)]" />
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 200 300" preserveAspectRatio="none">
                  <line x1="100" y1="300" x2="100" y2="0" stroke="white" strokeWidth="2" strokeDasharray="14 12" />
                </svg>

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-eyebrow text-[color:var(--brand-blue)]">{p.cat}</span>
                  <h3 className="text-display text-2xl font-bold mt-2">{p.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--silver)]">
                    <span>{p.length}</span>
                    <span className="h-1 w-1 rounded-full bg-[color:var(--silver)]" />
                    <span>{p.type}</span>
                    <span className="h-1 w-1 rounded-full bg-[color:var(--silver)]" />
                    <span>{p.year}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[color:var(--brand-blue)]/90 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-display text-2xl font-bold text-white">View Details →</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
