import {AiOutlineSearch} from  'react-icons/ai'

export const SearchItem = ()=>{

    return(

        <div className='flex justify-items-center'>
            <input  placeholder="Procurando por algo especifico?" className="text-stone-500 min-w-4 w-96 max-w-96  h-11 px-4 py-2.5 focus-visible:border-0"/>

            <div className='flex justify-items-center text-center'>
                <AiOutlineSearch className="m-auto decoration-neutral-500" />
            </div>
            
        </div>
        
    )

}