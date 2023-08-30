import { CartProvider } from "@/context/cart-context";
import { useContext } from "react";

export function useCart() {
    return useContext(CartProvider)
}