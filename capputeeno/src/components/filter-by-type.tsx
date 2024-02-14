import useFilter from "@/hook/useFilter";
import { FilterTypes } from "@/types/filter-enum";
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
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterTypes) => {};

  return (
    <ListContanier>
      <Item
        selected={type === FilterTypes.ALL}
        onClick={() => handleChangeType(FilterTypes.ALL)}
      >
        TODOS OS PRODUTOS
      </Item>
      <Item
        selected={type === FilterTypes.SHIRT}
        onClick={() => handleChangeType(FilterTypes.SHIRT)}
      >
        CAMISETAS
      </Item>
      <Item
        selected={type === FilterTypes.MUG}
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        CANECAS
      </Item>
    </ListContanier>
  );
}
