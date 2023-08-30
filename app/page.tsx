import { Carousel } from "@/components/carousel/Carousel";
import { PageImageSection } from "@/components/PageImageSection";
import { H1 } from "@/components/ui/H1";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { CarouselItem } from "@/components/carousel/Card";
import { PriceCard } from "@/components/carousel/PriceCard";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main className="4xl:container flex-col flex h-full">
      <Section fullWidth className="relative overflow-hidden h-96">
        <video
          src="/hero.mp4"
          autoPlay
          // controls
          loop
          className="absolute inset-0"
        />
        <div className="absolute text-white justify-center items-center inset-0 md:inset-36 z-40 flex flex-col md:items-start md:justify-start">
          <h1 className="text-5xl tracking-widest uppercase font-thin ">
            Gravírování
          </h1>
          <h2>dárkových předmětů z fotografií</h2>
          <Button
            className="mt-8 uppercase tracking-widest font-light"
            variant={"secondary"}
          >
            <ShoppingBag className="mr-2" />
            Produkty
          </Button>
        </div>
      </Section>
      <Section className="container">
        <Carousel title="Best Sellers" slidesCount={4}>
          <PriceCard
            title="Přívěšek na klíče"
            subtitle="Material: Titan"
            img="/catKeychain.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={540}
            currency="Kč"
          />
          <PriceCard
            title="Náramek na ruku"
            subtitle="Material: Stříbro"
            img="/cat_bracelet.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={540}
            currency="Kč"
          />
          <PriceCard
            title="Řetízek na krk"
            subtitle="Material: Chirurgická ocel"
            img="/necklaceDogSilver.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={890}
            currency="Kč"
          />
          <PriceCard
            title="Přívěsek na klíče"
            subtitle="Material: Zlato"
            img="/dogKeychain.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={1040}
            currency="Kč"
          />
        </Carousel>
      </Section>
      <Section title="Vzpomínky">
        <p className="text-center">
          Vzpomínky na vašeho mazlíčka, významný okamžik. Vyrábíme rytinu do
          náramků, řetízků, klíčenek,...
        </p>
      </Section>
      <Section title="O nás" className="container mt-12">
        <PageImageSection title="" text="left" img="/">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quasi accusantium quis, voluptas molestias, sed, illum iusto dolore
            quidem voluptate neque recusandae dolorum ratione laudantium
            explicabo consequuntur perspiciatis id aperiam.
          </p>
        </PageImageSection>
      </Section>
    </main>
  );
}
