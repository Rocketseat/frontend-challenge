"use client"
import StyledComponentsRegistry from "@/lib/registry"
import Theme from "@/styled/DefaultTheme"
import { GlobalStyle} from "@/styled/global-styled"
import { ReactNode } from "react"

interface DefaultProviderProps{
    children:ReactNode
}

export function DefaultProvider({children}:DefaultProviderProps) {
    return(
      <StyledComponentsRegistry>
        <Theme>
            <GlobalStyle/>
            {children}
        </Theme>
      </StyledComponentsRegistry>
    )
}