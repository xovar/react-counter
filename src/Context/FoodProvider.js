import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { FoodReducer, initialState } from '../State/FoodState/FoodReducer';
import { actionTypes } from '../State/FoodState/actionTypes';

const FOOD_CONTEXT = createContext();

export default function FoodProvider({children}) {

    const [state, dispatch] = useReducer(FoodReducer,initialState);

    useEffect(() => {
        dispatch({type: actionTypes.FACTHING_START})
        fetch('http://localhost:4000/foods')
        .then(res => res.json())
        .then(data => dispatch({type: actionTypes.FACTHING_SUCCESS, payload: data}))
        .catch(()=>{
            dispatch({type: actionTypes.FACTHING_ERROR})
        })
    },[]);

    console.log(state)

    const value = {
        state,
        dispatch
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
  
