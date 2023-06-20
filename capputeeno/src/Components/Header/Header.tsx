"use client";
import CartComponent from "../CartIcon/CartIcon";
import { PrimaryInputWSearchIcon } from "../PrimaryInput/PrimaryInputWSearchIcon";
import { CartIcon } from "../icons.svg";
import * as S from "./Header.style";

import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.TagHeader>
      <S.Logo className={sairaStencil.className}>Capputeeno</S.Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando algo específico?" />
        <CartComponent />
      </div>
    </S.TagHeader>
  );
};

export default Header;
