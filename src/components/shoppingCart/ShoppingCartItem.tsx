import { ShoppingCartItemType } from "@/models/shoppingCart";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartState } from "@/atoms/cart";
import { updateQuantity } from "./functions/quantity";
import { useTheme } from "next-themes";
import Image from "next/image";
interface Props extends ShoppingCartItemType {
  key: string;
}

export const ShoppingCartItem = ({ name, price, quantity, key, id }: Props) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const thisItem = cartItems.find((i) => i.id === id);
  return (
    <Card className="bg-transparent border-secondary mx-7 text-white">
      <CardContent className="py-3 flex flex-row gap-7">
        <div>
          <Image
            src={
              thisItem
                ? thisItem.img === ""
                  ? "https://placehold.co/500"
                  : thisItem.img
                : "https://placehold.co/500"
            }
            alt="image of cart Item"
            width={70}
            height={70}
          />
        </div>
        <div className="flex-grow flex flex-row">
          <h5>{name}</h5>
          <div className="ml-auto self-center">
            <h6 className="">{`${price * quantity} Kč`}</h6>
            <div className="flex flex-row items-center justify-between w-fit gap-3">
              <Button
                onClick={() =>
                  updateQuantity("increase", thisItem, setCartItems)
                }
                variant={"icon"}
                className="bg-secondary text-primary p-1 h-auto"
              >
                <Plus size={15} />
              </Button>
              {quantity}
              <Button
                onClick={() =>
                  updateQuantity("decrease", thisItem, setCartItems)
                }
                variant={"icon"}
                className="bg-secondary text-primary p-1 h-auto"
              >
                <Minus size={15} />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
