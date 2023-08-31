"use client"

import { useProduct } from "@/hooks/useProduct"
import { formatPrice } from "@/utils/format-price"
import { ArrowBendUpLeft, Bag } from "@phosphor-icons/react"
import { styled } from "styled-components"

const ContainerPage = styled.div`
display: flex;
flex-direction: column;
padding: 2.5rem 10.625rem;
gap: 15px;
`

const ContainerInfos = styled.div`
display: flex;
gap: 20px;
`

const TagDiv = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`

const ButtonBack = styled.button`
border: none;
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
`

const TagCategory = styled.span`
  color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`
const TagName = styled.span`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 32px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 48px */
`

const TagPrice = styled.p`
color: var(--shapes-dark-tooltip, #09090A);
font-family: Saira;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 30px */
`

const ButtonAddCart = styled.button`
width: 28rem;
height: 2.75rem;
flex-shrink: 0;
border-radius: 4px;
background: var(--brand-blue, #115D8C);
mix-blend-mode: multiply;
border: none;
margin-top: auto;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
span{
  color: var(--shapes-light-background, #F5F5FA);
text-align: center;
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 24px */
text-transform: uppercase;
}
svg{
  color: var(--shapes-light-background, #F5F5FA);
}
`


export default function Product({ searchParams }: { searchParams: { id: string }}) {
  const {data} = useProduct(searchParams.id)
  if(!data){
    return (<h1>produto nao encontrado</h1>)
  }
  
  return (
  <ContainerPage>
    <div>
      <ButtonBack>
        <ArrowBendUpLeft size={32} />
          <span>voltar</span>
      </ButtonBack>
    </div>
    <ContainerInfos>
      <div>
        <img src={data?.image_url} alt="" />
      </div>
      <TagDiv>
        <TagCategory>{data?.category}</TagCategory>
        <TagName>{data?.name}</TagName>
        <TagPrice>{formatPrice(data.price_in_cents)}</TagPrice>
        <h4>DESCRIÇÃO</h4>
        <p>{data?.description}</p>
        <ButtonAddCart>
          <Bag size={28} />
          <span>adicionar carrinho</span>
        </ButtonAddCart>
      </TagDiv>
    </ContainerInfos>
  </ContainerPage>
  )
}