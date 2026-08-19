import { ArrowUpRight } from "lucide-react";
import Card from "./Card";

const PortfolioCard = ({
  title,
  category,
  description,
  image,
  technologies,
  isPlaceholder = false,
  liveUrl,
}) => {
  return (
    <Card hover className="group h-full overflow-hidden p-0">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {isPlaceholder && (
          <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-navy shadow-sm backdrop-blur">
            Development Sample
          </span>
        )}
      </div>

      <div className="flex h-full flex-col p-6">
        <p className="text-sm font-bold tracking-[0.14em] text-blue-700 uppercase">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-brand-navy">{title}</h3>

        <p className="mt-4 flex-1 leading-7 text-brand-muted">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-brand-border bg-brand-background px-3 py-1 text-xs font-semibold text-brand-navy"
            >
              {technology}
            </span>
          ))}
        </div>

        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4 focus-visible:outline-none"
          >
            View project
            <ArrowUpRight
              size={17}
              className="transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
        )}
      </div>
    </Card>
  );
};

export default PortfolioCard;
