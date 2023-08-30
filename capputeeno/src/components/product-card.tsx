import { formatPrice } from "@/util/format-price"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"
import CartControl from "./cart-control"

const Card = styled.div``
const TagTitle = styled.h3`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 1rem;
font-style: normal;
font-weight: 300;
line-height: 150%;
cursor: pointer;
`
const TagPrice = styled.span`
color: var(--shapes-dark-tooltip, #09090A);
font-family: Saira;
font-size: 0.875rem;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 21px */
`
const Tags = styled.div`
    width: 16rem;
    height: 4.875rem;
    flex-shrink: 0;
    border-radius: 0px 0px 4px 4px;
    background: rgba(255, 255, 255, 0.40);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 8px;

`
const DividingBar = styled.div`
    width: 14.25rem;
    height: 1px;
    flex-shrink: 0;
    background-color: black;
    align-self: center;
`
const TagImage = styled.img`
    width: 16rem;
    height: 18.75rem;
    flex-shrink: 0;
    cursor: pointer;
`

interface ProductCardProps {
    id:string
    img:string
    title:string
    price:number
}
export default function ProductCard({id,img,price,title}:ProductCardProps) {
    const priceFormat = formatPrice(price)
    const router = useRouter();

     const handleNavigate = () => {
        router.push("/product?id=" + id);
    }

    return(
        <Card
        onClick={handleNavigate}
        >
            <TagImage src={img}/>
            <Tags>
                <TagTitle>{title}</TagTitle>
                <DividingBar></DividingBar>
                <TagPrice>{priceFormat}</TagPrice>
            </Tags>
        </Card>
    )
}