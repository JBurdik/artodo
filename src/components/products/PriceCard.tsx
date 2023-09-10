"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useSetRecoilState } from "recoil";
import { cartState } from "@/atoms/cart";
import { ShoppingCartItemType } from "@/models/shoppingCart";
import Image from "next/image";
import { Product } from "@prisma/client";
import addToCart from "@/functions/addToCart";

interface Props {
  product: Product;
  currency: "Kč" | "$" | "€";
  style?: Object;
}

export const PriceCard = ({ style, currency, product }: Props) => {
  const setShoppingCart = useSetRecoilState(cartState);
  return (
    <Card style={style}>
      <CardHeader>
        <Image
          src={product.img === "" ? "https://placehold.co/500" : product.img}
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
      <CardContent>
        <p>{product.desc}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => addToCart(setShoppingCart, product)}>
          Přidat do košíku
        </Button>
      </CardFooter>
    </Card>
  );
};
