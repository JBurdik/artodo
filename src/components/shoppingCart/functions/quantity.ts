import { cartState } from "@/atoms/cart";
import { ShoppingCartItemType } from "@/models/shoppingCart";
import { SetterOrUpdater, useSetRecoilState } from "recoil";

export const updateQuantity = (
  id: string,
  operation: "decrease" | "increase",
  cartItems: ShoppingCartItemType[],
  setCartItems: SetterOrUpdater<ShoppingCartItemType[]>
) => {
  const cartItem = cartItems?.find((ci) => ci.id === id);
  const cartItemIdx = cartItems.findIndex((ci) => ci.id === id);
  if (cartItem === undefined) return;

  let newQuantity = cartItem.quantity;

  if (operation === "increase") {
    newQuantity =
      cartItem.quantity < cartItem.stock
        ? cartItem.quantity + 1
        : cartItem.quantity;
  } else if (operation === "decrease") {
    newQuantity =
      cartItem.quantity > 0 ? cartItem.quantity - 1 : cartItem.quantity;
    if (newQuantity === 0) {
      setCartItems((old) => [...old.filter((o) => o.id !== cartItem.id)]);
      return;
    }
  }
  const updatedCart = cartItems.map((ci) => {
    return id === ci.id ? { ...ci, quantity: newQuantity } : ci;
  });

  setCartItems(updatedCart);
};
