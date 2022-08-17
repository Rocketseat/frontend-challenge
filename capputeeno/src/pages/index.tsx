import type { NextPage } from 'next'
import { Header } from '../components/Header'
import Head  from 'next/head'
import { Content } from '../components/Content'

const Home: NextPage = () => {
  return (
    <div  className='bg-gray-300'>
      <Head>
        <title>
          Capputeeno | Home
        </title>
      </Head>
      <Header/>
      <main className='bg-gray-300		h-screen w-4/5 m-auto py-10 '>

    <Content/>


      </main>
     
      
    </div>
  )
}

export default Home
