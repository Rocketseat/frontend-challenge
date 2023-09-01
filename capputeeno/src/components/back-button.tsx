import { ArrowBendUpLeft, Bag } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'

const ButtonBack = styled.button`
  border: none;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`
export default function BacckButton() {
  const router = useRouter()
  const handleNavigation = () => {
    router.push('/')
  }
  return (
    <>
      <ButtonBack onClick={handleNavigation}>
        <ArrowBendUpLeft />
        <span>voltar</span>
      </ButtonBack>
    </>
  )
}
