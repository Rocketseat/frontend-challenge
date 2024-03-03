import ProductsResponse from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import useFilter from "./useFilter";
import mountQuery from "@/commons/mount-query";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

const fetchFn = (query: string): AxiosPromise<ProductsResponse> => {
  return axios.post(apiUrl, { query });
};

export default function useProductsList() {
  const { type, ord, page, skip } = useFilter();

  const query = mountQuery({ type, ord, page, skip });

  const { data } = useQuery({
    queryKey: ["products", type, ord, page],
    queryFn: () => fetchFn(query),
  });

  return { data: data?.data.data.allProducts };
}
