import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";

import thunk from 'redux-thunk'
import cartReducer from "./modules/cart/reducer";
import cartTotalReducer from "./modules/cartTotal/reducer";

import productsReducer from "./modules/products/reducer";

const reducers = combineReducers({products: productsReducer, cart: cartReducer, cartTotal: cartTotalReducer })

const store = createStore(reducers, applyMiddleware(thunk))

export default store