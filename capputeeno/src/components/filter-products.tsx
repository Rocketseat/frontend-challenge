"use client"
import { FilterType } from "@/context/filter-context"
import useFilters from "@/hooks/useFilters"
import { styled } from "styled-components"

interface PropsButton {
 select:boolean
}

const NavContainer = styled.nav`
width: 37.5rem;
display: flex;
align-items: center;
justify-content: center;
gap: 0.0625rem;
`

const ButtonFilter = styled.button<PropsButton>`
    min-width: 13.5rem;
    height: 2.375rem;
    padding: -6px 8px;
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 4px solid ${props => props.select? props.theme.colors.orangeFlow:'transparent'};
    cursor: pointer;
    span{
        color: var(--textos-dark-inputs-icons, #41414D);
        text-align: center;
        font-family: Saira;
        font-size: 16px;
        font-style: normal;
        font-weight: ${props => props.select? '600':'400'};
        line-height: 22px; /* 137.5% */
        text-transform: uppercase;
}
`

export default function FilterProducts(){
    const {type,setType} = useFilters()
  return (
    <NavContainer>
        <ButtonFilter
        select={type === FilterType.all}
        onClick={()=>{setType(FilterType.all)}}
        >
            <span>todos os produtos</span>
        </ButtonFilter>

        <ButtonFilter
        select={type === FilterType.shirt}

        onClick={()=>{setType(FilterType.shirt)}}
        >
            <span>camisetas</span>
        </ButtonFilter>        
        <ButtonFilter
        select={type === FilterType.mugs}
        onClick={()=>{setType(FilterType.mugs)}}
        >
            <span>canecas</span>
        </ButtonFilter>
    </NavContainer>
  )
}
