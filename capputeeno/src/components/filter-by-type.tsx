import styled from "styled-components";

interface FilterItemsProps {
  selected?: boolean;
}

const ListContanier = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

const Item = styled.li<FilterItemsProps>`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  border-bottom: ${(props) =>
    props.selected && "4px solid var(--color-orange-low)"};
`;

export default function FilterByType() {
  return (
    <ListContanier>
      <Item selected>TODOS OS PRODUTOS</Item>
      <Item>CAMISETAS</Item>
      <Item>CANECAS</Item>
    </ListContanier>
  );
}
