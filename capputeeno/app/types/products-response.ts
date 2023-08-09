// products-response.ts

export type Product = {
    id: string;
    name: string;
    price_in_cents: number;
    image_url: string;
    // Add any other properties if needed
  };
  
  export type ProductsFetchResponse = {
    allProducts: Product[];
    // Add any other properties if needed
  };
  