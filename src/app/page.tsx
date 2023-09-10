import { Carousel } from "@/components/carousel/Carousel";
import { PageImageSection } from "@/components/PageImageSection";
import { H1 } from "@/components/ui/H1";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ShoppingCartItemType } from "@/models/shoppingCart";
import { Product } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Artodo.shop",
  description:
    "Vítejte na našem webu, kde se specializujeme na gravírování do kovu. Nabízíme širokou škálu upomínkových předmětů, které můžeme personalizovat podle vašich přání. Naše nabídka zahrnuje klíčenky, náramky, řetízky a další šperky, které můžeme vybavit vašimi vlastními texty, designy nebo jmény. Každý výrobek je jedinečný a přináší osobní dotek do vašich dárků. Navštivte náš web a objevte naši špičkovou kvalitu, individuální design a luxusní gravírované doplňky pro různé příležitosti. Udělejte si radost nebo obdarujte své blízké originálním a nezapomenutelným upomínkovým předmětem s gravírováním do kovu.",
  creator: "Jirka Burdych",
  keywords: [
    "Gravírování mazlíčků do kovů",
    "Gravírování aut do kovů",
    "Gravírování květin do kovů",
    "Gravírování zvířat do kovů",
    "Gravírování přírodních motivů do kovů",
    "Gravírování osobních fotografií do kovů",
    "Gravírování oblíbených citátů do kovů",
    "Gravírování loga do kovů",
    "Gravírování do kovových šperků",
    "Gravírování do kovových destiček",
    "Gravírování do kovových předmětů",
    "Gravírování do kovových ozdob",
    "Gravírování do kovových zámků",
    "Gravírování do kovových ozdobných prvků",
    "Gravírování do kovových náramků",
    "Gravírování do kovových medailí",
    "Gravírování do kovových přívěsků",
    "Gravírování do kovových tabulek",
    "Gravírování do kovových povrchů",
    "Gravirování,",
    "Vzpomínkové předměty",
    "Originální dárky",
    "Psi",
    "Kočky",
    "Auta",
    "Artodo",
    "eshop",
    "náramky",
    "přívěsky",
    "řetízky",
    "gravírování do kovu",
    "upomínkové předměty",
    "klíčenky s gravírováním",
    "náramky s gravírováním",
    "řetízky s gravírováním",
    "personalizované dárky",
    "gravírované šperky",
    "designové gravírování",
    "unikátní gravírované produkty",
    "dárky pro speciální příležitosti",
    "vlastní text gravírování",
    "originální upomínkové předměty",
    "luxusní gravírované doplňky",
    "dárky pro milované osoby",
    "gravírování jmen",
    "individuální design gravírování",
  ],
};

export default async function Home() {
  // const result = await fetch(`${process.env.API_URL!}/products`, {
  //   method: "GET",
  //   cache: "no-cache",
  // });
  const products = await prisma.product.findMany();
  // const products: Product[] = await result.json();
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
        <div className="absolute z-30 fill-white right-10 bottom-10 opacity-80 hidden md:block">
          <Image src={"/logo_white.svg"} width={400} height={200} alt="logo" />
        </div>
        <div className="absolute text-white justify-center items-center inset-0 md:inset-36 z-40 flex flex-col md:items-start md:justify-start">
          <h1 className="text-5xl tracking-widest uppercase font-thin ">
            Gravírování
          </h1>
          <h2>dárkových předmětů z fotografií</h2>
          <Link
            href={"/products"}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-8 -mb-1 tracking-widest flex flex-row items-center justify-center"
            )}
          >
            <ShoppingBag className="mr-2" />
            <span>Produkty</span>
          </Link>
        </div>
      </Section>
      <Section className="container">
        <Carousel title="Best Sellers" slidesCount={2}>
          {products.map((product) => (
            <PriceCard
              key={product.id}
              title={product.name}
              subtitle={"lorem ipsum"}
              img={product.img}
              desc={product.desc}
              price={product.price}
              stock={product.stock}
              currency="Kč"
            />
          ))}
          {/* <PriceCard
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
          /> */}
        </Carousel>
      </Section>
      <Section title="Vzpomínky">
        <p className="text-center">
          Vzpomínky na vašeho mazlíčka, významný okamžik. Vyrábíme rytinu do
          náramků, řetízků, klíčenek,...
        </p>
      </Section>
      <Section title="O nás" className="container mt-12">
        <PageImageSection title="" text="left" img="/img/hero2.png">
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
