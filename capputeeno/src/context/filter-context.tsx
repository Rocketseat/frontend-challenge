import { createContext, useState } from "react";
import { ReactNode } from "react";

export interface FilterContextProviderProps{
    children:ReactNode
}
export interface FilterContextProps{
    
}
export enum FilterType {
    all ='allProducts',
    shirt = 't-shirts',
    mugs = 'mugs'
}
export enum sortField {
    news ='news',
    price_in_cents = 'price_in_cents',
    sales = 'sales'
}
export enum sortOrder {
    ASI ='ASC',
    DSC = 'DSC',
}

type SortFieldState = {
    sortField:sortField,
    sortOrder:sortOrder
}


export type FilterStateType = FilterType;



export const FilterContext = createContext({
type:FilterType.all,
setType:(value:FilterType)=>{},
sortFieldState: {
    sortField: sortField.news,
    sortOrder: sortOrder.ASI,
  },
setSortFieldState:(value:SortFieldState)=>{},
})



export default function FilterContextProvider({children}:FilterContextProviderProps) {
    const [type, setType] = useState<FilterStateType>(FilterType.all)
    const [sortFieldState, setSortFieldState] = useState<SortFieldState>({
    sortField: sortField.news,
    sortOrder: sortOrder.ASI,
  });
    return(
        <FilterContext.Provider value={{
        type,
        setType,
        sortFieldState,
        setSortFieldState
        }}>
            {children}
        </FilterContext.Provider>
    )
}