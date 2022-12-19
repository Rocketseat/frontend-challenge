import {useEffect,useState} from 'react'

import { Product } from '../../@types/types';
import { CardItemMinInfo } from "../CardItemMinInfo";

interface AllProductsProps{
    products:object;
}

export const AllProducts = ({products}:AllProductsProps)=>{
    const [allproducts,_setAllProducts] = useState<Product[]>(Object.values(products)[0]);
  
    useEffect(()=>{
        console.log(allproducts);
    },[])

    return<>
        <div>
            { allproducts.map(({name,imageURl,sales},index)=> <CardItemMinInfo productPrice={`${sales}`} key={index} imageUrl={imageURl} productName={name} />)}
        </div>
    </>  
}


    
