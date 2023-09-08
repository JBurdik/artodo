import { Section } from "@/components/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

export default function Products() {
  return (
    <>
      <Section title="Produkty" className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            productName="Řetízek"
            price={300}
            currency={"Kč"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nesciunt!"
            actions={
              <>
                <Button variant={"outline"} className="uppercase">
                  Přidat do košíku
                </Button>
              </>
            }
          />
          <ProductCard
            productName="Náramek"
            price={750}
            currency={"Kč"}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nesciunt!"
            actions={
              <>
                <Button variant={"outline"} className="uppercase">
                  Přidat do košíku
                </Button>
              </>
            }
          />
        </div>
      </Section>
    </>
  );
}
