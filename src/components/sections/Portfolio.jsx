import Section from "../layout/Section";
import PortfolioCard from "../ui/PortfolioCard";
import SectionHeading from "../ui/SectionHeading";
import { portfolioProjects } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <Section id="portfolio" background="light">
      <SectionHeading
        eyebrow="Our Work"
        title="Web & Mobile Projects"
        description="Explore selected web and mobile application work designed with a focus on usability, performance, and modern digital experiences."
        accent="blue"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {portfolioProjects.map((project) => (
          <PortfolioCard
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
