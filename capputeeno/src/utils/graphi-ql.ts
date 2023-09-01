import { FilterType } from '@/context/filter-context'
import { Products, ProductsApi } from '@/types/useProducts'

export function graphiQlQuerys(
  filter: FilterType,
  sortOrder: string,
  sortField: string,
  page: number,
) {
  let query = `
    query {
      allProducts(`

  if (filter === FilterType.all) {
    query += `
        sortField: "${sortField}"
        sortOrder: "${sortOrder}"
        page:${page}


      ) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }`
  } else {
    query += `
        filter: { category: "${filter}" }
        sortField: "${sortField}"
        sortOrder: "${sortOrder}"
        page:${page}


      ) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }`
  }

  return query
}

export function queryProductById(id: string): string {
  return `
  query {
    Product(id: "${id}"){
      name
      description
      category
      price_in_cents
      image_url
    }
  }
  `
}

export function mapApiProductsToInternal(
  apiProducts: ProductsApi[],
): Products[] {
  return apiProducts.map((apiProduct) => ({
    category: apiProduct.category,
    id: apiProduct.id,
    imageUrl: apiProduct.image_url,
    name: apiProduct.name,
    priceInCents: apiProduct.price_in_cents,
  }))
}
