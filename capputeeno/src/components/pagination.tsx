import styled from "styled-components";
import ArrowIcon from "./icons/arrow";
import useFilter from "@/hook/useFilter";

interface BtnProps {
  $focus?: boolean | undefined;
}

const Contanier = styled.div`
  width: 244px;
  height: 32px;

  display: flex;
  gap: 2px;
  justify-content: center;
  text-align: center;

  div {
    display: flex;
    gap: 4px;
    margin-left: 6px;
  }
`;

const Btn = styled.span<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 8px;
  line-height: 24px;
  cursor: pointer;
  font-weight: ${(props) => (props.$focus ? 600 : 400)};

  color: ${(props) => (props.$focus ? "var(--color-orange-low)" : "#737380")};
  background-color: ${(props) => (props.$focus ? "transparent" : "#e9e9f0")};
  border: 1px solid
    ${(props) => (props.$focus ? "var(--color-orange-low)" : "transparent")};
`;

export default function Pagination() {
  const { page, setPage } = useFilter();

  const handlerArrowClick = (value: number) => {
    if (page + value < 1 || page + value > 5) return;
    setPage(page + value);
  };

  return (
    <Contanier>
      <Btn $focus={page === 1} onClick={() => setPage(1)}>
        1
      </Btn>
      <Btn $focus={page === 2} onClick={() => setPage(2)}>
        2
      </Btn>
      <Btn $focus={page === 3} onClick={() => setPage(3)}>
        3
      </Btn>
      <Btn $focus={page === 4} onClick={() => setPage(4)}>
        4
      </Btn>
      <Btn $focus={page === 5} onClick={() => setPage(5)}>
        5
      </Btn>
      <div>
        <Btn onClick={() => handlerArrowClick(-1)}>
          <ArrowIcon direction="left" />
        </Btn>
        <Btn onClick={() => handlerArrowClick(1)}>
          <ArrowIcon direction="right" />
        </Btn>
      </div>
    </Contanier>
  );
}
