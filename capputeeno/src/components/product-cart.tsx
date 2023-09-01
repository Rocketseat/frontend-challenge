import { formatPrice } from '@/utils/format-price'
import { Trash } from '@phosphor-icons/react'
import { styled } from 'styled-components'

const ContainerItem = styled.li`
  width: 46rem;
  height: 13.1875rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--shapes-01, #fff);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
const TagContainerNameItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  align-items: center;
  height: 4rem;
  padding: 0 0.75rem;
`
const TagImgItem = styled.img`
  width: 16rem;
  height: 13.1875rem;
  flex-shrink: 0;
`
const DescriptionContaner = styled.div`
  width: 28rem;
  height: 5rem;
`

const ContainerResult = styled.div`
  width: 28rem;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const TagNameProduct = styled.h3`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 30px */
`

const TagDescriptionProd = styled.p`
  color: var(--textos-dark-inputs-icons, #41414d);
  font-family: Saira;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`

const TagPriceValue = styled.p`
  color: var(--shapes-dark-tooltip, #09090a);
  text-align: right;
  font-family: Saira;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`

const ContainerTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`

const TagSelect = styled.select`
  width: 65px;
  height: 40px;
  flex-shrink: 0;
`
export default function ProductCart() {
  return (
    <ContainerItem>
      <TagImgItem src="" alt="" />
      <ContainerTag>
        <TagContainerNameItem>
          <TagNameProduct>Caneca de cerâmica rústica</TagNameProduct>
          <Trash />
        </TagContainerNameItem>
        <DescriptionContaner>
          <TagDescriptionProd>
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </TagDescriptionProd>
        </DescriptionContaner>
        <ContainerResult>
          <TagSelect name="quantity">
            <option value="valor1" selected>
              Valor 1
            </option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
          </TagSelect>

          <TagPriceValue>{formatPrice(89)}</TagPriceValue>
        </ContainerResult>
      </ContainerTag>
    </ContainerItem>
  )
}
