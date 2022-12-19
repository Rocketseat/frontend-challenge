import React, { ReactNode,useState,useContext } from "react";
import { Product } from "../@types/types";

const ProductContext = React.createContext<ProductContextData>([] as Product[]);

interface ProductProviderProps{
  children:ReactNode;
}

interface ProductContextData{
  allProducts:Product[]
  addAllProducts: (newProducts: Product[]) => void
}

export const ProductProvider = ({children}:ProductProviderProps)=>{
  const [allProducts,setAllProducts] = useState<Product[]>([] as Product[]);

  const addAllProducts = (newProducts:Product[])=>{
    setAllProducts(newProducts);
  }

  return(
    <ProductContext.Provider value={{addAllProducts,allProducts}}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct():ProductContextData {
  const context = useContext(ProductContext);
  
  return context;
}
