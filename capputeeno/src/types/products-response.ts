import { Product } from "./product"

export interface ProductsFetchResponse {
    data: {
        allProducts: Product[]
    }
}