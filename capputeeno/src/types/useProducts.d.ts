export interface Products{
    id: string,
    name: string,
    price_in_cents: number,
    image_url: string,
    category: string,
}

export interface ProductsFecthResponse {
    data:{
        allProducts:Products[]
    }
}