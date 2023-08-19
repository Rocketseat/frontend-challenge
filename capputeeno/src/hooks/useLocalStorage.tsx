import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T){
    const [value, setValue] = useState<T>(initialValue)



    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item,JSON.stringify(newValue));
    }

    return {
        value,
        updateLocalStorage
    }
}