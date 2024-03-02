import { FilterOrdTypes, FilterTypes } from "@/types/filter-enum";
import ChildrenProps from "../types/children-props";
import { createContext, useState } from "react";

export const FilterContext = createContext({
  type: FilterTypes.ALL,
  setType: (value: FilterTypes) => {},
  ord: FilterOrdTypes.NEWS,
  setOrd: (value: FilterOrdTypes) => {},
  page: 0,
  setPage: (value: number) => {},
});

export function FilterContextProvider({ children }: ChildrenProps) {
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterTypes.ALL);
  const [ord, setOrd] = useState(FilterOrdTypes.POPULARITY);

  return (
    <FilterContext.Provider
      value={{
        type,
        setType,
        page,
        setPage,
        ord,
        setOrd,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
