import { FilterType } from "@/context/filter-context";

export function graphiQlQuerys(
    filter: FilterType, 
    sortOrder: string,
    sortField:string) {
  let query = `
    query {
      allProducts(`;
  
  if (filter === FilterType.all) {
    query += `
        sortField: "${sortField}"
        sortOrder: "${sortOrder}"
      ) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }`;
  } else {
    query += `
        filter: { category: "${filter}" }
        sortField: "${sortField}"
        sortOrder: "${sortOrder}"
      ) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }`;
  }

  return query;
}
