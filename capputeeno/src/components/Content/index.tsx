import { CardItemMinInfo } from "../CardItemMinInfo"
import { Tab } from "../Tab"

export const Content = ()=>{


    return (
        <>
        <div className=" flex   m-auto border-2 border-white ">
            <div className="flex ">
            <Tab text="TEXTO TESTE" active={true}/> <Tab text="AAA TESTE" active={false}/>
            </div>
            <h1>TITULO CENTRALIZADO</h1>

            
        </div>
        <div>
                {/* CATALOGOS */}
                <CardItemMinInfo productName="Caneca de cerâmica rústica" productprice="40,00"/>
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