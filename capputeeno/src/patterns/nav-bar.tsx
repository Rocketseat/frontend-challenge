import FilterByOrd from "@/components/filter-by-ord";
import FilterByType from "@/components/filter-by-type";
import styled from "styled-components";

const NavContanier = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-dark);
  padding: 34px 0;
`;

export default function NavBar() {
  return (
    <NavContanier>
      <FilterByType />
      <FilterByOrd />
    </NavContanier>
  );
}
