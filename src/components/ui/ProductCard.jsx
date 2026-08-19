import { ArrowUpRight } from "lucide-react";
import Card from "./Card";

const accentClasses = {
  green: {
    badge: "bg-emerald-50 text-emerald-700",
    link: "text-emerald-700",
  },

  navy: {
    badge: "bg-slate-100 text-brand-navy",
    link: "text-brand-navy",
  },

  blue: {
    badge: "bg-blue-50 text-blue-700",
    link: "text-blue-700",
  },
};

const ProductCard = ({
  name,
  category,
  description,
  image,
  accent = "green",
  status,
  technologies = [],
}) => {
  const colors = accentClasses[accent] || accentClasses.green;

  return (
    <Card accent={accent} hover className="group h-full overflow-hidden p-0">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} product`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {status && (
          <span
            className={`absolute top-5 left-5 rounded-full px-4 py-2 text-xs font-bold ${colors.badge}`}
          >
            {status}
          </span>
        )}
      </div>

      <div className="p-7">
        <p
          className={`text-sm font-bold tracking-[0.15em] uppercase ${colors.link}`}
        >
          {category}
        </p>

        <h3 className="mt-3 text-3xl font-bold text-brand-navy">{name}</h3>

        <p className="mt-4 leading-7 text-brand-muted">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-brand-border bg-brand-background px-3 py-1.5 text-xs font-semibold text-brand-navy"
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${colors.link}`}
        >
          Learn more
          <ArrowUpRight
            size={17}
            aria-hidden="true"
            className="transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </Card>
  );
};

export default ProductCard;
