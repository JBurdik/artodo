import { X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "@/atoms/cart";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export const ShoppingCartSideBar = ({ open, setOpen }: Props) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(cartState);
  if (open)
    return (
      <div className="fixed top-0 bottom-0 right-0 z-[999] bg-foreground h-screen w-1/2 text-background">
        <div className="flex flex-row justify-end items-center">
          ShoppingCart
          <Button variant={"icon"} onClick={() => setOpen(false)}>
            <X />
          </Button>
        </div>
        {shoppingCart.map((i, idx) => (
          <p
            key={`shopping_Cart_${idx}`}
            onClick={() => setShoppingCart((old) => old.filter((o) => o !== i))}
          >
            {i}
          </p>
        ))}
      </div>
    );
  return <></>;
};
