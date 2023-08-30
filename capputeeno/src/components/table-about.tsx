import { styled } from "styled-components"

const BaseTh = styled.th`
    color: var(--textos-dark-inputs-icons, #41414D);
    font-family: Saira;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 30px */
    text-transform: uppercase;
`
const TitleTable = styled(BaseTh)`
    width: 100%;
    text-align: center;
`

const TagTd = styled.td`
color: var(--textos-dark-inputs-icons, #41414D);
font-family: Saira;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
`

const TagTdTotalPrice = styled(BaseTh)`
font-size: 1rem;

`
const TagTdTotalPriceValue = styled(BaseTh)`
font-size: 1rem;
text-align: right;
`
const TagTable = styled.table`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 40px;


tbody{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    tr{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.8rem 0.5rem;

    }
}
`
export default function TableAbout() {
    return(
           <TagTable>
                    <thead>
                        <tr>
                        <TitleTable>Resumo do pedido</TitleTable>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TagTd>Subtotal de produtos</TagTd>
                            <TagTd>R$ 161,00</TagTd>
                        </tr>
                        <tr>
                            <TagTd>Entrega</TagTd>
                            <TagTd>R$ 161,00</TagTd>
                        </tr>
                        <tr>
                            <TagTdTotalPrice>Total</TagTdTotalPrice>
                            <TagTdTotalPriceValue>R$ 161,00</TagTdTotalPriceValue>
                        </tr>
                    </tbody>
                </TagTable>
    )
}