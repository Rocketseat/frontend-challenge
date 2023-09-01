'use client'

import { useCart } from '@/context/cart-context'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { calculateTotal } from '@/utils/calculo-total'
import { formatPrice } from '@/utils/format-price'
import { key } from '@/utils/key-local-storage'
import { styled } from 'styled-components'

const Container = styled.div`
  width: 22rem;
  height: 43.75rem;
  flex-shrink: 0;
  background: var(--shapes-01, #fff);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`
const Title = styled.h2`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  text-transform: uppercase;
`

const TagSpan = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`

const TagDiv = styled.div`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18.75rem;
`

const TagValue = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`

const ButtonFinishOder = styled.button`
  display: flex;
  width: 18.9375rem;
  height: 2.75rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: auto;
  background-color: green;
  border: none;
  span {
    color: var(--shapes-light-background, #f5f5fa);
    text-align: center;
    font-family: Saira;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: uppercase;
  }
`

const TagSpanFooter = styled.span`
  color: var(--textos-dark-textos-apoio, #737380);
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  text-decoration-line: underline;
  text-transform: uppercase;
  text-align: left;
  width: 18.75rem;
`
export default function CartResult() {
  const { cartItems, cartLength } = useCart()
  return (
    <Container>
      <Title>Resumo</Title>
      <TagDiv>
        <TagSpan>Subtotal de produtos</TagSpan>
        <TagSpan>{formatPrice(calculateTotal(cartItems))}</TagSpan>
      </TagDiv>
      <TagDiv>
        <TagSpan>Entrega</TagSpan>
        <TagSpan>{formatPrice(calculateTotal(cartItems) + 4000)}</TagSpan>
      </TagDiv>
      <TagDiv>
        <TagValue>total</TagValue>
        <TagValue>{formatPrice(calculateTotal(cartItems) + 4000)}</TagValue>
      </TagDiv>
      <ButtonFinishOder>
        <span>finalizar a compra</span>
      </ButtonFinishOder>
      <TagSpanFooter>ajuda</TagSpanFooter>
      <TagSpanFooter>reembolsos</TagSpanFooter>
      <TagSpanFooter>entregas e fretes</TagSpanFooter>
      <TagSpanFooter>trocas e devoloções</TagSpanFooter>
    </Container>
  )
}
