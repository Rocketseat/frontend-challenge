import axios, { AxiosPromise } from "axios";

import {
  useQuery,
} from '@tanstack/react-query'
import { graphiQlQuerys } from '@/utils/graphi-ql';
import { ProductsFecthResponse } from "@/types/useProducts";
import useFilters from "./useFilters";

export function useProducts() {
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const {type,sortFieldState} = useFilters()

const fecth = (query:string): AxiosPromise<ProductsFecthResponse> => {
    return axios.post(API_URL,{query})
}


const  query = graphiQlQuerys(type,sortFieldState.sortOrder, sortFieldState.sortField)
console.log(query)
const { data } = useQuery({
  queryKey: ['products',type,sortFieldState],
  queryFn: () => fecth(query),
})


const response = data?.data.data.allProducts
    return{
        response
    }
}