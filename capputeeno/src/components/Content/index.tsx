

import { Box } from "@mui/material";
import { ReactNode } from "react";

import { Tab } from "../Tab"

interface ContentProps {
    children:ReactNode;
}
export const Content = ({children}:ContentProps)=>{
  
    return (
        <>
            <div className=" mb-20 border border-1 border-yellow-500 ">
                <div className="flex">
                    <Tab text="Todos os produtos" active={true}/> 
                    <Tab text="Camisetas" active={false}/>
                    <Tab text="Canecas" active={false}/>
                </div>  
            </div>
            <Box className="m-auto border border-1 border-green-500 w-full">
                {children}
            </Box>
        </>
    )
}