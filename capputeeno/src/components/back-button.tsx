import { ArrowBendUpLeft, Bag } from "@phosphor-icons/react"
import { styled } from "styled-components"


const ButtonBack = styled.button`
border: none;
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
`
export default function BacckButton() {
    return(
        <>
        <ButtonBack>
            <ArrowBendUpLeft size={32} />
            <span>voltar</span>
        </ButtonBack>
        </>
    )
}