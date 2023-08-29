"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import styles from './page.module.css'
import HeaderHomePage from "@/components/header-home-page";
import ProductList from '@/components/product-list';

export default function Home() {
  const client = new QueryClient()
  return(
    <QueryClientProvider client={client} >
    <main className={styles.main}>
      <HeaderHomePage/>
      <ProductList/>
    </main>
    </QueryClientProvider>
  )
}
