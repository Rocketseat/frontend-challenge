import { styled } from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;
export const Logo = styled.a`
  color: var(--logo-color);
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;
