import ProductsResponse from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import useFilter from "./useFilter";
import mountQuery from "@/commons/mount-query";
import pagination from "@/commons/pagination";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;

const fetchFn = (query: string): AxiosPromise<ProductsResponse> => {
  return axios.post(apiUrl, { query });
};

export default function useProductsList() {
  const { type, ord, page, skip } = useFilter();

  const query = mountQuery({ type, ord });

  const { data } = useQuery({
    queryKey: ["products", type, ord],
    queryFn: () => fetchFn(query),
  });

  const products = data?.data.data.allProducts;

  const filterProducts = pagination(products, page, skip);

  return { data: filterProducts };
}
