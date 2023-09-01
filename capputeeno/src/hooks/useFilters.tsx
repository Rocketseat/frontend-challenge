import { FilterContext } from "@/context/filter-context";
import { useContext } from "react";

export default function useFilters() {
    return useContext(FilterContext)
}