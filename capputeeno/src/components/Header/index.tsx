import { SearchItem } from "../SearchItem"

export const Header = ()=>{


    return(
    <div className="blue h-20 flex  justify-center bg-white">
        <div className="w-4/5 flex justify-between items-center border-1 border-zinc-700	">
            <div>
                <img src="/images/capputeeno.svg" alt="Capputeeno" />
            </div>
            <div className="flex justify-center w-3/6">
                <div>
                    <SearchItem/>
                </div>
                <img className="ml-8" src="/images/shopping-bag.svg" alt="shopping-bag" />
            </div>
        </div>
    </div>
    )
}