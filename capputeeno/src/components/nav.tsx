"use client"
import { styled } from "styled-components";
import FilterProducts from "./filter-products";
import Dropdown from "./dropdown";

const Container = styled.div`
    padding: 4rem 10rem;
    display: flex;
    flex-direction: column;
    div{
      display: flex;
      justify-content: space-between;
      align-items: first baseline;
      height: 1.25rem;
    }
  `



export default function Nav(){
  return (
    <Container>
      <div>
        <FilterProducts/>
        <Dropdown/>
      </div>
      <div></div>
    </Container>
  )
}
