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
  skip: 0,
});

export function FilterContextProvider({ children }: ChildrenProps) {
  const [page, setPage] = useState(1);
  const [type, setType] = useState(FilterTypes.ALL);
  const [ord, setOrd] = useState(FilterOrdTypes.POPULARITY);

  const skip = 12;

  return (
    <FilterContext.Provider
      value={{
        type,
        setType,
        page,
        setPage,
        ord,
        setOrd,
        skip,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
