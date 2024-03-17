export interface FilterContextProviderProps {
  children: ReactNode
}
export enum FilterType {
  all = 'allProducts',
  shirt = 't-shirts',
  mugs = 'mugs',
}
export enum sortField {
  news = 'news',
  price_in_cents = 'price_in_cents',
  sales = 'sales',
}
export enum sortOrder {
  ASI = 'ASC',
  DSC = 'DSC',
}

type SortFieldState = {
  sortField: sortField
  sortOrder: sortOrder
}

export type FilterStateType = FilterType
