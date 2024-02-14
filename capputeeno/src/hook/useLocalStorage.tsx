/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useLocalStorage(context: string) {
  const [storage, setStorage] = useState([]);

  useEffect(() => {
    if (typeof localStorage === "undefined") return;
    const value = JSON.parse(localStorage.getItem(context) ?? "[]");
    setStorage(value);
  }, []);

  const uptadeStorage = (value: []) => {
    setStorage(value);
    localStorage.setItem(context, JSON.stringify(value));
  };

  return { storage, uptadeStorage };
}
