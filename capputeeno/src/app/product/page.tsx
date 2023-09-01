'use client'

import BacckButton from '@/components/back-button'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import { Bag } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'
import { key } from '@/utils/key-local-storage'
import { useCart } from '@/context/cart-context'

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 10.625rem;
  gap: 15px;
`

const ContainerInfos = styled.div`
  display: flex;
  gap: 20px;
`

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const TagCategory = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`
const TagName = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 48px */
`

const TagPrice = styled.p`
  color: var(--shapes-dark-tooltip, #09090a);
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`

const TagDescription = styled.p`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`
const TagH3 = styled.h3`
  color: var(--textos-dark-textos-apoio, #737380);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`
const ButtonAddCart = styled.button`
  width: 28rem;
  height: 2.75rem;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--brand-blue, #115d8c);
  mix-blend-mode: multiply;
  border: none;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
  svg {
    color: var(--shapes-light-background, #f5f5fa);
  }
`

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const { data, isLoading } = useProduct(searchParams.id)
  const { addToCart } = useCart()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const handleNavigation = () => {
    router.push('/cart')
  }

  return (
    <ContainerPage>
      <div>
        <BacckButton />
      </div>
      <ContainerInfos>
        <div>
          <img src={data?.image_url} alt="" />
        </div>
        <TagDiv>
          {!isLoading && data && (
            <>
              <TagCategory>{data?.category}</TagCategory>
              <TagName>{data?.name}</TagName>
              <TagPrice>{formatPrice(data.price_in_cents)}</TagPrice>
              <TagH3>DESCRIÇÃO</TagH3>
              <TagDescription>{data?.description}</TagDescription>
              <ButtonAddCart
                onClick={() => {
                  addToCart(data)
                }}
              >
                <Bag size={28} />
                <span>adicionar carrinho</span>
              </ButtonAddCart>
            </>
          )}
        </TagDiv>
      </ContainerInfos>
    </ContainerPage>
  )
}
