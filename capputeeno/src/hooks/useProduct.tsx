import { ProductFetchResponse } from '@/types/use-product'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (id: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `
  query {
    Product(id: "${id}"){
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  `,
  })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
  })
  const response = data?.data.data.Product
  return {
    data: response,
  }
}
