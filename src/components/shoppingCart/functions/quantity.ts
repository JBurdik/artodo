import { cartState } from "@/atoms/cart";
import { ShoppingCartItemType } from "@/models/shoppingCart";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

export const updateQuantity = (operation: "decrease" | "increase", cartItem: ShoppingCartItemType | undefined, setCartItems: SetterOrUpdater<ShoppingCartItemType[]>) => {

    if (cartItem === undefined) return;

    let newQuantity = cartItem.quantity;

    if (operation === "increase") {
      newQuantity = cartItem.quantity < cartItem.stock ? cartItem.quantity + 1 : cartItem.quantity;
    } else if (operation === "decrease") {
      newQuantity = cartItem.quantity > 0 ? cartItem.quantity - 1 : cartItem.quantity;
      if (newQuantity === 0) {
        setCartItems((old) => [...old.filter((o) => o.id !== cartItem.id)]);
        return;
      }
    }

    setCartItems((old) => [
      ...old.filter((o) => o.id !== cartItem.id),
      {
        ...cartItem,
        quantity: newQuantity,
      },
    ]);
  };