import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
    favored_product: [],
}


export const productReducer = (state = initialState.products, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products : payload};
    
        default:
            return state;
    }
}

export const addFavoredProductReducer = (state=initialState.favored_product,{type,payload}) => {
    // const itemName = payload.product.id
    switch (type) {
        case ActionTypes.ADD_SELECTED_PRODUCT:
            const itemName = payload.product.id
            return {
                ...state,
                 [itemName]:payload
                }
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            const itemId = payload.product.id
            delete state[itemId]
            return  state
        case ActionTypes.CLEAR_LIST:
            return  {}
        default:
            return state;
    }
}