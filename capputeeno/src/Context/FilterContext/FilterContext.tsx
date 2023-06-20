"use client";
import { FilterType } from "@/types/FilterTypes";
import { useContext, useState, createContext } from "react";

const initialValues = {
  search: "",
  page: 0,
  type: FilterType.ALL,
  setType: (type: FilterType): void => {},
  setPage: (type: number): void => {},
  setSearch: (type: string): void => {},
};
const FilterContext = createContext(initialValues);
interface ProviderProps {
  children: React.ReactNode;
}

export const FilterContextProvider: React.FC<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [search, setSearch] = useState(initialValues.search);
  const [page, setPage] = useState(initialValues.page);
  const [type, setType] = useState(initialValues.type);

  return (
    <>
      <FilterContext.Provider
        value={{ search, page, type, setType, setPage, setSearch }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export const useFilterContext = () => useContext(FilterContext);
