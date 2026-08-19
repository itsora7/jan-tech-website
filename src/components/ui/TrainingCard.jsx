import { ArrowRight } from "lucide-react";
import Card from "./Card";

const accentStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    number: "text-emerald-700",
    link: "text-emerald-700",
  },
  navy: {
    icon: "bg-slate-100 text-brand-navy ring-slate-200",
    number: "text-brand-navy",
    link: "text-brand-navy",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700 ring-blue-100",
    number: "text-blue-700",
    link: "text-blue-700",
  },
};

const TrainingCard = ({
  title,
  description,
  icon: Icon,
  accent = "green",
  number,
  image,
}) => {
  const styles = accentStyles[accent];

  return (
    <Card accent={accent} hover className="group h-full overflow-hidden p-0">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div
          className={`absolute bottom-4 left-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ${styles.icon}`}
        >
          <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
        </div>

        <span
          className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-navy shadow-sm backdrop-blur"
          aria-hidden="true"
        >
          {number}
        </span>
      </div>

      <div className="flex h-full flex-col p-6">
        <h3 className="text-xl font-bold leading-snug text-brand-navy">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-base leading-7 text-brand-muted">
          {description}
        </p>

        <a
          href="#contact"
          className={`mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4 focus-visible:outline-none ${styles.link}`}
        >
          Ask about training
          <ArrowRight
            size={17}
            className="transition duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </Card>
  );
};

export default TrainingCard;
