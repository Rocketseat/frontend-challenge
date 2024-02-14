"use client";
import styled from "styled-components";
import NavBar from "../patterns/nav-bar";

const PageContanier = styled.main`
  background-color: var(--bg-default);
  padding: 0 160px;
  height: 100vh;
`;

export default function Home() {
  //testing components childrens
  return (
    <PageContanier>
      <NavBar />
    </PageContanier>
  );
}
