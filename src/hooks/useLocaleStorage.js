import { useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [value, setStoredValue] = useState(() => {
    const storage = window.localStorage.getItem(key);
    if (!storage) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(storage);
  });
  const setValue = newValue => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setStoredValue(newValue);
  };

  return [value, setValue];
};
