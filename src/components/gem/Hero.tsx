import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-navy-gradient overflow-hidden flex items-center pt-32 pb-20"
    >
      {/* Road perspective SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="roadFade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Road edges */}
        <path d="M 100 900 L 560 250" stroke="url(#roadFade)" strokeWidth="1.5" fill="none" />
        <path d="M 1100 900 L 640 250" stroke="url(#roadFade)" strokeWidth="1.5" fill="none" />
        {/* Animated center dashed line */}
        <motion.line
          x1="600"
          y1="900"
          x2="600"
          y2="250"
          stroke="#ffffff"
          strokeWidth="3"
          strokeDasharray="20 18"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-eyebrow text-[color:var(--brand-blue)] mb-6"
        >
          ◆ Coimbatore · Tamil Nadu · Since 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-display font-bold text-white leading-[0.9]"
          style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
        >
          Building Roads.
          <br />
          <span className="text-[color:var(--silver)]">Building </span>
          <span className="bg-gradient-to-r from-[color:var(--brand-blue)] to-white bg-clip-text text-transparent">
            Futures.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-[color:var(--silver)]"
        >
          Tar Road Contractor &amp; Civil Works — Coimbatore's most trusted
          infrastructure partner, engineered for the long haul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-7 py-4 text-sm font-semibold text-white hover:brightness-110 transition shadow-[0_10px_40px_-10px_var(--brand-blue)]"
          >
            Our Services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--silver)]/60 px-7 py-4 text-sm font-semibold text-white hover:bg-white/5 transition"
          >
            Contact Us
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-white/10 pt-10">
          {[
            { n: 12, s: "+", l: "Years Experience" },
            { n: 500, s: "+", l: "KM Roads Built" },
            { n: 50, s: "+", l: "Projects Completed" },
            { n: 100, s: "%", l: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.l}>
              <div className="text-display text-5xl md:text-6xl font-bold text-white">
                <Counter to={stat.n} suffix={stat.s} />
              </div>
              <div className="text-eyebrow text-[color:var(--silver)] mt-2">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
