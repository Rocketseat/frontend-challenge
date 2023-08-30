import { styled } from "styled-components"
import TrashIcon from "./trash-icon"
import { formatPrice } from "@/util/format-price"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { ProductInCart } from "@/types/product"

const ContainerItensCard = styled.div`
width: 46rem;
height: 13.1875rem;
flex-shrink: 0;
border-radius: 8px;
background: var(--shapes-01, #FFF);
display: flex;
gap: 20px;
`
const TagDivContainer = styled.div`
display: flex;
width: 100%;
align-items: flex-start;
justify-content: space-between;
padding: 0.5rem;
flex-direction: column;
gap: 1.5625rem;
`
const TagDivContainerHeader = styled.div`
justify-content: space-between;
display: flex;
width: 100%;
`
const TagImg = styled.img`
width: 14rem;
height: 13.1875rem;
flex-shrink: 0;
`
const TagNameItem = styled.h2`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 20px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 30px */
width: 18.0625rem;
`
const TagDescription = styled.p`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */

`
const TagContainerDivFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`
const ValueTotal = styled.p`
color: var(--shapes-dark-tooltip, #09090A);
text-align: right;
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 24px */
`

interface ProducartProps {
    id:string,
    category:string,
    image_url:string,
    name:string,
    description:string,
    price_in_cents:number,
    quantity:number
}
export default function ProductCardCart(props:ProducartProps) {
    const { value,updateLocalStorage} = useLocalStorage<ProductInCart[]>("cart-items", [])
    const handleRemoveItem = ()=>{
        const newCart = value.filter(item=>item.id !== props.id)
        updateLocalStorage(newCart)
        window.location.reload();
    }

    return(
        <ContainerItensCard>
            <TagImg src={props.image_url} alt="" />
            <TagDivContainer>
                <TagDivContainerHeader>
                    <TagNameItem>{props.name}</TagNameItem>
                    <button
                    onClick={handleRemoveItem}
                    >
                        <TrashIcon/>
                    </button>
                </TagDivContainerHeader>
                <TagDescription>
                    {props.description}
                </TagDescription>
                <TagContainerDivFooter>
                    <select name="select">
                        <option value="1" selected>1</option>
                        <option value="valor2" >2</option>
                        <option value="valor3">3</option>
                    </select>
                    <ValueTotal>{formatPrice(props.price_in_cents)}</ValueTotal>
                </TagContainerDivFooter>
            </TagDivContainer>
        </ContainerItensCard>

    )
}