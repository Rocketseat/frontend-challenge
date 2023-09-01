'use client'
import { styled } from 'styled-components'
import ProductCart from './product-cart'
import BacckButton from './back-button'

const Container = styled.div`
  width: 46rem;
  height: 50rem;
`
const HeaderCartList = styled.div`
  width: 50rem;
  height: 9.375rem;
  flex-shrink: 0;
`

const ContainerItems = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-height: 80vh;
`

const TagTitleCart = styled.h1`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
`

const TagTotalMessage = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 24px */
`
const TagTotalValue = styled.span`
  color: var(--shapes-dark-tooltip, #09090a);
  text-align: right;
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`
export default function CartList() {
  return (
    <Container>
      <HeaderCartList>
        <BacckButton />
        <TagTitleCart>SEU CARRINHO</TagTitleCart>
        <TagTotalMessage>
          Total (3 produtos) <TagTotalValue>R$161,00</TagTotalValue>
        </TagTotalMessage>
      </HeaderCartList>
      <ContainerItems>
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </ContainerItems>
    </Container>
  )
}
