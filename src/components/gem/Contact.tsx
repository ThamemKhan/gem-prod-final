import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send } from "lucide-react";

function Field({ label, name, type = "text", required = true }: { label: string; name: string; type?: string; required?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState("");
  const up = focused || val.length > 0;
  return (
    <div className="relative">
      <label
        className={`absolute left-4 pointer-events-none transition-all text-eyebrow ${
          up ? "top-1.5 text-[10px] text-[color:var(--brand-blue)]" : "top-4 text-xs text-[color:var(--navy)]/60"
        }`}
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-white border border-[color:var(--silver)] rounded-xl pt-6 pb-2 px-4 text-[color:var(--navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-blue)]/40 focus:border-[color:var(--brand-blue)] transition"
      />
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <section id="contact" className="relative py-28 bg-[color:var(--light-silver)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow text-[color:var(--brand-blue)] mb-4">Get in Touch</p>
          <h2 className="text-display text-5xl md:text-6xl font-bold text-[color:var(--navy)] leading-tight">
            Start your
            <br />
            <span className="text-[color:var(--steel)]">next project.</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-[color:var(--silver)] space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" />
              <Field label="Phone Number" name="phone" type="tel" />
            </div>
            <Field label="Email Address" name="email" type="email" />
            <div className="relative">
              <select
                name="service"
                required
                defaultValue=""
                className="w-full bg-white border border-[color:var(--silver)] rounded-xl py-4 px-4 text-[color:var(--navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-blue)]/40 focus:border-[color:var(--brand-blue)] transition appearance-none"
              >
                <option value="" disabled>Service Required —</option>
                <option>Tar Road Construction</option>
                <option>Civil Works</option>
                <option>Road Roller & Compaction</option>
                <option>Site Survey & Consultation</option>
              </select>
            </div>
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your project..."
                className="w-full bg-white border border-[color:var(--silver)] rounded-xl py-4 px-4 text-[color:var(--navy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-blue)]/40 focus:border-[color:var(--brand-blue)] transition resize-none placeholder:text-[color:var(--navy)]/40"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-xl bg-[color:var(--brand-blue)] py-4 text-white font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative flex items-center gap-2">
                {sent ? "Message Sent ✓" : "Send Message"}
                {!sent && <Send className="h-4 w-4" />}
              </span>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-[color:var(--navy)] text-white p-8 border-l-4 border-[color:var(--brand-blue)] flex flex-col"
          >
            <h3 className="text-display text-2xl font-bold">Contact Information</h3>
            <div className="mt-8 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-[color:var(--brand-blue)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-eyebrow text-[color:var(--silver)] mb-1">Phone</p>
                  <a href="tel:9843407000" className="text-lg font-semibold hover:text-[color:var(--brand-blue)]">
                    9843407000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-[color:var(--brand-blue)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-eyebrow text-[color:var(--silver)] mb-1">Address</p>
                  <p className="text-white/90 leading-relaxed">
                    4th Floor, Palanisamy Towers, 135, Dharmaraj Layout, Sowripalayam Pirivu Road,
                    Ramanathapuram, Coimbatore – 641045
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-[color:var(--brand-blue)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-eyebrow text-[color:var(--silver)] mb-1">Email</p>
                  <a
                    href="mailto:gembuilders_covai@yahoo.com"
                    className="hover:text-[color:var(--brand-blue)] break-all"
                  >
                    gembuilders_covai@yahoo.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10 flex-1 min-h-[200px]">
              <iframe
                title="Gem Road Constructions Location"
                src="https://www.google.com/maps?q=Ramanathapuram,+Coimbatore&output=embed"
                className="w-full h-full min-h-[200px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
