/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, ReactNode } from 'react'

export interface FilterContextProviderProps {
  children: ReactNode
}
export enum FilterType {
  all = 'allProducts',
  shirt = 't-shirts',
  mugs = 'mugs',
}
export enum sortField {
  news = 'news',
  price_in_cents = 'price_in_cents',
  sales = 'sales',
}
export enum sortOrder {
  ASI = 'ASC',
  DSC = 'DSC',
}

type SortFieldState = {
  sortField: sortField
  sortOrder: sortOrder
}

export type FilterStateType = FilterType

export const FilterContext = createContext({
  type: FilterType.all,
  sortFieldState: {
    sortField: sortField.news,
    sortOrder: sortOrder.ASI,
  },
  page: 1,
  search: '',
  setType: (value: FilterType) => {},
  setSortFieldState: (value: SortFieldState) => {},
  setPage: (value: number) => {},
  setSearch: (value: string) => {},
})

export default function FilterContextProvider({
  children,
}: FilterContextProviderProps) {
  const [search, setSearch] = useState<string>('')
  const [type, setType] = useState<FilterStateType>(FilterType.all)
  const [page, setPage] = useState<number>(1)
  const [sortFieldState, setSortFieldState] = useState<SortFieldState>({
    sortField: sortField.news,
    sortOrder: sortOrder.ASI,
  })

  const [cartItens, setCartItem] = useState()
  return (
    <FilterContext.Provider
      value={{
        type,
        sortFieldState,
        page,
        search,
        setSearch,
        setPage,
        setType,
        setSortFieldState,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
