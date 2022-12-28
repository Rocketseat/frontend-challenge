/* eslint-disable jsx-a11y/alt-text */
import Box from '@mui/material/Box';
import Image from 'next/image'
import {useEffect} from 'react';

interface CardItemMinInfo {
    productName:string;
    productPrice:string;
    imageUrl:string;

}
export const CardItemMinInfo = ({productName,productPrice,imageUrl}:CardItemMinInfo)=>{
    
    
    return (
    <Box className="border rounded bg-white w-[256px] ">
        <div className="bg-white">
            
            <Image src={imageUrl}
              width={256}
              height={300}
              />
        </div>
        <div className="h-[4.875rem] bg-white">
            {/*Name*/}
            <div className="py-2 ">
                <p className="prose-base font-['Saira'] text-base leading-6	   px-3">{productName}</p>
            </div>
            <div className="w-[14.25rem] h-[1px] border border-[DCE2E5] mx-auto"/>
                <div className="">
                    <p className="font-bold px-3">R$ {productPrice}</p>
                </div>

        </div>
    </Box>)
}