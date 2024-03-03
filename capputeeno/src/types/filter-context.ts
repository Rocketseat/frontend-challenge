import { FilterOrdTypes, FilterTypes } from "./filter-enum";

export default interface FilterContext {
  type: FilterTypes;
  ord: FilterOrdTypes;
  page: number;
  skip: number;
}
