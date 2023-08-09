import axios from 'axios';
import { useQuery } from 'react-query';
import { ProductsFetchResponse, Product } from '../types/products-response';
import { useFilter } from './useFilter';
import { FilterType } from '../types/filter-types';
import { getCategoryByType } from './get-category-by-type';

require('dotenv').config();

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333';

const fetcher = async (query: string): Promise<Product[]> => {
  const response = await axios.post(apiUrl, { query });
  return response.data.data.allProducts;
};

const mountQuery = (type: FilterType) => {
  if (type === FilterType.ALL) {
    return `query {
      allProducts {
        id
        name
        price_in_cents
        image_url
      }
    }`;
  }

  return `
    query {
      allProducts(filter: { category: "${getCategoryByType(type)}" }) {
        id
        name
        price_in_cents
        image_url
        category
      }
    }
  `;
};

export function useProducts() {
  const { type } = useFilter();
  const query = mountQuery(type);
  const { data, error } = useQuery<Product[], Error>({
    queryFn: () => fetcher(query),
    queryKey: ['products', type],
    onError: (err) => {
      console.error('Error fetching products: ', err);
    },
  });

  return {
    data,
    error,
  };
}
