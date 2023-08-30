"use client"
import { styled } from "styled-components";
import BagIcon from "./bag-icon";
import { ButtonHTMLAttributes, useContext } from "react";
import { useCart } from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";
import { ProductInCart } from "@/types/product";
import { useLocalStorage } from "@/hooks/useLocalStorage";



const Button = styled.button`
width: 28rem;
height: 2.75rem;
flex-shrink: 0;
border-radius: 4px;
background: var(--brand-blue, #115D8C);
mix-blend-mode: multiply;
cursor: pointer;
border: none;
display: flex;
align-items: center;
justify-content: center;
gap: 0.9375rem;
margin-top: auto;
span{
    color: var(--shapes-light-background, #F5F5FA);
    text-align: center;
    font-family: Saira;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: uppercase;
}

&:disabled{
    opacity: 0.7;
}

`

interface ButtonAddCartProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    id:string
}

export default function ButtonAddCart({id,...props}:ButtonAddCartProps) {

    const { cart,setCart} = useCart()
    const {data} = useProducts()
    const isDisable = cart.find(p=>p.id === id)?true:false
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])


    const handleAddCart = ()=>{
    if(!data){
        return
    }
     const existingCart = cart.find(p=>p.id === id)
     if(!existingCart){
        const prod = data.find(p=>p.id === id)
        if(prod){
            const prodWithQuant:ProductInCart = {
            ...prod,
            quantity:1,
            description:prod.description,
            price_in_cents:prod.price_in_cents
            
        }
        setCart([...cart,prodWithQuant])
        updateLocalStorage([...cart,prodWithQuant])
        }
     }
     
     }

    return( 
    <Button
    {...props}
    onClick={handleAddCart}
    disabled={isDisable}
    >
        <BagIcon/>
        <span>Adicionar ao carrinho</span>
    </Button>
)
}