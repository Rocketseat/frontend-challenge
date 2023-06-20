export interface Product {
  id: string;
  price_in_cents: number;
  description: string;
  name: string;
  sales: number;
  created_at: string;
}

export interface ProductFetchRespose {
  data: {
    allProducts: Product[];
  };
}
