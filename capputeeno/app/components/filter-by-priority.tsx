import { styled } from "styled-components"
import { ArrowIcon } from "./arrow-icon"
import { useState } from "react"
import { useFilter } from "../hooks/useFilter"
import { PriorityTypes } from "../types/priority-types"

interface FilterbyPriorityProps {

}

export const FilterContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;

    button {
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherited;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justofy-content: center;
    }
`

const CaixaSelecao = styled.ul`
    position: absolute;
    width: 176px;
    cursor: pointer;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;

    list-style: none;

    top: 100%;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px
    }
`


export function FilterbyPriority(props: FilterbyPriorityProps){
    const [isOpen, setIsOpen] = useState(false)
    const { setPriority } = useFilter()

    const handleOpen = () => setIsOpen((prev: boolean) => !prev)

    const handleUpdatePriority = (value: PriorityTypes) => {
        setPriority(value)
        setIsOpen(false)
    }

/*O operador lógico "&&" é usado para fazer uma verificação condicional. 
Se o valor à esquerda (neste caso, isOpen) for avaliado como verdadeiro (ou seja, true), 
o valor à direita do "&&" será retornado. 
Caso contrário, se o valor à esquerda for avaliado como falso (ou seja, false),
 o valor à direita não será avaliado e a expressão retornará false. */
    return(
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por<ArrowIcon/></button>
            {isOpen && 
            <CaixaSelecao>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço:Maior-menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço:Menor-maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </CaixaSelecao>}
        </FilterContainer>
          
    )
} 