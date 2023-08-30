"use client"
import { useProducts } from "@/hooks/useProducts"
import { styled } from "styled-components"
import TrashIcon from "./trash-icon"
interface CardCartProps {
    id:string,
    image_url:string,
    name:string,
    quantity:number,
    price_in_cents:number,
    description:string
}
const ContainerCard = styled.div`
    width: 63.25rem;
    height: 16rem;
    border-radius: 8px;
    background: var(--shapes-01, #FFF);
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

`

const TagImg = styled.img`
width: 17.25rem;
height: 16rem;
flex-shrink: 0;
`
const TagDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const TagH3 = styled.h3`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 30px */
`

const TagDescription = styled.p`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
flex-shrink: 0;
width: 100%;
`
const TagHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`
const TagFooterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`

export default function CardCart() {
    return(
        <ContainerCard>
            <TagImg src="" alt="" />
            <TagDiv>
                <TagHeaderContainer>
                    <TagH3>Caneca de cerâmica rústica</TagH3>
                    <TrashIcon/>
                </TagHeaderContainer>
                <TagDescription>
                    Aqui vem um texto descritivo do produto, esta caixa de texto servirá apenas de exemplo para que simule algum texto que venha a ser inserido nesse campo, descrevendo tal produto.
                </TagDescription>
                <TagFooterContainer>
                    <button>x</button>
                    <p>R$ 89,00</p>
                </TagFooterContainer>
            </TagDiv>
        </ContainerCard>
    )
}