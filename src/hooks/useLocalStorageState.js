import { useEffect, useState } from 'react';

export default function useLocalStorageState(key, defaultValue) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key)) || defaultValue;
    } catch (error) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
