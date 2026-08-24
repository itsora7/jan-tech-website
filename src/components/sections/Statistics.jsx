import Section from "../layout/Section";
import SectionHeading from "../ui/SectionHeading";
import StatCard from "../ui/StatCard";
import { stats } from "../../data/stats";

const Statistics = () => {
  return (
    <Section
      id="statistics"
      background="white"
      className="pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-12"
    >
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
    </Section>
  );
};

export default Statistics;
