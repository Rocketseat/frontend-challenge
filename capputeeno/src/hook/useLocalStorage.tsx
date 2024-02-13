import { useState } from "react";

export default function useLocalStorage<T>(context: string) {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem(context) ?? "[]")
  );

  const uptadeStorage = (value: T) => {
    setStorage(value);
    localStorage.setItem(context, JSON.stringify(value));
  };

  return { storage, uptadeStorage };
}
