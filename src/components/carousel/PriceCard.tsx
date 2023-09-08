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
import { nanoid } from "nanoid";
import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  desc: string;
  price: number;
  currency: "Kč" | "$" | "€";
  img: string;
  stock: number;
  style?: Object;
}

export const PriceCard = ({
  title,
  subtitle,
  desc,
  style,
  price,
  currency,
  stock,
  img,
}: Props) => {
  const setShoppingCart = useSetRecoilState(cartState);
  return (
    <Card style={style}>
      <CardHeader>
        <Image
          src={img === "" ? "https://placehold.co/500" : img}
          alt={title}
          width={500}
          height={500}
          className="aspect-square"
        />
        <CardTitle className="pt-4">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
        <div>
          {currency !== "Kč" && currency}
          {" " + price + " "}
          {currency === "Kč" && currency}
        </div>
      </CardHeader>
      <CardContent>
        <p>{desc}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() =>
            setShoppingCart((old) => [
              ...old,
              {
                id: nanoid(),
                img: img,
                name: title,
                price,
                quantity: 1,
                stock: stock,
              } as ShoppingCartItemType,
            ])
          }
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};
