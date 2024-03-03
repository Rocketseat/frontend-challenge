export default interface Product {
  name: string;
  price_in_cents: string;
  image_url: string;
  id: string;
}

export interface ProductDetails extends Product {
  description: string;
  category: string;
}
