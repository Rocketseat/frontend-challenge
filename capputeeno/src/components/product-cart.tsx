/* eslint-disable camelcase */
import { useCart } from '@/context/cart-context'
import { formatPrice } from '@/utils/format-price'
import { Trash } from '@phosphor-icons/react'
import { ChangeEvent } from 'react'
import { styled } from 'styled-components'

const ContainerItem = styled.li`
  width: 46rem;
  height: 13.1875rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--shapes-01, #fff);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const TagContainerNameItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  align-items: center;
  height: 4rem;
  padding: 0 0.75rem;
`
const TagImgItem = styled.img`
  width: 16rem;
  height: 13.1875rem;
  flex-shrink: 0;
`
const DescriptionContaner = styled.div`
  width: 28rem;
  height: 5rem;
`

const ContainerResult = styled.div`
  width: 28rem;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const TagNameProduct = styled.h3`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */
`

const TagDescriptionProd = styled.p`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`

const TagPriceValue = styled.p`
  color: var(--shapes-dark-tooltip, #09090a);
  text-align: right;
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`

const ContainerTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const TagSelect = styled.select`
  width: 65px;
  height: 40px;
  flex-shrink: 0;
`

interface ProductCartprops {
  name: string
  price_in_cents: number
  id: string
  image_url: string
  description?: string
  category?: string
  quantity: number
  handleUpdateQuantity(id: string, quantity: number): void
}
export default function ProductCart({
  id,
  image_url,
  name,
  price_in_cents,
  quantity,
  description,
}: ProductCartprops) {
  const { handleChange, removeFromCart } = useCart()

  return (
    <ContainerItem>
      <TagImgItem src={image_url} />
      <ContainerTag>
        <TagContainerNameItem>
          <TagNameProduct>{name}</TagNameProduct>
          <button
            onClick={() => {
              removeFromCart(id)
            }}
          >
            <Trash />
          </button>
        </TagContainerNameItem>
        <DescriptionContaner>
          <TagDescriptionProd>{description}</TagDescriptionProd>
        </DescriptionContaner>
        <ContainerResult>
          <TagSelect
            name="quantity"
            value={quantity}
            onChange={(event) => handleChange(event, id)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </TagSelect>

          <TagPriceValue>{formatPrice(price_in_cents)}</TagPriceValue>
        </ContainerResult>
      </ContainerTag>
    </ContainerItem>
  )
}
