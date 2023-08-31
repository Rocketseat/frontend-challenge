import { createContext, useState } from "react";
import { ReactNode } from "react";

export interface FilterContextProviderProps{
    children:ReactNode
}
export interface FilterContextProps{
    
}
export enum FilterType {
    all ='ALL',
    shirt = 'SHIRT',
    mugs = 'MUG'
}


export type FilterStateType = FilterType;



export const FilterContext = createContext({
type:FilterType.all,
setType:(value:FilterType)=>{}
})



export default function FilterContextProvider({children}:FilterContextProviderProps) {
    const [type, setType] = useState(FilterType.all)
    return(
        <FilterContext.Provider value={{
        type,
        setType
        }}>
            {children}
        </FilterContext.Provider>
    )
}