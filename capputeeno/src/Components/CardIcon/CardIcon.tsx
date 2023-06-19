import { useLocalStorage } from "@/hooks/useLocalStorage";
import * as S from "./CardIcon.style";
import { CartIcon } from "../icons.svg";

interface CardIconProps {}

const CardComponent = ({}: CardIconProps) => {
  const { value } = useLocalStorage("card-items", [1, 1, 2, 2]);

  return (
    <S.Container>
      <CartIcon />
      {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
    </S.Container>
  );
};

export default CardComponent;
