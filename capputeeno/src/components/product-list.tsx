import { useProducts } from '@/hooks/useProducts'
import ProductCard from './product-card'
import { styled } from 'styled-components'

export default function ProductList() {
  const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 50px 80px;
    justify-content: center;
    list-style: none;
    margin-bottom: 2.5rem;
    cursor: pointer;
    min-height: 18.75rem;
  `
  const { response } = useProducts()
  return (
    <Container>
      {response?.map(({ id, imageUrl, name, priceInCents }) => (
        <ProductCard
          key={id}
          id={id}
          imageUrl={imageUrl}
          name={name}
          priceInCents={priceInCents}
        />
      ))}
    </Container>
  )
}
