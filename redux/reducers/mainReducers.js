import { combineReducers } from "redux";

import usersReducers from './usersReducers';
import productReducers from "./productReducers";
import { shoppingReducers } from "./shoppingReducers";





const mainReducers = combineReducers({
    usersReducers,
    productReducers,
    shoppingReducers,

});

export default mainReducers;