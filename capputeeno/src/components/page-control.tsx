import useFilters from "@/hooks/useFilters";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 0.625rem;
`;

interface ButtonProps {
  isActive?: boolean;
}

const Button = styled.button<ButtonProps>`
  height: 2rem;
  width: 2rem;
  background-color: #e8e8f0;
  border-radius: 8px;
  background-color: ${({ isActive, theme }) =>
    isActive ? "#f4f4f9" : "#e8e8f0"};
  border: 1px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.orangeFlow : "#e8e8f0"};
  cursor: pointer;

  span {
    font-family: "Saira-Regular", Helvetica;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.basetext};
  }
`;

export default function PageControl() {
  const { setPage, page } = useFilters();

  const handlePlus = () => {
    if (page < 5) {
      const value = page + 1;
      setPage(value);
    }
  };

  const handleMinus = () => {
    if (page > 1) {
      const value = page - 1;
      setPage(value);
    }
  };

  return (
    <Container>
      {[1, 2, 3, 4, 5].map((pageNumber) => (
        <Button key={pageNumber} isActive={pageNumber === page}>
          <span>{pageNumber}</span>
        </Button>
      ))}
      <Button onClick={handleMinus}>
        <ArrowLeft />
      </Button>
      <Button onClick={handlePlus}>
        <ArrowRight />
      </Button>
    </Container>
  );
}
