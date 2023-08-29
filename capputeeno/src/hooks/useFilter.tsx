import { FilterContext } from "@/context/filter-context";
import { useContext } from "react";

export function useFilter() {
    return useContext(FilterContext)
}