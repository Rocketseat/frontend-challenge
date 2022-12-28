import { Grid } from '@mui/material';
import {useState} from 'react'

import { Product } from '../../@types/types';
import { CardItemMinInfo } from "../CardItemMinInfo";

interface AllProductsProps{
    products:object;
}

export const AllProducts = ({products}:AllProductsProps)=>{
    const [allproducts,_setAllProducts] = useState<Product[]>(Object.values(products)[0]);
  
    return<>
        <Grid 
            container 
            spacing={2} 
            justifyContent="center"
            columns={{xs:4,md:12}}
           className='border border-red-800 border-1 w-full mx-auto'
            
            >
              
            { allproducts.map(({name,image_url,sales},index)=>
                <Grid item key={index} className="border border-1 border-gray-500   " >
                    <CardItemMinInfo 
                        productPrice={`${sales}`} 
                        imageUrl={image_url} 
                        productName={name}/>
                
                </Grid>                
            )}
        </Grid>
    </>  
}


    
