import { CALCULATE_TOTAL } from './actionTypes'

export const calculateTotal = (total) => ({
  type: CALCULATE_TOTAL,
  total,
})
