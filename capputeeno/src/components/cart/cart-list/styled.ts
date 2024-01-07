import { styled } from 'styled-components'

export const Container = styled.div`
  width: 46rem;
  height: 50rem;
`
export const HeaderCartList = styled.div`
  width: 50rem;
  height: 9.375rem;
  flex-shrink: 0;
`

export const ContainerItems = styled.ul`
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-height: 80vh;
`

export const TagTitleCart = styled.h1`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 36px */
  text-transform: uppercase;
`

export const TagTotalMessage = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 24px */
`
export const TagTotalValue = styled.span`
  color: var(--shapes-dark-tooltip, #09090a);
  text-align: right;
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`
