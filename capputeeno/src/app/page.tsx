"use client"

import Nav from "@/components/nav";
import PageControl from "@/components/page-control";
import ProductList from "@/components/product-list";
import { styled } from "styled-components";

const ContainerHome = styled.div`
margin-bottom: 3rem;
padding: 2rem 5rem;
`

export default function Home(){

  return (
    <ContainerHome>
      <Nav/>
      <ProductList/>
      <PageControl/>
    </ContainerHome>
  )
}
