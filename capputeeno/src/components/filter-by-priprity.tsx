import { styled } from "styled-components"
import ArrowDownIcon from "./arrow-down-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityType } from "@/types/filter-types"

export const TagButton = styled.button`
color: var(--textos-dark-textos-apoio, #737380);
text-align: center;
font-family: Saira;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
display: flex;
align-items: center;
justify-content: flex-end;
width: 176px;
border: none;
cursor: pointer;

`

export const ContainerDiv = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TagLi = styled.li`
cursor: pointer;


`

export const ContainerSelect = styled.ul`
width: 176px;
height: 132px;
flex-shrink: 0;
border-radius: 4px;
background: var(--shapes-01, #FFF);
box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
list-style: none;
padding: 10px;
gap: 5px;
display: flex;
flex-direction: column;
align-items: flex-start;
`


interface FilterByPriorityProps{

}
export default function FilterByPriority({}:FilterByPriorityProps) {
    const [isOpen, setOpen] = useState<boolean>(true)
    const handleChangedIsOpen = ()=>{setOpen(!isOpen)}
    const {setPriority,priotity } = useFilter()
    const handleChangedPriority = (value:PriorityType)=>{
        handleChangedIsOpen()
        setPriority(value)
    }
    return(
        <ContainerDiv>
            <TagButton
            onClick={handleChangedIsOpen}
            >
                organizar por:
                <ArrowDownIcon/>
            </TagButton>
            {!isOpen && 
            <ContainerSelect>
                <TagLi
                onClick={()=>handleChangedPriority(PriorityType.NEWS)}
                    >Novidades
                </TagLi>
                <TagLi
                onClick={()=>handleChangedPriority(PriorityType.HIGHER_PRICE)}
                    >Preço: Maior - Menor
                </TagLi>
                <TagLi
                onClick={()=>handleChangedPriority(PriorityType.LOWER_PRICE)}
                    >Preço: Menor - maior
                </TagLi>
                <TagLi
                onClick={()=>handleChangedPriority(PriorityType.BEST_SELLERS)}
                    >Mais vendidos
                </TagLi>
            </ContainerSelect>
            }

        </ContainerDiv>
    )
}