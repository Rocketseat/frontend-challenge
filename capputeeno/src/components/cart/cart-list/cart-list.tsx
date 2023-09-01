/* eslint-disable camelcase */
'use client'
import { styled } from 'styled-components'
import ProductCart from '../../product/product-cart'
import BacckButton from '../../back-button'
import { formatPrice } from '@/utils/format-price'
import { calculateTotal } from '@/utils/calculo-total'
import { useCart } from '@/context/cart-context'
import {
  Container,
  ContainerItems,
  HeaderCartList,
  TagTitleCart,
  TagTotalMessage,
  TagTotalValue,
} from './styled'

export default function CartList() {
  const { cartItems, cartLength } = useCart()
  return (
    <Container>
      <HeaderCartList>
        <BacckButton />
        <TagTitleCart>SEU CARRINHO</TagTitleCart>
        <TagTotalMessage>
          Total ({cartLength} produtos){' '}
          <TagTotalValue>
            {formatPrice(calculateTotal(cartItems))}
          </TagTotalValue>
        </TagTotalMessage>
      </HeaderCartList>
      <ContainerItems>
        {cartItems.map(
          ({
            id,
            image_url,
            name,
            price_in_cents,
            quantity,
            category,
            description,
          }) => (
            <ProductCart
              key={id}
              id={id}
              image_url={image_url}
              name={name}
              price_in_cents={price_in_cents}
              quantity={quantity}
              category={category}
              description={description}
              handleUpdateQuantity={function (
                id: string,
                quantity: number,
              ): void {
                throw new Error('Function not implemented.')
              }}
            />
          ),
        )}
      </ContainerItems>
    </Container>
  )
}
