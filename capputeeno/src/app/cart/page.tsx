"use client"
import AboutOder from "@/components/about-oder";
import BackButton from "@/components/back-button";
import ButtonConfirmOderJSX from "@/components/button-confirm-oder";
import ProductCardCart from "@/components/card-cart";
import CartProducts from "@/components/cart-products";
import IntroCart from "@/components/intro-cart";
import TableAbout from "@/components/table-about";
import { useCart } from "@/hooks/useCart";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { styled } from "styled-components";


const ContainerCart = styled.div`
display: flex;
background: var(--shapes-light-92-gray, #F0F0F5);
box-shadow: 0px 4px 20px 0px rgba(149, 149, 149, 0.10);
justify-content: center;
align-items: flex-start;
min-height: 100vh;
padding: 7.5rem 15rem;
gap: 2.5rem;

`

const ContainerAboutOrder = styled.div`
border-radius: 8px;
background: var(--shapes-01, #FFF);
width: 22rem;
height: 43.75rem;
flex-shrink: 0;
padding: 1rem;

`
const ContainerItens = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`



export default function Cart() {
    const { value} = useLocalStorage<ProductInCart[]>("cart-items", [])
    return(
        <ContainerCart>
            <ContainerItens>
                <IntroCart/>
                {
                    value.map(({id,category,image_url,name,description,price_in_cents,quantity})=>(
                        <ProductCardCart
                        key={id}
                        category={category}
                        description={description}
                        id={id}
                        image_url={image_url}
                        name={name}
                        price_in_cents={price_in_cents}
                        quantity={quantity}

                        />
                    ))
                }
            </ContainerItens>
            <ContainerAboutOrder>
                <TableAbout/>
               <ButtonConfirmOderJSX/>
            </ContainerAboutOrder>
        </ContainerCart>
    )
}