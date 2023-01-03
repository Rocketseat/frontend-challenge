

import { Box } from "@mui/material";
import { ReactNode } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Tab } from "../Tab"
import { Filter } from "../Filter";

interface ContentProps {
    children:ReactNode;
}
export const Content = ({children}:ContentProps)=>{
  
    return (
        <>
            <div className=" mb-20 flex justify-between">
                <div className="flex">
                    <Tab text="Todos os produtos" active={true}/> 
                    <Tab text="Camisetas" active={false}/>
                    <Tab text="Canecas" active={false}/>
                </div>  
                <Filter/>
            </div>
            <Box >
                {children}
            </Box>
        </>
    )
}