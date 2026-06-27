import { Navbar } from "@/components/gem/Navbar";
import { Hero } from "@/components/gem/Hero";
import { About } from "@/components/gem/About";
import { Services } from "@/components/gem/Services";
import { Process } from "@/components/gem/Process";
import { Equipment } from "@/components/gem/Equipment";
import { WhyChoose } from "@/components/gem/WhyChoose";
import { Projects } from "@/components/gem/Projects";
import { Testimonials } from "@/components/gem/Testimonials";
import { Contact } from "@/components/gem/Contact";
import { Footer } from "@/components/gem/Footer";

export default function App() {
  return (
    <main className="bg-[color:var(--light-silver)]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Equipment />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
