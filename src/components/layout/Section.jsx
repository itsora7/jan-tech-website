import Container from "./Container";

const backgroundClasses = {
  white: "bg-white",
  light: "bg-brand-background",
  navy: "bg-brand-navy text-white",
};

const Section = ({
  children,
  id,
  background = "white",
  className = "",
  containerClassName = "",
}) => {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${backgroundClasses[background]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
