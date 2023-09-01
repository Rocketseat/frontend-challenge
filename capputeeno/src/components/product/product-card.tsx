import { useProducts } from '@/hooks/useProducts'
import { formatPrice } from '@/utils/format-price'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'

const TagImage = styled.img`
  width: 16rem;
  height: 18.75rem;
  flex-shrink: 0;
`
const ContainerDiv = styled.div`
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
`
const ContainerCard = styled.li`
  background-color: ${({ theme }) => theme.colors.shapes};
`
const TagName = styled.h3`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 24px */
  width: 232px;
`
const TagPrice = styled.span`
  color: var(--shapes-dark-tooltip, #09090a);
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
`
interface ProductCardProps {
  id: string
  name: string
  priceInCents: number
  imageUrl: string
}
export default function ProductCard({
  id,
  priceInCents,
  name,
  imageUrl,
}: ProductCardProps) {
  const router = useRouter()
  const handleNavigate = () => {
    router.push('/product?id=' + id)
  }

  return (
    <ContainerCard onClick={handleNavigate}>
      <TagImage src={imageUrl} />
      <ContainerDiv>
        <TagName>{name}</TagName>
        <TagPrice>{formatPrice(priceInCents)}</TagPrice>
      </ContainerDiv>
    </ContainerCard>
  )
}
