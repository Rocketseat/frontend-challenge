import { ProductsDetailsResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fecthFn = (productId: string): AxiosPromise<ProductsDetailsResponse> => {
  return axios.post(API_URL, {
    query: `
        query {
            Product(id: "${productId}"){
            name
            description
            category
            price_in_cents
            image_url
            id
            }
        }
  `,
  });
};

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fecthFn(id),
    queryKey: ["product", id],
    enabled: !!id,
  });

  return {
    data: data?.data?.data?.Product,
  };
}
