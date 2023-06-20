import { useState } from "react";
import { DropDownIcon } from "../icons.svg";
import * as S from "./FilterByOrder.style";

interface FilterByOrderProps {}

const FilterByOrder = ({}: FilterByOrderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  return (
    <S.Container>
      <button onClick={()=> handleOpen()} >
        Organizar por
        <DropDownIcon />
      </button>
      {isOpen && (
        <S.OrderFilter>
          <li>Novidades</li>
          <li>Preço: Maior - menor</li>
          <li>Preço: Menor - maior</li>
          <li>Mais Vendidos</li>
        </S.OrderFilter>
      )}
    </S.Container>
  );
};

export default FilterByOrder;
