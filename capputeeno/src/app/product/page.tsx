'use client'

import BacckButton from '@/components/back-button'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import { Bag } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/cart-context'
import {
  ButtonAddCart,
  ContainerInfos,
  ContainerPage,
  TagCategory,
  TagDescription,
  TagDiv,
  TagH3,
  TagName,
  TagPrice,
} from './styled'

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
