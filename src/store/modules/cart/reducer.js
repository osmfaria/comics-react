import { ADD_TO_CART, EDIT_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return action.productList
    
    case REMOVE_FROM_CART:
      return action.productList

    case EDIT_CART:
      return action.productList

    default:
      return state
  }
}

export default cartReducer