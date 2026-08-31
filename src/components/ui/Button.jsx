const variantClasses = {
  primary:
    "bg-brand-red text-white hover:bg-brand-red-dark focus-visible:ring-brand-red/30",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy-light focus-visible:ring-brand-navy/30",
  outline:
    "border border-brand-navy bg-transparent text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:ring-brand-navy/30",
};

const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-4";

  const interactionClasses = disabled
    ? "cursor-not-allowed opacity-60"
    : "hover:-translate-y-0.5";

  const buttonClasses = `${baseClasses} ${
    variantClasses[variant]
  } ${interactionClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
