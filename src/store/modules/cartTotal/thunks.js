import { calculateTotal } from './actions'

export const calculateTotalThunk = () => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem('@KenzieShop:cart')) || []

  if (cart.length > 0) {
    const total = cart.reduce((total, { price, quantity }) => total + price * quantity, 0)
    dispatch(calculateTotal(total))
  } else {
    dispatch(calculateTotal(0))
  }
}
