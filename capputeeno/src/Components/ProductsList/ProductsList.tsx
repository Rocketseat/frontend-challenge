"use Client";
import { useProducts } from "@/hooks/useProducts";
import * as S from "./ProductsList.style";

interface ProductsListProps {}

const ProductsList = ({}: ProductsListProps) => {
  const { data } = useProducts();

  return <S.ProductsListContainer></S.ProductsListContainer>;
};

export default ProductsList; 
