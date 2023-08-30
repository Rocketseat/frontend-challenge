import { CartItem } from "@/types/cart-types";

export function existingItemCart(arrayCart:CartItem[], id:string): CartItem | undefined {
     const isExistingItemCart = arrayCart.find(item => item.id === id)
     if (isExistingItemCart) {
        return isExistingItemCart
     }
     return undefined
}
