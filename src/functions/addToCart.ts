import { ShoppingCartItemType } from "@/models/shoppingCart";
import { Product } from "@prisma/client";
import { SetterOrUpdater } from "recoil";


export default function addToCart(setCart: SetterOrUpdater<ShoppingCartItemType[]>, product: Product) {

    setCart((old) => {
        const productExist = old.findIndex(p=> p.id === product.id)
        if(productExist !== -1) {
            const newCart = old.map((p) => {
                return product.id === p.id ? { ...p, quantity: p.quantity + 1 } : p;
              });
            return [
                ...newCart
            ]
        } else {
            return [
            ...old,
            {
              id: product.id,
              img: product.img,
              name: product.name,
              price: product.price,
              quantity: 1,
              stock: product.stock,
            } as ShoppingCartItemType,
          ]
        }
    })
}