import { useFilterContext } from "@/Context/FilterContext/FilterContext";
import * as S from "./FilterByType.style";
import { FilterType } from "@/types/FilterTypes";

interface FilterByTypeProps {}

const FilterByType = ({}: FilterByTypeProps) => {
  const { type, setType } = useFilterContext();

  const changeType = (type: FilterType) => {
    setType(type);
  };

  return (
    <S.FilterList>
      <S.FilterItem
        onClick={() => changeType(FilterType.ALL)}
        selected={type === FilterType.ALL ? true : false}
      >
        Todos os produtos
      </S.FilterItem>
      <S.FilterItem
        onClick={() => changeType(FilterType.SHIRT)}
        selected={type === FilterType.SHIRT ? true : false}
      >
        Camisetas
      </S.FilterItem>
      <S.FilterItem
        onClick={() => changeType(FilterType.MUG)}
        selected={type === FilterType.MUG ? true : false}
      >
        Canecas
      </S.FilterItem>
    </S.FilterList>
  );
};

export default FilterByType;
