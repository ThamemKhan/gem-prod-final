// import { motion } from "framer-motion";
// import { User, Phone, MapPin, Mail } from "lucide-react";

// export function About() {
//   return (
//     <section id="about" className="relative py-28 bg-[color:var(--light-silver)] diagonal-texture">
//       <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative pl-6 border-l-[3px] border-[color:var(--brand-blue)]"
//         >
//           <p className="text-eyebrow text-[color:var(--steel)] mb-4">About Gem Road Constructions</p>
//           <h2 className="text-display text-5xl md:text-6xl font-bold text-[color:var(--navy)] leading-tight">
//             Engineering the
//             <br />
//             roads of Tamil Nadu.
//           </h2>
//           <p className="mt-6 text-lg text-[color:var(--navy)]/75 leading-relaxed">
//             Gem Road Constructions has been a trusted name in road infrastructure and
//             civil construction across Tamil Nadu. Led by Er. S. Mohammed Shafi,
//             we combine engineering expertise with cutting-edge equipment to
//             deliver durable, high-quality tar roads and civil structures —
//             on time, every time.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="relative rounded-2xl bg-[color:var(--navy)] p-8 md:p-10 text-white border border-white/10 shadow-[0_30px_60px_-20px_rgba(10,22,40,0.4)]"
//         >
//           <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-blue)] to-transparent" />
//           <p className="text-eyebrow text-[color:var(--brand-blue)]">Leadership</p>
//           <div className="mt-6 flex items-start gap-5">
//             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[color:var(--steel)] to-[color:var(--brand-blue)] flex items-center justify-center shrink-0">
//               <User className="h-8 w-8 text-white" />
//             </div>
//             <div>
//               <h3 className="text-display text-2xl font-bold">Er. S. Mohammed Shafi</h3>
//               <p className="text-[color:var(--silver)] text-sm mt-1">
//                 Civil Engineer · Founder
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 space-y-4 text-sm">
//             <div className="flex items-center gap-3">
//               <Phone className="h-4 w-4 text-[color:var(--brand-blue)]" />
//               <a href="tel:9843407000" className="hover:text-[color:var(--brand-blue)]">9843407000</a>
//             </div>
//             <div className="flex items-center gap-3">
//               <Mail className="h-4 w-4 text-[color:var(--brand-blue)]" />
//               <a href="mailto:gembuildersmd@gmail.com" className="hover:text-[color:var(--brand-blue)] break-all">
//                 gembuildersmd@gmail.com
//               </a>
//             </div>
//             <div className="flex items-start gap-3">
//               <MapPin className="h-4 w-4 text-[color:var(--brand-blue)] mt-0.5" />
//               <span className="text-white/80">
//                 Shop no 1,ground floor,Mother's Complex, Central Studio Road,
//                 Singanallur, Coimbatore-641005.
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const credentials = [
  { value: 12, suffix: "+", label: "Years in Tamil Nadu infrastructure" },
  { value: 500, suffix: "+", label: "Kilometres of road laid" },
  { value: 50, suffix: "+", label: "Government & private projects" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-[color:var(--light-silver)] overflow-hidden"
    >
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Top label row */}
        <div className="flex items-center gap-4 mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[color:var(--steel)]">
            About
          </span>
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[color:var(--steel)]">
            Est. 2013 · Coimbatore
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left — brand story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2
              className="font-bold text-[color:var(--navy)] leading-[1.05]"
              style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)" }}
            >
              Engineering the
              <br />
              <span className="text-[color:var(--brand-blue)]">roads of</span>
              <br />
              Tamil Nadu.
            </h2>

            <p className="mt-8 text-[color:var(--navy)]/65 leading-[1.9] text-base max-w-lg">
              Gem Road Constructions has spent over a decade building the
              infrastructure Tamil Nadu depends on — rural connectivity roads,
              urban arterials, and civil structures that outlast their design life.
              Every project is personally overseen by our founder, ensuring
              engineering rigour at every layer.
            </p>

            <p className="mt-5 text-[color:var(--navy)]/65 leading-[1.9] text-base max-w-lg">
              We work directly with municipal corporations, panchayat unions,
              TNRDC, and private developers — bringing the same standard of
              execution to every scale of work.
            </p>

            {/* Credential stats */}
            <div className="mt-14 grid grid-cols-3 gap-0 border border-black/10 rounded-xl overflow-hidden">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className={`px-6 py-7 ${
                    i < credentials.length - 1 ? "border-r border-black/10" : ""
                  }`}
                >
                  <div
                    className="font-bold text-[color:var(--navy)] leading-none"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                  >
                    <Counter to={c.value} suffix={c.suffix} />
                  </div>
                  <div className="mt-2 text-[11px] leading-[1.5] text-[color:var(--steel)] uppercase tracking-[0.1em]">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — leadership card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:pt-6"
          >
            {/* Card */}
            <div className="relative rounded-2xl bg-[color:var(--navy)] overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[color:var(--brand-blue)] via-[color:var(--brand-blue)]/60 to-transparent" />

              <div className="p-8 md:p-10">
                {/* Founder identity */}
                <div className="flex items-center gap-5 pb-8 border-b border-white/[0.07]">
                  {/* Monogram */}
                  <div className="h-16 w-16 rounded-xl bg-[color:var(--brand-blue)]/15 border border-[color:var(--brand-blue)]/30 flex items-center justify-center shrink-0">
                    <span className="text-[color:var(--brand-blue)] font-bold text-xl tracking-tight">
                      MS
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl leading-tight">
                      Er. S. Mohammed Shafi
                    </h3>
                    <p className="text-[color:var(--silver)] text-sm mt-1 opacity-60">
                      B.E. Civil Engineering · Founder & Director
                    </p>
                    <p className="text-[color:var(--brand-blue)] text-xs mt-2 tracking-widest uppercase font-mono">
                      12+ Years Experience
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 text-[color:var(--silver)] text-sm leading-[1.9] opacity-75 italic border-l-2 border-[color:var(--brand-blue)]/40 pl-5">
                  "Every road we build is a commitment — to the communities that
                  use it, to the engineers who designed it, and to the standard
                  Tamil Nadu infrastructure deserves."
                </blockquote>

                {/* Contact details */}
                <div className="mt-8 space-y-4 pt-8 border-t border-white/[0.07]">
                  {[
                    {
                      icon: Phone,
                      label: "9843407000",
                      href: "tel:9843407000",
                    },
                    {
                      icon: Mail,
                      label: "gembuildersmd@gmail.com",
                      href: "mailto:gembuildersmd@gmail.com",
                    },
                    {
                      icon: MapPin,
                      label:
                        "Shop No. 1, Mother's Complex, Central Studio Road, Singanallur, Coimbatore – 641005",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-lg bg-[color:var(--brand-blue)]/10 border border-[color:var(--brand-blue)]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="h-3.5 w-3.5 text-[color:var(--brand-blue)]" />
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-white/70 text-sm leading-relaxed hover:text-[color:var(--brand-blue)] transition-colors duration-200 break-all"
                        >
                          {label}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm leading-relaxed">
                          {label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Below card — certifications note */}
            <p className="mt-5 text-[11px] tracking-[0.12em] uppercase text-[color:var(--steel)] opacity-60 text-center">
              Licensed Civil Contractor · Tamil Nadu PWD Registered
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}