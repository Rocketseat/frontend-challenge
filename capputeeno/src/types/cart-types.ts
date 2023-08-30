import { ReactNode } from "react";
import { Product } from "./product";


export interface CartItem extends Product {
  quantity: number;
}


export interface CartContext {
  cart:CartItem[]
  setCart: (value: CartItem[]) => void,

}

export interface CartContextProps {
  children: ReactNode;
}