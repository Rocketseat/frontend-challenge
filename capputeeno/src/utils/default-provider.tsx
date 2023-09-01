"use client"
import FilterContextProvider from "@/context/filter-context"
import StyledComponentsRegistry from "@/lib/registry"
import Theme from "@/styled/DefaultTheme"
import { GlobalStyle} from "@/styled/global-styled"
import { ReactNode } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

interface DefaultProviderProps{
    children:ReactNode
}

export function DefaultProvider({children}:DefaultProviderProps) {
    return(
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider>
        <StyledComponentsRegistry>
          <Theme>
              <GlobalStyle/>
              {children}
          </Theme>
        </StyledComponentsRegistry>
      </FilterContextProvider>
    </QueryClientProvider>

    )
}