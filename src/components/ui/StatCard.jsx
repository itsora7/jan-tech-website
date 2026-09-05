import { useCountUp } from "../../hooks/useCountUp";

const accentStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    value: "text-emerald-700",
    glow: "from-emerald-400/25",
  },
  navy: {
    icon: "bg-slate-100 text-brand-navy ring-slate-200",
    value: "text-brand-navy",
    glow: "from-slate-400/25",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700 ring-blue-100",
    value: "text-blue-700",
    glow: "from-blue-400/25",
  },
};

const StatCard = ({ value, label, icon: Icon, accent = "green" }) => {
  const styles = accentStyles[accent];
  const { display, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="group relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-brand-border bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-gradient-to-b ${styles.glow} to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-80`}
        aria-hidden="true"
      />

      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${styles.icon}`}
      >
        <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <p className={`relative mt-5 text-4xl font-bold sm:text-5xl ${styles.value}`}>
        {display}
      </p>

      <p className="relative mt-2 text-sm font-medium text-brand-muted sm:text-base">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
