import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Pagination } from '@mui/material';

import { Product } from '../../@types/types';
import { CardItemMinInfo } from '../CardItemMinInfo';
import { grapQLClient } from '../../services/graphiqlClient';
import { gql } from 'graphql-request';

interface AllProductsProps {
  products: object;
}

export const AllProducts = ({ products }: AllProductsProps) => {
  const [allproducts, setAllProducts] = useState<Product[]>(
    Object.values(products)[0]
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagined = async (page: number) => {
    const { allProducts } = await grapQLClient.request(gql`
      query {
        allProducts(page: ${page}) {
          image_url
          name
          sales
        }
      }
    `);

    console.log(allProducts);
    setAllProducts(allProducts);
  };

  return (
    <>
      <Box>
        <Box
          style={{
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '21px',
            marginBottom: '21px',
          }}
        >
          <Pagination
            count={2}
            shape="rounded"
            onChange={(_e, value) => {
              setCurrentPage(value);
              handlePagined(value);
            }}
            defaultPage={currentPage}
          />
        </Box>

        <Grid
          container
          spacing={1}
          columns={{ xs: 4, md: 4 }}
          className=" mx-auto p-0   w-[100%] "
          gap={2}
        >
          {allproducts.map(({ name, image_url, sales }, index) => (
            <Grid item key={index} className="py-0 px-0">
              <CardItemMinInfo
                productPrice={`${sales},00`}
                imageUrl={image_url}
                productName={name}
              />
            </Grid>
          ))}
        </Grid>

        <Box
          style={{
            border: '1px solid red',
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '21px',
            marginBottom: '21px',
          }}
        >
          <Pagination
            count={2}
            shape="rounded"
            onChange={(_e, value) => {
              setCurrentPage(value);
              handlePagined(value);
            }}
            defaultPage={currentPage}
          />
        </Box>
      </Box>
    </>
  );
};
