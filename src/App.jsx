import Header from "./components/layout/Header";
import Section from "./components/layout/Section";

import Services from "./components/sections/Services";
import Statistics from "./components/sections/Statistics";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import SectionHeading from "./components/ui/SectionHeading";
import Training from "./components/sections/Training";
import Portfolio from "./components/sections/Portfolio";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Section
          id="home"
          background="light"
          className="flex min-h-[calc(100vh-5rem)] items-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-brand-border bg-white px-5 py-10 text-center shadow-xl sm:px-10 sm:py-14">
            <img
              src="/logo.png"
              alt="Jan Tech logo"
              className="mx-auto h-auto w-full max-w-44 sm:max-w-52"
            />

            <p className="mt-6 text-sm font-bold tracking-[0.18em] text-emerald-700 uppercase">
              Pokhara, Nepal
            </p>

            <h1 className="mt-3 text-4xl leading-tight font-bold text-brand-navy sm:text-5xl lg:text-6xl">
              Welcome to Jan Tech
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
              We are building a professional technology company website using
              React, JavaScript, Tailwind CSS, and modern frontend development
              practices.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#services">Start Building</Button>

              <Button href="#contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Section>

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
