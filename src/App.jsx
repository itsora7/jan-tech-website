import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Section from "./components/layout/Section";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Statistics from "./components/sections/Statistics";
import Training from "./components/sections/Training";
import Portfolio from "./components/sections/Portfolio";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";

import Card from "./components/ui/Card";
import SectionHeading from "./components/ui/SectionHeading";

// import { testSupabaseSecurity } from "./lib/supabase";

const App = () => {
  // testSupabaseSecurity();
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Section id="about" background="white">
          <SectionHeading
            eyebrow="About Jan Tech"
            title="Built in Pokhara. Driven by Passion."
            description="Founded by three Shrestha brothers from Pokhara, Jan Tech creates digital solutions that empower businesses and individuals."
            alignment="left"
            accent="green"
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card accent="green" hover>
              <h3 className="text-xl font-bold text-brand-navy">Our Roots</h3>

              <p className="mt-3 leading-7 text-brand-muted">
                Our story begins in Pokhara, with strong roots in agriculture,
                community, and practical knowledge.
              </p>
            </Card>

            <Card accent="navy" hover>
              <h3 className="text-xl font-bold text-brand-navy">Knowledge</h3>

              <p className="mt-3 leading-7 text-brand-muted">
                We believe education and continuous learning create the
                foundation for better technology.
              </p>
            </Card>

            <Card accent="blue" hover>
              <h3 className="text-xl font-bold text-brand-navy">Our Future</h3>

              <p className="mt-3 leading-7 text-brand-muted">
                Technology and innovation help us build useful digital solutions
                for Nepal and beyond.
              </p>
            </Card>
          </div>
        </Section>

        <Statistics />

        <Services />

        <Training />

        <Portfolio />

        <Products />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
