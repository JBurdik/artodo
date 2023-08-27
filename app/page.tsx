import { PageImageSection } from "@/components/PageImageSection";
import { H1 } from "@/components/ui/H1";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="4xl:container flex-col flex h-full">
      <section className="w-full relative overflow-hidden h-96">
        <video
          src="/hero.mp4"
          autoPlay
          // controls
          loop
          className="absolute inset-0"
        />
        <div className="absolute text-white inset-36 z-40 flex flex-col items-start justify-start">
          <h1 className="text-5xl tracking-widest uppercase font-thin ">
            Gravírování
          </h1>
          <h2>...do kovu, dřeva, plastu</h2>
          <Button
            className="mt-8 uppercase tracking-widest font-light"
            variant={"secondary"}
          >
            <ShoppingBag className="mr-2" />
            Produkty
          </Button>
        </div>
      </section>
      <section className="container">
        <H1>Co umíme?</H1>
        <PageImageSection
          title="Plastove stojanky"
          text="right"
          img="/plasticStand.png"
        >
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            deleniti architecto dolor ipsum dolorem voluptates praesentium illum
            nesciunt consequuntur eum alias esse earum perferendis fugiat
            deserunt sunt cumque. Ipsum blanditiis nesciunt quam autem
            assumenda, officiis fuga. Quae blanditiis veniam recusandae.
            Molestiae ex possimus et? Blanditiis accusantium temporibus sint
            perferendis hic.
          </p>
        </PageImageSection>
        <PageImageSection
          title="Gravírování do kovu"
          text="left"
          img="/metalWristbang.png"
        >
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            deleniti architecto dolor ipsum dolorem voluptates praesentium illum
            nesciunt consequuntur eum alias esse earum perferendis fugiat
            deserunt sunt cumque. Ipsum blanditiis nesciunt quam autem
            assumenda, officiis fuga. Quae blanditiis veniam recusandae.
            Molestiae ex possimus et? Blanditiis accusantium temporibus sint
            perferendis hic.
          </p>
        </PageImageSection>
        <PageImageSection title="Gravír dřevo" text="right" img="/wooden.png">
          <div>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
              deleniti architecto dolor ipsum dolorem voluptates praesentium
              illum nesciunt consequuntur eum alias esse earum perferendis
              fugiat deserunt sunt cumque. Ipsum blanditiis nesciunt quam autem
              assumenda, officiis fuga. Quae blanditiis veniam recusandae.
              Molestiae ex possimus et? Blanditiis accusantium temporibus sint
              perferendis hic.
            </p>
            <Button className="mt-5">Více</Button>
          </div>
        </PageImageSection>
      </section>
      <section className="container mt-12">
        <H1>O nás</H1>
        <PageImageSection title="" text="left" img="/">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quasi accusantium quis, voluptas molestias, sed, illum iusto dolore
            quidem voluptate neque recusandae dolorum ratione laudantium
            explicabo consequuntur perspiciatis id aperiam.
          </p>
        </PageImageSection>
      </section>
    </main>
  );
}
