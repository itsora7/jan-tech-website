const accentStyles = {
  green: {
    icon: "bg-emerald-50 text-emerald-700",
    value: "text-emerald-700",
  },
  navy: {
    icon: "bg-slate-100 text-brand-navy",
    value: "text-brand-navy",
  },
  blue: {
    icon: "bg-blue-50 text-blue-700",
    value: "text-blue-700",
  },
};

const StatCard = ({ value, label, icon: Icon, accent = "green" }) => {
  const styles = accentStyles[accent];

  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-brand-border bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}
      >
        <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <p className={`mt-5 text-4xl font-bold ${styles.value}`}>{value}</p>

      <p className="mt-2 text-sm font-medium text-brand-muted sm:text-base">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
