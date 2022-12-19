

import { ReactNode } from "react";

import { Tab } from "../Tab"

interface ContentProps {
    children:ReactNode;
}
export const Content = ({children}:ContentProps)=>{
  
    return (
        <>
        <div className=" flex   m-auto mb-20 ">
            <div className="flex ">
            <Tab text="Todos os produtos" active={true}/> <Tab text="Camisetas" active={false}/><Tab text="Canecas" active={false}/>
            </div>  
        </div>
        <div>
            {children}
                {/* CATALOGOS */}
                {/* CANECAS */}
        </div>
        </>
    )
}