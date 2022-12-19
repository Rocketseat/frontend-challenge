import {useEffect} from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head  from 'next/head'
import { gql } from 'graphql-request';

import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Product } from '../@types/types';
import { grapQLClient } from '../services/graphiqlClient';
import { AllProducts } from '../components/Content/AllProducts';

const Home: NextPage = (props) => {
 

  return (
    <div  className='bg-[#F0F0F5]'>
      <Head>
        <title>
          Capputeeno | Home
        </title>
      </Head>
      <Header/>
      <main className='h-screen w-4/5 m-auto py-10 '>

    <Content>
      <AllProducts products={props} />
      
    </Content>


      </main>
     
      
    </div>
  )
}


export const getServerSideProps:GetServerSideProps = async()=>{


  const {allProducts} = await grapQLClient.request(gql`
  query{
    allProducts{
        image_url
        name
        sales
    }
  }
  `)

  const arrayProducts:Product[] = Object.values(allProducts)
  

  return{
    props:{
      arrayProducts
    },
  }

}
export default Home
