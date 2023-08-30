"use client"
import { styled } from "styled-components";
import BackButton from "./back-button";
import CardCart from "./card-cart-products";
import { useContext } from "react";
import { CartProvider } from "@/context/cart-context";
const Container  = styled.div`

min-height: 100vh;
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 46rem;


`

const TagTitle = styled.h1``

const ContainerProducts = styled.div`
width: 46rem;

`
export default function CartProducts() {
    const {cart} = useContext(CartProvider)
    return(
        <Container>
            <ContainerProducts>
                <BackButton/>
                <TagTitle>Total (3 produtos) R$161,00</TagTitle>
                <p>Total (3 produtos) R$161,00</p>
                <div>
                    {cart.length === 0 ? 
                    <>
                    <CardCart/>
                    </>
                    :
                    <>
                    <h1>carrinho vazio</h1>
                    </>}
                </div>
            </ContainerProducts>
        </Container>
    )
}