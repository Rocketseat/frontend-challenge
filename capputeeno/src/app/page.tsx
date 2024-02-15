"use client";
import styled from "styled-components";
import NavBar from "../patterns/nav-bar";
import ProductsList from "@/patterns/products-list";

const PageContanier = styled.main`
  background-color: var(--bg-default);
  padding: 0 160px;
  height: 100%;
`;

export default function Home() {
  //testing components childrens
  return (
    <PageContanier>
      <NavBar />
      <ProductsList />
    </PageContanier>
  );
}
