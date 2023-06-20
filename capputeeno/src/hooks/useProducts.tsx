import { ProductFetchRespose } from "@/types/ProductTypes";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function fetcher(): AxiosPromise<ProductFetchRespose> {
  return axios.post(API_URL, {
    query: `query{
        allProducts{
        id
        price_in_cents
        description
        name
        sales
        created_at
      }
    }`,
  });
}

export const useProducts = () => {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data.allProducts,
  };
};
