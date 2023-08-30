import { ReactNode } from "react";

export enum FilterType {
  ALL = "allProducts",
  SHIRT = "t-shirts",
  MUG = "mugs",
}

export enum PriorityType {
    NEWS ='news',
    HIGHER_PRICE ='price_in_cents',
    LOWER_PRICE = 'price_in_cents',
    BEST_SELLERS ='sales'
}
export enum Priority {
    NEWS ='news',
    HIGHER_PRICE ='price_in_cents',
    LOWER_PRICE = 'price_in_cents',
    BEST_SELLERS ='sales'
}
export enum sortOrder {
   DESC = 'desc',
   ASC = "ASC"
}

export interface FilterContextProps {
  search: string,
  page: number,
  type: FilterType,
  priotity: PriorityType,
  setSearch: (value: string) => void,
  setPage: (value: number) => void,
  setType: (value: FilterType) => void,
  setPriority: (value: PriorityType) => void,
}

export interface FilterContextProviderProps {
  children: ReactNode;
}