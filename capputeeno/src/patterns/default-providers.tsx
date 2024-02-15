"use client";

import ChildrenProps from "@/types/children-props";
import { FilterContextProvider } from "../context/filter";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = {};

export function DefaultProviders({ children }: ChildrenProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  );
}
