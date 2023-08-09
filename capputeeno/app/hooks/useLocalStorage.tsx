import { useState } from 'react';

export function useLocalStorage<T>(item: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(item);
    return storedValue ? JSON.parse(storedValue) : null;
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return {
    value,
    setValue: updateLocalStorage,
  };
}
