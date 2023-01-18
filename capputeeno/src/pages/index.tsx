import { useEffect } from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { gql } from 'graphql-request';
import { useRouter } from 'next/router';

import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Product } from '../@types/types';
import { grapQLClient } from '../services/graphiqlClient';
import { AllProducts } from '../components/Content/AllProducts';
import { Box, Pagination } from '@mui/material';

const Home: NextPage = (props) => {
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <div className="bg-[#F0F0F5] ">
      <Head>
        <title>Capputeeno | Home</title>
      </Head>
      <Header />
      <main className=" w-[90%] m-auto  overflow-auto ">
        <Content>
          <AllProducts products={props} />
        </Content>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { allProducts } = await grapQLClient.request(gql`
    query {
      allProducts(page: 1) {
        image_url
        name
        sales
      }
    }
  `);

  const arrayProducts: Product[] = Object.values(allProducts);
  return {
    props: {
      arrayProducts,
    },
  };
};
export default Home;
