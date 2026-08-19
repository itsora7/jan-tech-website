import { BookOpenCheck, MapPin, Users } from "lucide-react";

import Section from "../layout/Section";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import TrainingCard from "../ui/TrainingCard";
import { trainingPrograms } from "../../data/training";

const Training = () => {
  return (
    <Section id="training" background="white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <SectionHeading
          eyebrow="Knowledge"
          title="Practical Skills for Study, Work & Career"
          description="Jan Tech provides practical training designed to build confidence, technical ability, communication skills, and career readiness."
          alignment="left"
          accent="blue"
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-background p-4">
            <BookOpenCheck
              size={22}
              className="shrink-0 text-emerald-700"
              aria-hidden="true"
            />

            <p className="text-sm font-semibold text-brand-navy">
              Practical Learning
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-background p-4">
            <Users
              size={22}
              className="shrink-0 text-brand-navy"
              aria-hidden="true"
            />

            <p className="text-sm font-semibold text-brand-navy">
              Beginner Friendly
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-background p-4">
            <MapPin
              size={22}
              className="shrink-0 text-blue-700"
              aria-hidden="true"
            />

            <p className="text-sm font-semibold text-brand-navy">
              Pokhara Based
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {trainingPrograms.map((program, index) => (
          <TrainingCard
            key={program.id}
            title={program.title}
            description={program.description}
            icon={program.icon}
            accent={program.accent}
            image={program.image}
            number={String(index + 1).padStart(2, "0")}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-5 rounded-3xl bg-brand-navy px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <p className="text-sm font-bold tracking-[0.16em] text-emerald-300 uppercase">
            Need Guidance?
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Not sure which training program is right for you?
          </h3>

          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Tell us your current skills, interests, and future goals. We can
            help you choose a suitable training path.
          </p>
        </div>

        <div className="shrink-0">
          <Button href="#contact">Contact Jan Tech</Button>
        </div>
      </div>
    </Section>
  );
};

export default Training;
