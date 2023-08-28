import { styled } from "styled-components";
import SearchIcon from "./search-icon";
import { InputHTMLAttributes } from "react";

const PrimaryInput = styled.input`
    width: 352px;
    border-radius: 8px;
    background-color: var(--bg-secundary);
    padding: 10px 16px;

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    border: none;

    color: var(--text-dark);
`




const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

}
export function PrimaryInputWSearchIcon(props: InputProps){
    return (
            <InputContainer>
                <PrimaryInput {...props} />
                <SearchIcon/>
            </InputContainer>
    )
}