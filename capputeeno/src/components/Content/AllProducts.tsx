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
            spacing={1}
            justifyContent="space-between"
            columns={{xs:4,md:4}}
           className=' mx-0 p-0   w-[100%] '
            gap={2}
            >
              
            { allproducts.map(({name,image_url,sales},index)=>
                <Grid item key={index}  className="py-0 px-0" >
                    <CardItemMinInfo 
                        productPrice={`${sales}`} 
                        imageUrl={image_url} 
                        productName={name}/>
                
                </Grid>                
            )}
        </Grid>
    </>  
}


    
