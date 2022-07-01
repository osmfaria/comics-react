import { Container } from './styles'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { useSelector, useDispatch } from 'react-redux'
import { calculateTotalThunk } from '../../store/modules/cartTotal/thunks'
import { useEffect } from 'react'

export default function CartInfo() {
  const dispatch = useDispatch()

  const cart = useSelector(({ cart }) => cart)
  const total = useSelector(({ cartTotal }) => cartTotal)

  const currencyTotal = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const numberOfProducts = cart.reduce((total,{quantity}) => total + quantity, 0)

  useEffect(() => {
    dispatch(calculateTotalThunk())
  }, [cart])

  return (
    <Container>
      <h2>
        <BsFillCartCheckFill color='#13AA52' /> Resumo do pedido
      </h2>
      <div>
        {numberOfProducts > 1 ? (
          <p>{numberOfProducts} Produtos</p>
        ) : (
          <p>{numberOfProducts} Produto</p>
        )}
        <span>Total: {currencyTotal}</span>
      </div>
      <button>Finalizar pedido</button>
    </Container>
  )
}
