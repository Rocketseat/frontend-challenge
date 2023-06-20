import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 16px;
    }
  }
`;

export const OrderFilter = styled.ul`
  /* Rectangle 27 */
  align-items: center;
  width: 176px;

  position: absolute;
  padding: 12px 16px;
  font-family: inherit;

  top: 100%;
  background: var(--white);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  li {
    list-style: none;
    color: var(--text-dark);
    font-size: 14px;
    cursor: pointer;
  }
  li + li {
    margin-top: 4px;
  }
`;
