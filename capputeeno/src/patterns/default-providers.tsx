"use client";

import ChildrenProps from "@/types/children-props";
import { FilterContextProvider } from "../context/filter";
import { ThemeProvider } from "styled-components";

const theme = {};

export function DefaultProviders({ children }: ChildrenProps) {
  return (
    <FilterContextProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FilterContextProvider>
  );
}
