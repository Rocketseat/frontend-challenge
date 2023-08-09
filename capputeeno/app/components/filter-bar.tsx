"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterbyPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export function FilterBar(props : FilterBarProps){
    return(
        <FilterContainer>
            <FilterByType/>
            <FilterbyPriority/>
        </FilterContainer>
    )
}