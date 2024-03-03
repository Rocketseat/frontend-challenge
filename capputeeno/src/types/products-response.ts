import Product from "./product";
import { ProductDetails } from "./product";

export default interface ProductsResponse {
  data: { allProducts: Product[] };
}

export interface ProductsDetailsResponse {
  data: { Product: ProductDetails };
}
