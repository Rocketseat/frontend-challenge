import styled from "styled-components";

interface FilterItemProps {
  selected: boolean;
}

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

export const FilterItem = styled.li<FilterItemProps>`
  /* Camisetas */
  font-family: inherit;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  /* identical to box height, or 138% */

  text-align: center;
  text-transform: uppercase;

  /* Textos Dark / Textos apoio */

  color: var(--text-dark);

  border-bottom: ${(props): any =>
    props.selected ? "4px solid var(--orange-low)" : "none"};
`;
