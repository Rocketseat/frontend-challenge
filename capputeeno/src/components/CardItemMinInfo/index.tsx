/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'


interface CardItemMinInfo {
    productName:string;
    productPrice:string;
    imageUrl:string;

}
export const CardItemMinInfo = ({productName,productPrice,imageUrl}:CardItemMinInfo)=>{

    return (
    <div className=" w-64  rounded bg-white">
        <div className="bg-white">
            {/* image */}
            <Image src={imageUrl}
              width={256}
              height={100}
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
    </div>)
}