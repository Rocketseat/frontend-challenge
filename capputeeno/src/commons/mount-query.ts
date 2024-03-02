import FilterContext from "@/types/filter-context";
import { FilterOrdTypes, FilterTypes } from "@/types/filter-enum";

export function getCategoryByType(type: FilterTypes) {
  if (type == FilterTypes.MUG) return "mugs";
  if (type == FilterTypes.SHIRT) return "t-shirts";
  return "";
}

export function getFieldByOrd(priority: FilterOrdTypes) {
  if (priority === FilterOrdTypes.NEWS)
    return { field: "created_at", order: "ASC" };
  if (priority === FilterOrdTypes.BIGGEST_PRICE)
    return { field: "price_in_cents", order: "ASC" };
  if (priority === FilterOrdTypes.MINOR_PRICE)
    return { field: "price_in_cents", order: "DSC" };
  return { field: "sales", order: "DSC" };
}

export default function mountQuery({ type, ord }: FilterContext) {
  if (type === FilterTypes.ALL && ord === FilterOrdTypes.POPULARITY)
    return `query {
        allProducts(sortField: "sales", sortOrder: "DSC") {
          id
          name
          price_in_cents
          image_url
        }
      }
    `;
  const sortSettings = getFieldByOrd(ord);
  const categoryFilter = getCategoryByType(type);
  return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${
    sortSettings.order
  }", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : ""}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `;
}
