import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/atoms/cart";
import { ShoppingCartItem } from "../shoppingCart/ShoppingCartItem";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const ShoppingCartSideBar = ({ open, setOpen }: Props) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(cartState);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    let total: number = 0;
    shoppingCart.every((sc) => (total += sc.price * sc.quantity));
    setTotalPrice(total);
  }, [shoppingCart]);
  if (open)
    return (
      <div className="fixed flex flex-col top-0 bottom-0 right-0 z-[999] bg-foreground h-screen w-full md:w-1/2 lg:w-1/3 text-background">
        <div className="flex flex-row justify-end items-center">
          ShoppingCart
          <Button variant={"icon"} onClick={() => setOpen(false)}>
            <X />
          </Button>
        </div>
        <div className="flex flex-col gap-4 overflow-y-auto">
          {shoppingCart.map((i, idx) => (
            <ShoppingCartItem key={`cartItem_${idx}`} {...i} />
          ))}
        </div>
        <div className="mt-auto p-6 flex flex-col">
          <span className="self-end py-3">Celkem: {totalPrice} Kč</span>
          <Button disabled={shoppingCart.length === 0} variant={"secondary"}>
            Přejít k pokladně
          </Button>
        </div>
      </div>
    );
  return <></>;
};
