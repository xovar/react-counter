import React, { createContext, useContext, useEffect, useState } from 'react'

const FOOD_CONTEXT = createContext();

export default function FoodProvider({children}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/foods')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    const value = {
        data,
    }

  return (
    <FOOD_CONTEXT.Provider value={value}>
        {children}
    </FOOD_CONTEXT.Provider>
  )
}

export const useFood = () => {
    const context = useContext(FOOD_CONTEXT);
    return context;
}
  
