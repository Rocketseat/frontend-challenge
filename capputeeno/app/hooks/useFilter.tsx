import { useContext } from "react";
import { FilterContext } from "../contexts/filter-context";

export function useFilter(){
    return useContext(FilterContext);
}