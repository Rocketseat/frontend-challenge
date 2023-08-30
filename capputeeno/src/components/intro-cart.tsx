import { styled } from "styled-components";
import BackButton from "./back-button";

const YourCart = styled.h3`
margin-top: auto;
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 36px */
text-transform: uppercase;
`
const TotalPrice = styled.p`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 150%; /* 24px */
`
const TotalValuePrice = styled.span`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%;
`
const ContainerIntrocard = styled.div`
width: 46rem;
height: 9.375rem;
flex-shrink: 0;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0.3125rem 0.5625rem;
`

export default function IntroCart() {
    return(
       <ContainerIntrocard>
            <BackButton/>
            <YourCart>Seu carrinho</YourCart>
            <TotalPrice>Total (3 produtos) <TotalValuePrice>R$161,00</TotalValuePrice></TotalPrice>
        </ContainerIntrocard>
    )
}