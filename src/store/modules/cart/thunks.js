import { addToCart, removeFromCart, editCart } from './actions'

export const addToCartThunk = (product) => (dispatch, getStore) => {
 const { cart } = getStore()

  const productInCart = cart.find(({ id }) => id === product.id)

  if (!!productInCart) {

    const updatedProductList = cart.map((product) => {
      if (product.id === productInCart.id)
        return { ...product, quantity: product.quantity + 1 }
      else return product
    })
    
    localStorage.setItem('@KenzieShop:cart', JSON.stringify(updatedProductList))
    dispatch(addToCart(updatedProductList))
 
  } else {
    const updatedProduct = { ...product, quantity: 1 }
    const updatedProductList = [...cart, updatedProduct]

    localStorage.setItem('@KenzieShop:cart', JSON.stringify(updatedProductList))
    dispatch(addToCart(updatedProductList))
  }
}

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore()
  
  const updatedProductList = cart.filter((product) => product.id !== id)

  localStorage.setItem('@KenzieShop:cart', JSON.stringify(updatedProductList))

  dispatch(removeFromCart(updatedProductList))
}

export const editCartThunk = (id, quantity) => (dispatch, getStore) => {
  const { cart } = getStore()

  const updatedProductList = cart.map((product) => {
      if (product.id === id)
        return { ...product, quantity: Math.floor(quantity) };
      else return product;
  })

  localStorage.setItem('@KenzieShop:cart', JSON.stringify(updatedProductList))

  dispatch(editCart(updatedProductList))
}
