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
      className={`scroll-mt-20 py-8 sm:py-10 lg:py-12 ${backgroundClasses[background]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default Section;
