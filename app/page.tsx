import { Carousel } from "@/components/carousel/Carousel";
import { PageImageSection } from "@/components/PageImageSection";
import { H1 } from "@/components/ui/H1";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { CarouselItem } from "@/components/carousel/Card";
import { PriceCard } from "@/components/carousel/PriceCard";
import { Section } from "@/components/Section";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="4xl:container flex-col flex h-full">
      <Section fullWidth className="relative overflow-hidden h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src={"/img/hero1.png"}
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
        <div className="tint absolute inset-0 z-30" />
        <div className="absolute z-30 fill-white right-10 bottom-10 opacity-80">
          <Image src={"/logo_white.svg"} width={400} height={200} alt="logo" />
        </div>
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
        <Carousel title="Best Sellers" slidesCount={2}>
          <PriceCard
            title="Přívěšek na klíče"
            subtitle="Material: Titan"
            img="/img/catKeychain.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={540}
            currency="Kč"
          />
          <PriceCard
            title="Náramek na ruku"
            subtitle="Material: Stříbro"
            img="/img/cat_bracelet.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={540}
            currency="Kč"
          />
          <PriceCard
            title="Řetízek na krk"
            subtitle="Material: Chirurgická ocel"
            img="/img/necklaceDogSilver.png"
            desc="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, totam."
            price={890}
            currency="Kč"
          />
          <PriceCard
            title="Přívěsek na klíče"
            subtitle="Material: Zlato"
            img="/img/dogKeychain.png"
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
      <Section>
        <Carousel title="Reference">
          <Card>
            <CardHeader>
              <CardTitle>Honza</CardTitle>
              <CardDescription>Milovník psů</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, fugiat animi at ab alias culpa facilis atque provident
              repellendus reiciendis.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Klára</CardTitle>
              <CardDescription>Milovnice květin</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, fugiat animi at ab alias culpa facilis atque provident
              repellendus reiciendis.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Robert</CardTitle>
              <CardDescription>Milovník aut</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, fugiat animi at ab alias culpa facilis atque provident
              repellendus reiciendis.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lenka</CardTitle>
              <CardDescription>Obdivovatelka Motýlů</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, fugiat animi at ab alias culpa facilis atque provident
              repellendus reiciendis.
            </CardContent>
          </Card>
        </Carousel>
      </Section>
    </main>
  );
}
