export interface ProductsApi {
  id: string
  name: string
  price_in_cents: number
  image_url: string
  category: string
}
interface Products {
  category: string
  id: string
  imageUrl: string
  name: string
  priceInCents: number
}

export interface ProductsFecthResponse {
  data: {
    allProducts: ProductsApi[]
  }
}
