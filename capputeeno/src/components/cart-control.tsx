import { useLocalStorage } from "@/hooks/useLocalStorage";
import CartIcon from "./cart-icon";
import { styled } from "styled-components";
import { useEffect, useState } from "react";

const CartCount = styled.span`
    width: 1.0625rem;
    height: 1.0625rem;
    

    background-color: var(--delete-color);
    color: white;

    border-radius: 999px;
    margin-left: -0.625rem;

    padding: 0 0.3125rem;

    font-size: 0.75rem;
    @media (max-width:540px) {
        display: none;
    }
`


interface CartControlProps {}

export default function CartControl(params:CartControlProps) {
    const [total, setTotal] = useState(0)
    const { value } = useLocalStorage('cart-items', [])
    const length = value && value.length;
    
    return(
        <div>
            <CartIcon/>
            {length && <CartCount>{total}</CartCount>}
        </div>
    )
}