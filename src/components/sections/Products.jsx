import Section from "../layout/Section";
import ProductCard from "../ui/ProductCard";
import SectionHeading from "../ui/SectionHeading";
import { products } from "../../data/products";

const Products = () => {
  return (
    <Section id="products" background="white">
      <SectionHeading
        eyebrow="Our Products"
        title="Technology Built by Jan Tech"
        description="Explore digital products being developed by Jan Tech to connect people, solve practical problems, and create useful digital experiences."
        accent="green"
      />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            description={product.description}
            image={product.image}
            accent={product.accent}
            status={product.status}
            technologies={product.technologies}
            website={product.website}
          />
        ))}
      </div>
    </Section>
  );
};

export default Products;
