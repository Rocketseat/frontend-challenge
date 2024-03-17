import { sortField, sortOrder } from '@/context/filter-context'
import useFilters from '@/hooks/useFilters'
import { ArrowDown } from '@phosphor-icons/react'
import React, { useState } from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownButton = styled.button`
  display: flex;
  width: 110px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.basetext};
    text-align: center;
    font-family: Saira;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }

  svg {
    color: ${({ theme }) => theme.colors.basetext};
  }
`

interface DropdownListProps {
  open: boolean
}
const DropdownList = styled.ul<DropdownListProps>`
  position: absolute;
  top: 150%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.shapes};
  display: ${(props) => (props.open ? 'block' : 'none')};

  width: 11rem;
  height: 112px;
  flex-shrink: 0;
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 10px 8px;
`

const DropdownItem = styled.li`
  color: ${({ theme }) => theme.colors.basetext};
  font-family: Saira;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 157.143% */
  width: 9rem;
  height: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const { setSortFieldState, sortFieldState } = useFilters()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  const handleSortFieldState = (sortField: sortField, sortOrder: sortOrder) => {
    setSortFieldState({
      sortField,
      sortOrder,
    })
  }
  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        <span>Organizar por</span>
        <ArrowDown />
      </DropdownButton>
      <DropdownList open={isOpen} onClick={toggleDropdown}>
        <DropdownItem
          onClick={() => {
            handleSortFieldState(sortField.news, sortOrder.ASI)
          }}
        >
          Novidades
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            handleSortFieldState(sortField.price_in_cents, sortOrder.DSC)
          }}
        >
          Preço: Maior - menor
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            handleSortFieldState(sortField.price_in_cents, sortOrder.ASI)
          }}
        >
          Preço: Menor - maior
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            handleSortFieldState(sortField.sales, sortOrder.ASI)
          }}
        >
          Mais vendidos
        </DropdownItem>
      </DropdownList>
    </DropdownContainer>
  )
}
