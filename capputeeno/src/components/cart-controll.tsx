import { ShoppingBag } from "@phosphor-icons/react"
import { styled } from "styled-components"

export const ControlCart = styled.div`
width: 30px;
height: 30px;
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: center;
button{
    border: none;
    background-color: transparent;
    cursor: pointer;
}
span{
    width: 1.0625rem;
    height: 1.0625rem;
    flex-shrink: 0;
    background-color:${({theme})=>theme.colors.red};
    color: #FFF;
    text-align: center;
    font-family: Saira;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px; /* 260% */
    border-radius: 999px;
    margin-left: -10px;
    margin-bottom: -8px;
    
}
`
export default function CartControl() {
    return(
        <ControlCart>
                <button>
                    <ShoppingBag size={24} />
                </button>
                <span>0</span>
            </ControlCart>
    )
}