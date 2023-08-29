import { ReactNode } from "react";

export enum FilterType {
    'ALL','SHIRT','MUG'
}
export enum PriorityType {
    'NEWS','HIGHER_PRICE','LOWER_PRICE','BEST_SELLERS'
}

export interface FilterContextProviderProps {
  children: ReactNode;
}