import { GraphQLClient } from 'graphql-request';
import { baseURL } from './requestion';

export const grapQLClient = new GraphQLClient(baseURL,{
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})