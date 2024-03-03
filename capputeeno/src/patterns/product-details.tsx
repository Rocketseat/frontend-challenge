import { formatPrice } from "@/commons/format-price";
import CartIcon from "@/components/icons/cart";
import { ProductDetails } from "@/types/product";
import Image from "next/image";
import styled from "styled-components";

const ImageContanier = styled.div`
  position: relative;
  width: 640px;
  height: 580px;
  border-radius: 4px;
`;

const MainContanier = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding-bottom: 89px;
`;

const ContentContenier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 448px;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-darker);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: var(--text-darker);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-darker);
  }

  div {
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const BtnAddCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  height: 44px;
  border-radius: 4px;
  background-color: #115d8c;
  font-weight: 500;
  line-height: 24px;
  color: #f5f5fa;
`;

export default function ProductDetails({ data }: { data: ProductDetails }) {
  const handleClickCart = () => {
    let cartItems = localStorage.getItem("cart-items");
    if (cartItems) {
      let cartItemsArray = JSON.parse(cartItems);

      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === data.id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: data.id });
      }

      localStorage.setItem("cart-items", JSON.stringify(cartItemsArray));
    } else {
      const newCart = [{ ...data, quantity: 1, id: data.id }];
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
    alert("Item adicionado no carrinho");
  };
  return (
    <MainContanier>
      <ImageContanier>
        <Image
          src={data.image_url}
          alt={data.name}
          fill
          sizes="max-inline-size: 100%"
        />
      </ImageContanier>
      <ContentContenier>
        <Details>
          <span>{data?.category}</span>
          <h2>{data?.name}</h2>
          <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
          <p>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>
          <div>
            <h3>Descrição</h3>
            <p>{data?.description}</p>
          </div>
        </Details>
        <BtnAddCart onClick={() => handleClickCart()}>
          <CartIcon color="#F5F5FA" />
          Adicionar ao carrinho
        </BtnAddCart>
      </ContentContenier>
    </MainContanier>
  );
}
