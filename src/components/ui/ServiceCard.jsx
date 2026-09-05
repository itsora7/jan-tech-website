import { ArrowUpRight } from "lucide-react";
import Card from "./Card";

const accentStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    label: "text-emerald-700",
    arrow: "text-emerald-700",
  },
  navy: {
    icon: "bg-slate-100 text-brand-navy ring-slate-200",
    label: "text-brand-navy",
    arrow: "text-brand-navy",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700 ring-blue-100",
    label: "text-blue-700",
    arrow: "text-blue-700",
  },
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  accent = "green",
  image,
}) => {
  const styles = accentStyles[accent];

  return (
    <Card
      accent={accent}
      hover
      className="group relative h-full overflow-hidden p-0"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent"
          aria-hidden="true"
        />

        <div
          className={`absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ${styles.icon}`}
        >
          <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span
          className={`text-xs font-bold tracking-[0.16em] uppercase ${styles.label}`}
        >
          Jan Tech Service
        </span>

        <h3 className="mt-3 text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-7 text-brand-muted">
          {description}
        </p>

        <a
          href="#contact"
          className={`mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold transition focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4 focus-visible:outline-none ${styles.arrow}`}
        >
          Discuss this service
          <ArrowUpRight
            size={17}
            className="transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </Card>
  );
};

export default ServiceCard;
