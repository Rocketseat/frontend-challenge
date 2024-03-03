import styled from "styled-components";

interface BtnProps {
  direction?: string;
}

interface ArrowProps {
  direction?: "left" | "right" | "up";
}

const ContanierSvg = styled.svg<BtnProps>`
  transition: 0.5s;
  transform: ${(props) => props.direction};
`;

const TransformInCss = ({ direction }: ArrowProps) => {
  switch (direction) {
    case "left":
      return "rotate(0.25turn)";
    case "right":
      return "rotate(0.75turn)";
    case "up":
      return "rotate(0.5turn)";
    default:
      return "";
  }
};

export default function ArrowIcon({ direction }: ArrowProps) {
  const cssString = TransformInCss({ direction });

  return (
    <ContanierSvg
      direction={cssString}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L12 14L16 10"
        stroke="#737380"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ContanierSvg>
  );
}
