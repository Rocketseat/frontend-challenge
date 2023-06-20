"use client";
import { FilterType } from "@/types/FilterTypes";
import { OrderTypes } from "@/types/OderTypes";
import { useContext, useState, createContext } from "react";

const initialValues = {
  search: "",
  page: 0,
  type: FilterType.ALL,
  order: OrderTypes.NEWS,
  setOrder: (order: OrderTypes): void => {},
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
  const [order, setOrder] = useState(initialValues.order);

  return (
    <>
      <FilterContext.Provider
        value={{
          search,
          page,
          type,
          order,
          setOrder,
          setType,
          setPage,
          setSearch,
        }}
      >
        {children}
      </FilterContext.Provider>
    </>
  );
};

export const useFilterContext = () => useContext(FilterContext);
