import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import StatCard from "../ui/StatCard";
import { stats } from "../../data/stats";

const Statistics = () => {
  return (
    <Section
      id="statistics"
      background="white"
      className="relative overflow-hidden pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-12"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-100/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Jan Tech in Numbers"
          title="Growing With Every Project"
          description="A simple snapshot of the experience, projects, and support behind Jan Tech."
          accent="green"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              accent={stat.accent}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
