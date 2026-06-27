import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const items = [
  {
    name: "R. Sundaram",
    loc: "Municipal Engineer, Coimbatore",
    text: "Gem Road Constructions delivered our 4 KM stretch ahead of schedule with surface quality that's still holding up after two monsoons. Truly engineering-grade work.",
  },
  {
    name: "K. Murugan",
    loc: "Industrial Estate, SIDCO",
    text: "The team's attention to compaction and drainage made our access road maintenance-free for years. Highly professional throughout.",
  },
  {
    name: "A. Balakrishnan",
    loc: "Layout Developer, Pollachi",
    text: "From survey to handover, transparent communication and zero compromise on materials. Er. Shafi runs a tight, expert outfit.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section
      className="relative py-28 bg-[color:var(--navy)] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="absolute top-20 right-10 h-80 w-80 text-white/[0.03]" strokeWidth={1} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">Testimonials</p>
        <h2 className="text-display text-5xl md:text-6xl font-bold text-white leading-tight">
          Trusted by clients
          <br />
          <span className="text-[color:var(--silver)]">across Tamil Nadu.</span>
        </h2>

        <div className="mt-14 relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-10 backdrop-blur-sm"
            >
              <div className="flex justify-center gap-1 text-[color:var(--brand-blue)]">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} className="h-5 w-5 fill-[color:var(--brand-blue)]" />
                ))}
              </div>
              <p className="mt-6 text-xl md:text-2xl text-white leading-relaxed font-light">
                "{items[i].text}"
              </p>
              <div className="mt-8">
                <p className="text-display text-xl font-bold text-white">{items[i].name}</p>
                <p className="text-eyebrow text-[color:var(--silver)] mt-1">{items[i].loc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Testimonial ${n + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                n === i ? "w-10 bg-[color:var(--brand-blue)]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
