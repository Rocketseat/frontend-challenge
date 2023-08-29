"use client"
import { FilterContextProviderProps, FilterType, PriorityType } from "@/types/filter-types";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  priotity: PriorityType.NEWS,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
  setPriority: (value: PriorityType) => {},
});


export function FilterContextProvider({children}:FilterContextProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);
  const [priotity, setPriority] = useState(PriorityType.NEWS);
  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priotity,
        setSearch,
        setPage,
        setType,
        setPriority
      }}
    >
    {children}
    </FilterContext.Provider>
  );
}
