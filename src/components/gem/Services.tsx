// import { motion } from "framer-motion";
// import { Building2, Layers, Construction } from "lucide-react";

// const services = [
//   {
//     icon: Building2,
//     title: "Civil Works",
//     desc: "End-to-end civil construction including structural work, drainage systems, earthwork, and site development with precision engineering.",
//   },
//   {
//     icon: Layers,
//     title: "Tar Road Construction",
//     desc: "Specialised in Bituminous Macadam, Dense Bituminous Macadam, and all grades of tar road laying with proper gradient and drainage.",
//   },
//   {
//     icon: Construction,
//     title: "Road Roller & Compaction",
//     desc: "Modern road construction rollers for perfect compaction, ensuring long-lasting road surfaces that withstand heavy traffic and monsoon conditions.",
//   },
// ];

// export function Services() {
//   return (
//     <section id="services" className="relative py-28 bg-[color:var(--navy)] overflow-hidden">
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,134,193,0.15),transparent_60%)]" />
//       <div className="relative mx-auto max-w-7xl px-6">
//         <div className="max-w-2xl">
//           <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">What We Build</p>
//           <h2 className="text-display text-5xl md:text-6xl font-bold text-white leading-tight">
//             Core Capabilities
//             <br />
//             <span className="text-[color:var(--silver)]">for modern infrastructure.</span>
//           </h2>
//         </div>

//         <div className="mt-16 grid md:grid-cols-3 gap-6">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="group relative rounded-2xl bg-white/[0.03] border border-white/10 p-8 hover:border-[color:var(--brand-blue)]/50 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
//             >
//               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--silver)]/60 to-transparent" />
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[color:var(--brand-blue)]/10 via-transparent to-transparent pointer-events-none" />
//               <div className="absolute -inset-x-20 -top-20 h-40 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

//               <div className="relative">
//                 <div className="h-14 w-14 rounded-xl bg-[color:var(--brand-blue)]/15 border border-[color:var(--brand-blue)]/30 flex items-center justify-center">
//                   <s.icon className="h-7 w-7 text-[color:var(--brand-blue)]" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="mt-6 text-display text-2xl font-bold text-white">{s.title}</h3>
//                 <p className="mt-3 text-[color:var(--silver)] leading-relaxed text-sm">
//                   {s.desc}
//                 </p>
//                 <div className="mt-8 h-px bg-white/10 group-hover:bg-[color:var(--brand-blue)]/40 transition" />
//                 <p className="mt-4 text-eyebrow text-[color:var(--brand-blue)] opacity-0 group-hover:opacity-100 transition">
//                   Learn More →
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Tar Road\nConstruction",
    spec: "BM · DBM · BC · WMM",
    desc: "Full-spectrum bituminous road laying — from sub-base preparation through Bituminous Macadam, Dense Bituminous Macadam, and Bituminous Concrete wearing course. Engineered gradients, proper camber, and integrated drainage on every project.",
    tags: ["Rural Roads", "Urban Roads", "Highway Works"],
  },
  {
    number: "02",
    title: "Civil\nWorks",
    spec: "Structural · Drainage · Earthworks",
    desc: "End-to-end civil construction including RCC structures, stormwater drainage systems, culverts, retaining walls, and full site development. Precision-engineered to CPWD and Tamil Nadu PWD specifications.",
    tags: ["Drainage Systems", "Site Development", "Structural Works"],
  },
  {
    number: "03",
    title: "Compaction\n& Finishing",
    spec: "Vibratory · Pneumatic · Static Rollers",
    desc: "Modern road roller fleet for perfect compaction at every layer — GSB, WMM, and bituminous courses. Consistent density testing and quality control ensures surfaces built to outlast monsoon seasons and heavy traffic.",
    tags: ["Layer Compaction", "QC Testing", "Surface Finishing"],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[color:var(--navy)] overflow-hidden"
    >
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow — top left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[color:var(--brand-blue)]/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div>
            <p className="text-eyebrow tracking-[0.2em] text-[color:var(--brand-blue)] mb-5 text-xs uppercase">
              What We Build
            </p>
            <h2
              className="font-bold text-white leading-[1.0]"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Core
              <br />
              <span className="text-[color:var(--silver)]">Capabilities.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[color:var(--silver)] text-sm leading-relaxed md:text-right opacity-70">
            Twelve years executing civil infrastructure across Coimbatore and Tamil Nadu — delivering roads and structures built to government specification, on schedule.
          </p>
        </div>

        {/* Service rows */}
        <div className="space-y-0 divide-y divide-white/[0.07]">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr_auto] gap-8 py-12 md:py-14 items-start cursor-default"
            >
              {/* Number */}
              <div className="text-[color:var(--brand-blue)] font-mono text-sm tracking-widest opacity-60 group-hover:opacity-100 transition-opacity duration-300 pt-1">
                {s.number}
              </div>

              {/* Title + spec */}
              <div>
                <h3
                  className="font-bold text-white leading-[1.1] whitespace-pre-line group-hover:text-[color:var(--brand-blue)] transition-colors duration-300"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-xs tracking-[0.15em] uppercase text-[color:var(--silver)] opacity-50 font-mono">
                  {s.spec}
                </p>
              </div>

              {/* Description */}
              <p className="text-[color:var(--silver)] text-sm leading-[1.85] opacity-70 group-hover:opacity-100 transition-opacity duration-300 max-w-md">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap md:flex-col gap-2 md:items-end">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[10px] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full border border-white/10 text-[color:var(--silver)] opacity-50 group-hover:opacity-100 group-hover:border-[color:var(--brand-blue)]/40 group-hover:text-[color:var(--brand-blue)] transition-all duration-300 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[color:var(--silver)] text-sm opacity-60">
            All works executed to{" "}
            <span className="text-white opacity-100">MORTH specifications</span>{" "}
            with certified QC at every stage.
          </p> 
          <a
          
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-[color:var(--brand-blue)] transition-colors duration-200"
          >
            Discuss your project
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-[color:var(--brand-blue)]/60 group-hover:bg-[color:var(--brand-blue)]/10 transition-all duration-200">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}



