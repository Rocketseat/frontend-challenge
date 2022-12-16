

import { Tab } from "../Tab"
import { AllProducts } from "./AllProducts"

export const Content = ()=>{
  
    return (
        <>
        <div className=" flex   m-auto mb-20 ">
            <div className="flex ">
            <Tab text="Todos os produtos" active={true}/> <Tab text="Camisetas" active={false}/><Tab text="Canecas" active={false}/>
            </div>  
        </div>
        <div>
                {/* CATALOGOS */}
              <AllProducts/>
            </div>

            <div>
                {/* CAMISETAS */}
            </div>

            <div>
                {/* CANECAS */}
            </div>
            </>
    )
}