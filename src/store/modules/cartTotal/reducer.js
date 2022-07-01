import { CALCULATE_TOTAL } from './actionTypes'

const cartTotalReducer = (state = 0, action) => {
  switch (action.type) {
    case CALCULATE_TOTAL:
      return action.total

    default:
      return state
  }
}

export default cartTotalReducer
