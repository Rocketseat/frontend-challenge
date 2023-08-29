import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import { styled } from "styled-components";

interface TFilterItemStyled {
  select: boolean;
}

const FilterItemStyled = styled.li<TFilterItemStyled>`
  /* color: var(--textos-dark-textos-apoio, #737380); */
  text-align: center;
  font-family: Saira;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: ${({ select }) => select ? "600" : "400"};
  line-height: 22px; /* 137.5% */
  border-bottom: 4px solid ${({ select }) => select ? "#FFA585" : "transparent"};
  color: "#737380";
  text-transform: uppercase;
  cursor: pointer;

`;

interface FilterItemProps {
  text: string;
  select: boolean;
  value: FilterType;
}

export default function FilterItem({ text, select, value }: FilterItemProps) {
  const {setType } = useFilter()

  const handleChangeType = (value: FilterType) => {
    setType(value)
  }
  return (
    <FilterItemStyled
      select={select}
      onClick={() => handleChangeType(value)}
    >
      {text}
    </FilterItemStyled>
  );
}
