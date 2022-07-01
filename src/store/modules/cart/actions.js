import { REMOVE_FROM_CART, ADD_TO_CART, EDIT_CART } from './actionTypes'

export const addToCart = (productList) => ({
  type: ADD_TO_CART,
  productList,
})

export const removeFromCart = (productList) => ({
  type: REMOVE_FROM_CART,
  productList,
})

export const editCart = (productList) => ({
  type: EDIT_CART,
  productList,
})

