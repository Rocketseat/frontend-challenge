"use client"

import { styled } from "styled-components"
import FilterItem from "./filter-item"
import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"

const FilterList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  padding: 0 80px;
`

interface FilterBarProps {}
export default function FilterBar(params: FilterBarProps) {
  const { type, setType } = useFilter()
  return (
    <FilterList>
      <FilterItem
        select={type === FilterType.ALL}
        text="todos os produtos"
        value={FilterType.ALL}
        />
      <FilterItem
        select={type === FilterType.SHIRT}
        text="camisetas"
        value={FilterType.SHIRT}
        />
      <FilterItem
        select={type === FilterType.MUG}
        text="canecas"
        value={FilterType.MUG}
        />
    </FilterList>
  )
}
