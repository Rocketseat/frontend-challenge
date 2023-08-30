"use client"

import BackButton from "@/components/back-button"
import ButtonAddCart from "@/components/button-add-cart"
import { useProduct } from "@/hooks/useProduct"
import { Product } from "@/types/product"
import { formatPrice } from "@/util/format-price"
import { styled } from "styled-components"

const PageProduct = styled.div`
width: 100%;
height: 51.25rem;
display: flex;
align-items: center;
justify-content: center;
background: var(--shapes-light-92-gray, #F0F0F5);
box-shadow: 0px 4px 20px 0px rgba(149, 149, 149, 0.10);
gap: 20px;
p{
    width: 100%;
    
}

`

const BaseTagP = styled.p`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 2rem;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 48px */
`
const TagDiv = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 40rem;
align-items: center;
justify-content: space-between;
padding: 0.9375rem;
min-width: 40rem;
min-height: 36.25rem;

&:last-child{
    margin-top: 3.3125rem;
    justify-content: flex-start;
}
`
const TagImg = styled.img`
width: 40rem;
height: 36.25rem;
flex-shrink: 0;
justify-content: flex-start;
align-items: flex-start;
`
const TagCategory = styled(BaseTagP)`
font-size: 1rem;
font-weight: 400;
`
const TagName = styled(BaseTagP)``
const TagDescription = styled(BaseTagP)`
font-size: 0.875rem;
font-weight: 400;
`
const TagDescriptionTittle = styled(BaseTagP)`
font-size: 1rem;
font-weight: 500;
line-height: 150%; /* 24px */
text-transform: uppercase;
`
const Tagprice = styled(BaseTagP)`
color: var(--shapes-dark-tooltip, #09090A);
font-family: Saira;
font-size: 1.25rem;
font-style: normal;
font-weight: 600;
line-height: 150%;
`
export default function Product({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useProduct(searchParams.id);
    const priceFormat = formatPrice(data?.price_in_cents as number)
  return(
    <PageProduct>
        <TagDiv>
            <BackButton/>
            <TagImg src={data?.image_url}/> 
        </TagDiv>
        <TagDiv>
            <TagCategory>{data?.category}</TagCategory>
            <TagName>{data?.name}</TagName>
            <Tagprice>{priceFormat}</Tagprice>
            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <TagDescriptionTittle>descrição</TagDescriptionTittle>
            <TagDescription>{data?.description}</TagDescription>

            <ButtonAddCart
            id={searchParams.id}
            />
        </TagDiv>
    </PageProduct>
  )
}
