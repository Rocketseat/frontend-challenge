"use client"
import { CartContextProvider } from '@/context/cart-context';
import { FilterContextProvider } from '@/context/filter-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface DefaultProviderProps {
    children: ReactNode;
}

const theme = {

}

export default function DefaultProvider({ children }: DefaultProviderProps) {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider >
                <CartContextProvider>
                    <ThemeProvider theme={theme}>
                        {children}
                    </ThemeProvider>
                </CartContextProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}
