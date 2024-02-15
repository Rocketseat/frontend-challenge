import Product from "./product";

export default interface ProductsResponse {
  data: { allProducts: Product[] };
}
