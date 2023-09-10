import { Section } from "@/components/Section";
import { PriceCard } from "@/components/products/PriceCard";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function Products() {
  const products = await prisma.product.findMany();
  return (
    <>
      <Section title="Produkty" className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <PriceCard product={p} key={p.id} currency={"Kč"} />
          ))}
        </div>
      </Section>
    </>
  );
}
