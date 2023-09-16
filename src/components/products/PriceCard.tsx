"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "../ui/button";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/atoms/cart";
import { ShoppingCartItemType } from "@/models/shoppingCart";
import Image from "next/image";
import { Product } from "@prisma/client";
import addToCart from "@/functions/addToCart";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface Props {
  product: Product;
  currency: "Kč" | "$" | "€";
  style?: Object;
}

export const PriceCard = ({ style, currency, product }: Props) => {
  const setShoppingCart = useSetRecoilState(cartState);
  return (
    <Card style={style} className="h-full flex flex-col">
      <CardHeader>
        <CldImage
          src={product.img.split(", ")[0]}
          alt={product.name}
          width={500}
          height={500}
          className="aspect-square"
        />
        <CardTitle className="pt-4">{product.name}</CardTitle>
        <CardDescription>{""}</CardDescription>
        <div>
          {currency !== "Kč" && currency}
          {" " + product.price + " "}
          {currency === "Kč" && currency}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p>{product.desc}</p>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-between gap-3">
        <Button onClick={() => addToCart(setShoppingCart, product)}>
          Přidat do košíku
        </Button>
        <Link
          className={buttonVariants({ variant: "secondary" })}
          href={`/products/${product.slug}`}
        >
          Detail
        </Link>
      </CardFooter>
    </Card>
  );
};
