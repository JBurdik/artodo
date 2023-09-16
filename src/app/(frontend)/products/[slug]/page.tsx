"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { trpc } from "@/lib/trpc/client";
import { CldImage } from "next-cloudinary";
import { Carousel } from "@/components/carousel/Carousel";
import { AlertTriangle, Ban, Loader2, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import addToCart from "@/functions/addToCart";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cart";

const ProductDetailPage = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const slug = useParams().slug as string;
  const [productImageIdx, setProductImageIdx] = useState<number>(0);

  const { data: product, isLoading } =
    trpc.products.getProductBySlug.useQuery(slug);
  if (product === undefined || product === null || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <Loader2 className="animate-spin" size={"2rem"} />
            <span className="text-lg">Načítám produkt</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="text-orange-400">
              <AlertTriangle className="animate-pulse" size={"2rem"} />
            </span>
            <span className="text-lg">Produkt nenalezen</span>
          </div>
        )}
      </div>
    );
  }

  const productImages = product.img.split(", ");
  return (
    <div className="max-w-7xl mx-auto gap-4 px-10 mt-8 flex flex-col md:grid md:grid-cols-[1fr,3fr]">
      <div className="h-fit">
        <CldImage
          src={productImages[productImageIdx]}
          alt={`Produktové foto ${productImageIdx + 1}`}
          height={350}
          width={350}
          className="rounded-xl border-2 border-primary"
        />
        <div className="flex items-center justify-start mt-4 gap-2">
          {productImages.map((img, idx) => (
            <div className="relative w-20 aspect-square" key={idx}>
              <CldImage
                src={img}
                alt={`${product.name} - ${idx + 1}`}
                fill
                onClick={() => setProductImageIdx(idx)}
                className={cn(
                  idx == productImageIdx ? "border-red-400" : "",
                  "cursor-pointer border-2 rounded-md hover:border-primary object-cover aspect-square"
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl">{product.name}</h3>
        <p>{product.desc}</p>
        <div>{product.price} Kč</div>
        <div className="mt-auto flex flex-col gap-2">
          <span className="text-muted-foreground">
            Skladem: {product.stock} ks
          </span>
          <Button
            className="w-fit flex gap-2"
            onClick={() => addToCart(setCart, product)}
          >
            <ShoppingCart />
            Přidat do košíku
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
