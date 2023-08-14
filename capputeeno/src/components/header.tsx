"use client"

import { Saira_Stencil_One } from "next/font/google"
import { styled } from "styled-components"
import { PrimaryInput } from "./primary-input"

interface HeaderProps {
  
}

const saira_stencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin'] }
)

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 160px;
`

const Logo = styled.a`
  color: var(--logo-color); 
  font-size: 40px;
  font-weight: 400;
  line-height: 150%; /* 60px */
`

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <Logo className={saira_stencil.className}>capputeeno</Logo>
      <div>
          <PrimaryInput placeholder="Procurando por algo específico?"></PrimaryInput>
      </div>
    </TagHeader>
  )
}