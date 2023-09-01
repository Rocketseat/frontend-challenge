'use client'
import CartList from '@/components/cart-list'
import CartResult from '@/components/cart-result'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 70px 0;
  gap: 40px;
`

export default function CartPage() {
  return (
    <Container>
      <CartList />
      <CartResult />
    </Container>
  )
}
