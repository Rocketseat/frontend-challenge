import { useProducts } from "@/hooks/useProducts"
import ProductCard from "./product-card"
import { styled } from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    min-height: 100vh;
`

export default function ProductList() {
    const {data} = useProducts()
    return(
        <Container>
            {data?.map(({id,image_url,price_in_cents,name}) => 
                <ProductCard
                key={id}
                id={id}
                img={image_url}
                price={price_in_cents}
                title={name}/>
            )}
        </Container>
    )
}