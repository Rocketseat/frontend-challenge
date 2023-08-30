"use client"
import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import CartControl from "./cart-control"
import { useFilter } from "@/hooks/useFilter"
import { useRouter } from "next/navigation"
import Link from "next/link"

const saira_Stencil_One = Saira_Stencil_One({ 
  weight:['400'],
  subsets: ['latin'] 
})

interface HeaderProps {}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.125rem 10rem;
    flex-wrap: wrap;
    @media (max-width:827px) {
        padding: 3rem;
    }
    @media (max-width:662px) {
        align-items: center;
        justify-content: center;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 150%;
    cursor: pointer;
 

`

export default function Header(props:HeaderProps) {
        const {setSearch, search} = useFilter();
        const router = useRouter()
        const handleChangheNavigate =()=>{
            router.push("/")
        }
        

    return(
        <TagHeader>
            <Logo 
            onClick={handleChangheNavigate}
            className={saira_Stencil_One.className}
            >capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon
                handlechange={setSearch}
                placeholder="Procurando por algo específico?"
                />
                <Link href="/cart">
                    <CartControl/>
                </Link>
            </div>
        </TagHeader>
    )
}