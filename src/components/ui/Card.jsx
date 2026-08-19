const accentClasses = {
  none: "",
  green: "border-t-4 border-t-emerald-700",
  navy: "border-t-4 border-t-brand-navy",
  blue: "border-t-4 border-t-blue-700",
  red: "border-t-4 border-t-brand-red",
};

const Card = ({ children, accent = "none", hover = false, className = "" }) => {
  const hoverClasses = hover
    ? "transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={`rounded-2xl border border-brand-border bg-white p-6 shadow-sm ${accentClasses[accent]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
