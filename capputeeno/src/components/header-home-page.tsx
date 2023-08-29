"use client"
import { styled } from "styled-components"
import FilterBar from "./filter-bar"
import FilterByPriority from "./filter-by-priprity"

const ContainerHeaderHomePage = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: flex-start;
min-height: 20vh;
`

export default function HeaderHomePage() {
    return(
    <ContainerHeaderHomePage>
        <FilterBar/>
        <FilterByPriority/>
      </ContainerHeaderHomePage>
    )
}