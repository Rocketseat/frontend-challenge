import { useLocalStorage } from "@/hooks/useLocalStorage";
import * as S from "./CartIcon.style";
import { CartIcon } from "../icons.svg";

interface CartIconProps {}

const CartComponent = ({}: CartIconProps) => {
  const { value } = useLocalStorage("cart-items", [1, 1, 2, 2]);

  return (
    <S.Container>
      <CartIcon />
      {value.length > 0 && <S.CartCount>{value.length}</S.CartCount>}
    </S.Container>
  );
};

export default CartComponent;
