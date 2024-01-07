'use client'

import Nav from '@/components/nav'
import PageControl from '@/components/page-control'
import ProductList from '@/components/product/product-list'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/use-product'
import { styled } from 'styled-components'

const ContainerHome = styled.div`
  margin-bottom: 3rem;
  padding: 2rem 5rem;
`

export default function Home() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-itens',
    [],
  )
  return (
    <ContainerHome>
      <Nav />
      <ProductList />
      <PageControl />
    </ContainerHome>
  )
}
