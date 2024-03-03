"use client";
import BtnBack from "@/components/btn-back";
import { PageContanier } from "@/components/page-contanier";
import { useProduct } from "@/hook/useProduct";
import ProductDetails from "@/patterns/product-details";
import styled from "styled-components";

const BtnBackContanier = styled.div`
  padding: 25px 0 22px 0;
`;

export default function Page({
  searchParams,
}: {
  searchParams: { id: string };
}) {
  const product = useProduct(searchParams.id);

  return (
    <PageContanier>
      <BtnBackContanier>
        <BtnBack />
      </BtnBackContanier>
      {product.data && <ProductDetails data={product.data} />}
    </PageContanier>
  );
}
