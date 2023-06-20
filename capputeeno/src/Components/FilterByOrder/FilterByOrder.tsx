import { useState } from "react";
import { DropDownIcon } from "../icons.svg";
import * as S from "./FilterByOrder.style";
import { OrderTypes } from "@/types/OderTypes";
import { useFilterContext } from "@/Context/FilterContext/FilterContext";

interface FilterByOrderProps {}

const FilterByOrder = ({}: FilterByOrderProps) => {
  const { setOrder } = useFilterContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdateOrder = (value: OrderTypes) => {
    setOrder(value);
    setIsOpen(false);
  };
  return (
    <S.Container>
      <button onClick={() => handleOpen()}>
        Organizar por
        <DropDownIcon />
      </button>
      {isOpen && (
        <S.OrderFilter>
          <li onClick={() => handleUpdateOrder(OrderTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdateOrder(OrderTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdateOrder(OrderTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdateOrder(OrderTypes.POPULARITY)}>
            Mais Vendidos
          </li>
        </S.OrderFilter>
      )}
    </S.Container>
  );
};

export default FilterByOrder;
