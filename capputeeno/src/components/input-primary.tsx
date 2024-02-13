import styled from "styled-components";
import SearchIcon from "./seach-icon";
import { InputHTMLAttributes } from "react";

export const InputPrimary = styled.input`
  position: relative;

  background-color: var(--bg-secondary);
  padding: 10px 16px;
  border-radius: 8px;
  width: 352px;
  border: none;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const InputContanier = styled.div`
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function InputPrimaryWithSeach(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <InputContanier>
      <InputPrimary {...props} />
      <SearchIcon />
    </InputContanier>
  );
}
