import CartProducts from '../../components/CartProducts'
import CartInfo from '../../components/CartInfo'
import EmptyCart from '../../components/EmptyCart'

import { Container, Content } from './styles'
import { useSelector } from 'react-redux'

export default function Cart() {
  
  const cart = useSelector(({cart}) => cart)
  console.log(cart)

  return (
    <Container>
      {cart.length > 0 ? (
        <Content>
          <CartProducts />
          <CartInfo />
        </Content>
      ) : (
        <EmptyCart />
        )}
    </Container>
  )
}
