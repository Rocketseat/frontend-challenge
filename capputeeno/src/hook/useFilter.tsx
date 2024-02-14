import { FilterContext } from "@/context/filter";
import { useContext } from "react";

export default function useFilter() {
  return useContext(FilterContext);
}
