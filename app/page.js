import Image from "next/image";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section id="landing">
          <Landing />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
      </main>

      <Footer />
    </>
  );
}
