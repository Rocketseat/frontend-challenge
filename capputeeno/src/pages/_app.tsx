import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient,QueryClientProvider } from 'react-query'

import 'tailwindcss/tailwind.css'
import { ProductProvider } from '../context/ProductContext';


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <Component {...pageProps} />
      </ProductProvider>
    </QueryClientProvider>
  )
}

export default MyApp
