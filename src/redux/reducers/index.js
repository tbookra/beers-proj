import { combineReducers } from "redux";
import {  addFavoredProductReducer } from "./productReducer";

const reducers = combineReducers({
    // allProducts: productReducer,
    favored_product: addFavoredProductReducer,
    // favoredList: favoredListReducer,
})

export default reducers