"use client";
import styled from "styled-components";
import NavBar from "../patterns/nav-bar";
import ProductsList from "@/patterns/products-list";
import Pagination from "@/components/pagination";

const PageContanier = styled.main`
  background-color: var(--bg-default);
  padding: 0 160px;
`;

const FooterContanier = styled.footer`
  display: flex;
  justify-content: end;
  padding: 74px 0 60px 0;
`;

export default function Home() {
  return (
    <PageContanier>
      <NavBar />
      <ProductsList />
      <FooterContanier>
        <Pagination />
      </FooterContanier>
    </PageContanier>
  );
}
