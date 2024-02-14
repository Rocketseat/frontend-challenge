import { useState } from "react";
import styled from "styled-components";
import ArrowDownIcon from "./icons/arrow-down";
import { FilterOrdTypes } from "@/types/filter-enum";

const FilterContanier = styled.div`
  position: relative;
`;

const SelectContanier = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  height: 24px;
  gap: 8px;
  cursor: pointer;

  p {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
  }
`;

const BoxItems = styled.ul`
  position: absolute;
  margin-top: 4px;
  bottom: -1;
  right: 0;
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 176px;
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px #0000001a;
  padding: 12px 16px;
  gap: 4px;
  list-style: none;
  li {
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }
`;

export default function FilterByOrd() {
  const [isActive, setIsActive] = useState(false);

  const handleUpdate = (value: FilterOrdTypes) => {};

  return (
    <FilterContanier>
      <SelectContanier onClick={() => setIsActive(true)}>
        <p>Organizar por</p>
        <ArrowDownIcon />
      </SelectContanier>
      {isActive && (
        <BoxItems>
          <li onClick={() => handleUpdate(FilterOrdTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdate(FilterOrdTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdate(FilterOrdTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdate(FilterOrdTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </BoxItems>
      )}
    </FilterContanier>
  );
}
