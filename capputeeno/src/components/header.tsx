'use client'
import { styled } from 'styled-components'
import { MagnifyingGlass, ShoppingBag } from '@phosphor-icons/react'
import CartControl from './cart-controll'
import InputHeader from './input-header'
import { useRouter } from 'next/navigation'

export const BoxHeader = styled.header`
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.shapes};
  padding: 0.625rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`

export const TagH1 = styled.h1`
  color: ${({ theme }) => theme.colors.baseTitle};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-right: auto;
  cursor: pointer;
`
export default function Header() {
  const router = useRouter()
  const hangdleNavigateToHome = () => {
    router.push('/')
  }
  return (
    <BoxHeader>
      <TagH1 onClick={hangdleNavigateToHome}>capputeeno</TagH1>
      <InputHeader />
      <CartControl />
    </BoxHeader>
  )
}
