"use client"

import Image from 'next/image';
import styles from './page.module.css';
import { FilterBar } from './components/filter-bar';
import { FilterContext, FilterContextProvider } from './contexts/filter-context';
import { ProductList } from './components/products-list';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartControl } from './components/cart-control';

export default function Home(){
  const client = new QueryClient();
  return (
  <QueryClientProvider client={client}>
    <main className={styles.main}>
      <FilterBar/>
      <ProductList/>
      <CartControl/>
    </main>
  </QueryClientProvider>
  )
}

