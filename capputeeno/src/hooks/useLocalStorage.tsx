import { useState } from "react"

export function useLocalStorage<T>(key:string) {
const [value, setValue] = useState(() => {
  const itemValue = localStorage.getItem(key ?? '');
  return itemValue ? JSON.parse(itemValue) : undefined;
});    
const updateLocalStorage = (newValue:T ) => {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return{
        value,
        updateLocalStorage
    }
    

}