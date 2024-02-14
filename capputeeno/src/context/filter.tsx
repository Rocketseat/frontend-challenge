import { FilterTypes } from "@/types/filter-enum";
import ChildrenProps from "../types/children-props";
import { createContext } from "react";

export const FilterContext = createContext({
  type: FilterTypes.ALL,
  setType: () => {},
  page: 0,
});

export function FilterProvider({ children }: ChildrenProps) {}
