import { actionTypes } from "./actionTypes";

export const  initialState = {
    loading: false,
    foods: [],
    error: false
};

export const FoodReducer = (state, action) => {
    switch(action.type){
        case actionTypes.FACTHING_START:
        return {
            ...state,
            loading : true,
            error: false
        }
        case actionTypes.FACTHING_SUCCESS:
            return {
                ...state,
                loading: false,
                foods: action.payload,
                error: false
            }
        case actionTypes.FACTHING_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }

        default:
            return state;
    }
}