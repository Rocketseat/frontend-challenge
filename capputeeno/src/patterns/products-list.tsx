import ProductCard from "@/components/card-product";
import useProductsList from "@/hook/useProductsList";
import styled from "styled-components";

const ProductsListContanier = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 32px;
  column-gap: 24px;
`;

export default function ProductsList() {
  const { data } = useProductsList();
  return (
    <ProductsListContanier>
      {data?.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </ProductsListContanier>
  );
}
