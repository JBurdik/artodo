import { ShoppingCartItemType } from '@/models/shoppingCart';
import {atom, selector} from 'recoil'

export const cartState = atom({
    key: 'cartState', // unique ID (with respect to other atoms/selectors)
    default: [] as ShoppingCartItemType[], // default value (aka initial value)
    effects: [
      ({setSelf, onSet}) => {
        let cart = null
        if (typeof window !== 'undefined') {
          cart = localStorage.getItem('cartState')
        }
        if(cart === null) {
          setSelf([])
        } else {
          setSelf(JSON.parse(cart))
        }
        onSet((newValue, _, isReset) => {
          isReset
            ? localStorage.removeItem('cartState')
            : localStorage.setItem('cartState', JSON.stringify(newValue));
        });
      }
    ]
  });

  export const cartCountState = selector({
    key: 'cartCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const cart = get(cartState);
  
      return cart.length;
    },
  });