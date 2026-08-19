const alignmentClasses = {
  left: "text-left",
  center: "text-center",
};

const maxWidthClasses = {
  left: "max-w-3xl",
  center: "mx-auto max-w-3xl",
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  alignment = "center",
  accent = "green",
  className = "",
}) => {
  const accentClasses = {
    green: "text-emerald-700",
    blue: "text-blue-700",
    red: "text-brand-red",
  };

  return (
    <div
      className={`${alignmentClasses[alignment]} ${maxWidthClasses[alignment]} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-sm font-bold tracking-[0.18em] uppercase ${accentClasses[accent]}`}
        >
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl leading-tight font-bold text-brand-navy sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-brand-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
