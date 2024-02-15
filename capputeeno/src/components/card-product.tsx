import Product from "@/types/product";
import Image from "next/image";
import styled from "styled-components";

const ProductCardContanier = styled.div`
  width: 256px;
  background-color: #ffffff66;
  border-radius: 8px, 8px, 0px, 0px;

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    padding: 8px 12px;
    color: var(--text-darker);
  }

  p {
    font-weight: 600;
    line-height: 150%;
    font-size: 14px;
    color: var(--shapes-dark);
    padding: 8px 12px;
  }
`;

const ImageNext = styled.div`
  position: relative;
  width: 256px;
  height: 300px;
`;
const Divisor = styled.div`
  margin-left: 12px;
  width: 228px;
  height: 1px;
  background-color: var(--shapes-2);
`;
export default function ProductCard(props: Product) {
  return (
    <ProductCardContanier>
      <ImageNext>
        <Image
          src={props.image_url}
          alt={props.name}
          fill
          sizes="max-inline-size: 100%"
        />
      </ImageNext>
      <h3>{props.name}</h3>
      <Divisor />
      <p>{props.price_in_cents}</p>
    </ProductCardContanier>
  );
}
