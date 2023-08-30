import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType, PriorityType, sortOrder } from "@/types/filter-types";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const queryAllProducts = (sort:PriorityType): string =>{
    const oder = sortOrder.ASC
    const query = `query{
        allProducts (
            sortField:"${sort}", 
            sortOrder: "${oder}"
        ){
            id,
            name
            description
            category
            price_in_cents
            image_url,

        }
    }
    `
    return query
}
const queryProductsByCategory = (category: FilterType,sort:PriorityType): string => {
  const query = `query {
  allProducts(
    sortField: "${sort}"
    filter: { category: "${category}" }  # Adicione esta linha para aplicar o filtro
  ) {
    id,
    name,
    price_in_cents,
    image_url,
    category,
    description

  }
}`
return query
}

const fetcher = (query:string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL,{  query } )
}

const mouthQuery = (type:FilterType,sort:PriorityType) => {
    const equalType = type === FilterType.ALL
    if(equalType){
        return queryAllProducts(sort)
    }
    return queryProductsByCategory(type,sort)

}
export function useProducts(){
    const {type,priotity,search} = useFilter()
    const query = mouthQuery(type,priotity)

    const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products',type,priotity]
    })
    const products = data?.data.data.allProducts

    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))


    return {
      data: filteredProducts
    }
}
