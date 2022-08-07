import { SearchItem } from "../SearchItem"

export const Header = ()=>{


    return(
    <div className="w-screen blue h-20 flex  justify-center">
        <div className="w-4/5 flex justify-between items-center border-1 border-zinc-700	">
            <div>
                <img src="/images/capputeeno.svg" alt="Capputeeno" />

            </div>
            <div className="flex justify-between w-3/6">
                <div>
                    <SearchItem/>
                
                    
                </div>
                <img src="/images/shopping-bag.svg" alt="shopping-bag" />
 
            </div>
        </div>
    </div>
    )
}