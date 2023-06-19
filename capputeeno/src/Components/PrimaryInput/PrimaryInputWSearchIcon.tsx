import { InputHTMLAttributes } from "react";
import { SearchIcon } from "../icons.svg";
import * as S from "./PrimaryInput.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const PrimaryInputWSearchIcon = (props: InputProps) => {
  return (
    <S.InputContainer>
      <S.PrimaryInput {...props} />
      <SearchIcon />
    </S.InputContainer>
  );
};
