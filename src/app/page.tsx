import Image from "next/image";
import IntroSection from "./_components/intro-section";
import About from "./_components/about-section";
import Feature from "./_components/feature-section";

export default function Home() {
  return (
    <main className="">

      <IntroSection />

      <About />

      <Feature />

      <section id="feature">
        <h1 className="text-primary">Feature</h1>
      </section>

      <section id="portfolio">
        <h1 className="text-primary">Portfolio</h1>
      </section>

      <section id="contact">
        <h1 className="text-primary">Redes Sociais</h1>
      </section>
    </main>
  );
}
