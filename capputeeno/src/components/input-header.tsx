import useFilters from "@/hooks/useFilters"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { styled } from "styled-components"

export const Input = styled.input`
   border: none;
    color:${({theme})=>theme.colors.baseTitle};
    text-align: center;
    font-size: ${({theme})=>theme.fontSize.xs};
    font-style: normal;
    font-weight: 400;
    height: 2.625rem;
    line-height: 1.375rem;
    width: 12.875rem;
    height: 1.375rem;
     outline: none; 
    background-color:${({theme})=>theme.colors.background};


`

export const ContainerInput = styled.div`
   display: inline-flex;
    padding: 0.5625rem 1rem;
    justify-content: center;
    align-items: flex-start;
    gap: 5.625rem;
   background-color:${({theme})=>theme.colors.background};
`


export const Button = styled.button`
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
`

export default function InputHeader() {
    const {setSearch} = useFilters()
    return (
         <ContainerInput>
                <Input 
                type="text" 
                placeholder="Procurando por algo específico?"
                onChange={(e)=>{setSearch(e.target.value)}}
                />
                <Button>
                    <MagnifyingGlass size={20}/>
                </Button>
            </ContainerInput>
    )
}