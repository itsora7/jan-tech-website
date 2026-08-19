import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import Section from "../layout/Section";
import { aboutStats, aboutValues } from "../../data/about";

const About = () => {
  return (
    <Section id="about" background="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Three brothers, one root in Pokhara."
            description="Jan Tech was founded by three Shrestha brothers with a shared vision to connect knowledge, technology, and practical digital solutions."
            alignment="left"
            accent="green"
          />

          <div className="mt-6 space-y-4 text-base leading-7 text-brand-muted sm:text-lg">
            <p>
              Our journey begins in Pokhara, Nepal, with strong roots in
              agriculture, community, and education.
            </p>

            <p>
              Today, the three brothers bring perspectives shaped by Nepal,
              Australia, and Japan, while keeping Jan Tech grounded in the place
              where the story began.
            </p>

            <p>
              Our roots are in agriculture, our foundation is knowledge, and our
              future is driven by technology and innovation.
            </p>
          </div>

          <div className="mt-8">
            <Button href="#contact">Work With Jan Tech</Button>
          </div>
        </div>

        <div className="rounded-3xl border border-brand-border bg-brand-background p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="text-sm font-bold tracking-[0.14em] text-emerald-700 uppercase">
                Our Roots
              </p>

              <p className="mt-2 text-lg font-bold text-brand-navy">
                Agriculture
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="text-sm font-bold tracking-[0.14em] text-brand-navy uppercase">
                Knowledge
              </p>

              <p className="mt-2 text-lg font-bold text-brand-navy">
                Training & Learning
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
                Our Future
              </p>

              <p className="mt-2 text-lg font-bold text-brand-navy">
                Technology
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Our Mission & Values"
          description="We want technology to be understandable, reliable, and genuinely useful for the people and businesses we serve."
          accent="blue"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutValues.map((value) => (
            <Card key={value.title} accent={value.accent} hover>
              <h3 className="text-xl font-bold text-brand-navy">
                {value.title}
              </h3>

              <p className="mt-3 leading-7 text-brand-muted">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-brand-navy px-6 py-10 sm:px-10">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-white">{stat.value}</p>

              <p className="mt-2 text-sm font-medium text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <SectionHeading
          eyebrow="Our People"
          title="The Team Behind Jan Tech"
          description="A close-knit team working from Pokhara and beyond, united by the belief that good technology should feel clear, useful, and dependable."
          accent="green"
        />

        <div className="mt-8">
          <Button href="#contact" variant="outline">
            Meet the Team
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default About;
