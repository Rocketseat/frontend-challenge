"use client";

import Link from "next/link";
import styled from "styled-components";
import { InputPrimaryWithSeach } from "@/components/input-primary";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: ["400"],
});

const ContanierHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;
`;

const Logo = styled(Link)`
  color: var(--color-logo);
  font-size: 40px;
  line-height: 60px;
  letter-spacing: 0em;
  cursor: pointer;
  text-decoration: none;
`;

export default function Header() {
  return (
    <ContanierHeader>
      <Logo href="/" className={sairaStencil.className}>
        capputeeno
      </Logo>
      <div>
        <InputPrimaryWithSeach placeholder="Procurando por algo específico?" />
      </div>
    </ContanierHeader>
  );
}
