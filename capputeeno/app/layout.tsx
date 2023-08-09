import { Header } from './components/header'
import { FilterContextProvider } from './contexts/filter-context'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header/>       
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
