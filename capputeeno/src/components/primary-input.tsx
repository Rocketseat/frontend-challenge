import React from "react";
import { styled } from "styled-components";
import SearchIcon from "./search-icon";
import { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";
import { useFilter } from "@/hooks/useFilter";

const PrimaryInput = styled.input`
    width: 22rem;
    border-radius: 8px;
    background-color: var(--bg-secondary); /* Corrected typo in variable name */
    padding: 10px 16px;

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;

    border: none;

    color: var(--text-dark);
`;

const InputContainer = styled.div`
    position: relative;
    width: 22rem;

    svg {
        position: absolute;
        right: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
    }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    handlechange: (value: string ) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
    const {search,setSearch} = useFilter();
    return (
        <form >
            <InputContainer>
                <PrimaryInput
                    {...props}
                    onChange={e => setSearch(e.target.value)}
                    />
                <SearchIcon />
            </InputContainer>
        </form>
    );
}
