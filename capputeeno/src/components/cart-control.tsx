import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import { styled } from "styled-components";
import { useEffect } from "react";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    

    background-color: var(--delete-color);
    color: white;

    border-radius: 999px;
    margin-left: -10px;

    padding: 0 5px;

    font-size: 12px;
`


interface CartControlProps {}

export default function CartControl(params:CartControlProps) {
    const {value, updateLocalStorage} = useLocalStorage('cart-itens')
    const length = value && value.length;
   
    return(
        <div>
            <CartIcon/>
            {length && <CartCount>{length}</CartCount>}
        </div>
    )
}