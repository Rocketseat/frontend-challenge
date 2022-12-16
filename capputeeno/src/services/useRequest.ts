import {useQuery} from 'react-query';
import { gql } from 'graphql-request';

import { grapQLClient } from './graphiqlClient';


export const useGetAllProducts =()=>{

    return useQuery("get-products",async()=>{

        const {getAllProducts} =    await grapQLClient.request(gql`
        query{
            allProducts{
                image_url
                name
            }
        }
        `)
        return getAllProducts;
    }

    )
}