import ProductsResponse from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL as string;
const request = {
  query: `
  query{
    allProducts{
      name
      price_in_cents
      image_url
    }
  }
`,
};

const fetchFn = (): AxiosPromise<ProductsResponse> => {
  console.log("fecth");
  return axios.post(apiUrl, request);
};

export default function useProductsList() {
  const { data, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchFn,
  });

  return { data: data?.data.data.allProducts };
}
