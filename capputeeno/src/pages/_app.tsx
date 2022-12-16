import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient,QueryClientProvider } from 'react-query'

import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
