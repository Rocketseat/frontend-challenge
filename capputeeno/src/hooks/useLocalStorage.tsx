"use client"
import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key:string, initialValue:T) {
    const storedValue = localStorage.getItem(key)
    const initial = storedValue? JSON.parse(storedValue) as T:initialValue

    const [value, setValue] = useState<T>(initial)

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])

  return [value, setValue];
}