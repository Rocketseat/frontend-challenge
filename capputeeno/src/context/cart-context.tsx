"use client"
import { useProducts } from "@/hooks/useProducts";
import { CartContext, CartContextProps, CartItem } from "@/types/cart-types";
import { createContext, useState } from "react";





export const CartProvider = createContext({
 cart:[],
 setCart: (value: CartItem[]) => {},
} as CartContext);


export function CartContextProvider({children}:CartContextProps) {
    const [cart, setCart] = useState<CartItem[]>([])
    const {data} = useProducts()

    

   

  return (
    <CartProvider.Provider
      value={{
        cart,
        setCart
      }}
    >
    {children}
    </CartProvider.Provider>
  );
}
