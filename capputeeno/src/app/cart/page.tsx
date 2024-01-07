'use client'
import CartList from '@/components/cart/cart-list/cart-list'
import CartResult from '@/components/cart/cart-result'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Container } from './styled'

export default function CartPage() {
  return (
    <Container>
      <CartList />
      <CartResult />
    </Container>
  )
}
