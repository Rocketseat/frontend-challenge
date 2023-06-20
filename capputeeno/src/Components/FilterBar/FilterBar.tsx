"use client";
import FilterByOrder from "../FilterByOrder/FilterByOrder";
import FilterByType from "../FilterByType/FilterByType";
import * as S from "./FilterBar.style";

interface FilterBarProps {}

const FilterBar = ({}: FilterBarProps) => {
  return (
    <S.Container>
      <FilterByType />
      <FilterByOrder />
    </S.Container>
  );
};

export default FilterBar;
