import { styled } from "styled-components"

const ButtonConfirmOder = styled.button`
display: flex;
width: 100%;
height: 2.75rem;
justify-content: center;
flex-shrink: 0;
align-self: center;
border-radius: 4px;
background: var(--others-green, #51B853);
mix-blend-mode: multiply;
border: none;

span{
color: var(--shapes-light-background, #F5F5FA);
text-align: center;
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 250%; /* 24px */
text-transform: uppercase;
}

`
export default function ButtonConfirmOderJSX() {
    return(
        <ButtonConfirmOder>
            <span>
                Finalizar a compra
            </span>
        </ButtonConfirmOder>
    )
}