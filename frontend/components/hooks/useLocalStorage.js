import { useState } from "react";

export function useLocalStorage(key, value) {
    const [ val, setVal ] = useState(() => {
      const init = localStorage.getItem(key)
      return init ? JSON.parse(init) : value
    }) 
    const setValueLs = value => {
      setVal(value)
      localStorage.setItem(key, JSON.stringify(value))
    }
    return [val, setValueLs]
  }