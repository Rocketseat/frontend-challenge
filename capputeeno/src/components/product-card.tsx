import { useProducts } from "@/hooks/useProducts"
import { formatPrice } from "@/utils/format-price"
import { styled } from "styled-components"

const TagImage = styled.img`
width: 16rem;
height: 18.75rem;
flex-shrink: 0;
`
const ContainerDiv = styled.div`
padding: 4px 8px;
display: flex;
flex-direction: column;


`
const ContainerCard = styled.li`
background-color: ${({theme})=>theme.colors.shapes};

`
const TagName = styled.h3`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 24px */
width: 232px;
`
const TagPrice = styled.span`
color: var(--shapes-dark-tooltip, #09090A);
font-family: Saira;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
`
interface ProductCardProps{
    id: string,
    name: string,
    price_in_cents: number,
    image_url: string,
}
export default function ProductCard({id,image_url,name,price_in_cents}:ProductCardProps) {
    return(
        <ContainerCard>
            <TagImage src={image_url}/>
            <ContainerDiv>
            <TagName>{name}</TagName>
            <TagPrice>{formatPrice(price_in_cents)}</TagPrice>
            </ContainerDiv>
        </ContainerCard>
    )
}