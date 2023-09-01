import { styled } from 'styled-components'

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 10.625rem;
  gap: 15px;
`

export const ContainerInfos = styled.div`
  display: flex;
  gap: 20px;
`

export const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const TagCategory = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`
export const TagName = styled.span`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 48px */
`

export const TagPrice = styled.p`
  color: var(--shapes-dark-tooltip, #09090a);
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
`

export const TagDescription = styled.p`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`
export const TagH3 = styled.h3`
  color: var(--textos-dark-textos-apoio, #737380);
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
`
export const ButtonAddCart = styled.button`
  width: 28rem;
  height: 2.75rem;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--brand-blue, #115d8c);
  mix-blend-mode: multiply;
  border: none;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  span {
    color: var(--shapes-light-background, #f5f5fa);
    text-align: center;
    font-family: Saira;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: uppercase;
  }
  svg {
    color: var(--shapes-light-background, #f5f5fa);
  }
`
