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
           
            // let arr1 = []
            // for(const item in state){
            //     arr1.push(state[item]);
            // }
            // console.log('arr1',arr1);
            // console.log('filtered',arr1.map(item => item.product).filter(item => item.id !== itemId));
          
            const clone = structuredClone(state)
            delete clone[itemId]
            return  clone
           
        case ActionTypes.RATE_BEER:
            const {id} = payload
     
            return {
                ...state,
               [id]: {
                ...state[id],
                product: {
                    ...state[id].product,
                    rate: payload.val
                }
            }
            }
          
        case ActionTypes.CLEAR_LIST:
            return  {}
        default:
            return state;
    }
}