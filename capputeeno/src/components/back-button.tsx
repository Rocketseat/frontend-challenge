"use client"
import { useRouter } from "next/navigation";
import ArrowRigthIcon from "./arrow-rigth-icon";
import { styled } from "styled-components";

const Button = styled.button`
display: flex;
align-items: center;
gap: 0.5rem;
border: none;
margin-right: auto;
cursor: pointer;
span{
    color: var(--textos-textos, #617480);
    font-family: Saira;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
}
`

export default function BackButton() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/")
    }
    return( 
    <Button onClick={handleNavigate}>
        <ArrowRigthIcon/>
        <span>voltar</span>
    </Button>
)
}