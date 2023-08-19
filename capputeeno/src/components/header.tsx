"use client"
import { Saira_Stencil_One } from "next/font/google"
import styled from "styled-components"
import { PrimaryInput, PrimaryInputSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'] 
})
interface HeaderProps{
}
const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`
export function Header(props : HeaderProps){
  return ( 
 <TagHeader>
  <Logo className={sairaStencil.className}>Capputeeno</Logo>
     <div>
    <PrimaryInputSearchIcon placeholder="Procurando por algo especifico?"/>
    <CartControl/> 
     </div>
  </TagHeader>
  )
}