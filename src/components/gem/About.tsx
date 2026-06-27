import { motion } from "framer-motion";
import { User, Phone, MapPin, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 bg-[color:var(--light-silver)] diagonal-texture">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-6 border-l-[3px] border-[color:var(--brand-blue)]"
        >
          <p className="text-eyebrow text-[color:var(--steel)] mb-4">About Gem Road Constructions</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-[color:var(--navy)] leading-tight">
            Engineering the
            <br />
            roads of Tamil Nadu.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--navy)]/75 leading-relaxed">
            Gem Road Constructions has been a trusted name in road infrastructure and
            civil construction across Tamil Nadu. Led by Er. S. Mohammed Shafi,
            we combine engineering expertise with cutting-edge equipment to
            deliver durable, high-quality tar roads and civil structures —
            on time, every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl bg-[color:var(--navy)] p-8 md:p-10 text-white border border-white/10 shadow-[0_30px_60px_-20px_rgba(10,22,40,0.4)]"
        >
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[color:var(--brand-blue)] to-transparent" />
          <p className="text-eyebrow text-[color:var(--brand-blue)]">Leadership</p>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[color:var(--steel)] to-[color:var(--brand-blue)] flex items-center justify-center shrink-0">
              <User className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-display text-2xl font-bold">Er. S. Mohammed Shafi</h3>
              <p className="text-[color:var(--silver)] text-sm mt-1">
                Civil Engineer · Founder
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[color:var(--brand-blue)]" />
              <a href="tel:9843407000" className="hover:text-[color:var(--brand-blue)]">9843407000</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[color:var(--brand-blue)]" />
              <a href="mailto:gembuildersmd@gmail.com" className="hover:text-[color:var(--brand-blue)] break-all">
                gembuildersmd@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[color:var(--brand-blue)] mt-0.5" />
              <span className="text-white/80">
                4th Floor, Palanisamy Towers, 135, Dharmaraj Layout, Sowripalayam Pirivu Road,
                Ramanathapuram, Coimbatore – 641045
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
