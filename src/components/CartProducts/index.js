import { useSelector } from 'react-redux'
import { Container } from './styles'

import CartProductCard from '../CartProductCard'

export default function CartProducts() {
  const cartProducts = useSelector(({ cart }) => cart)

  return (
    <Container>
        {cartProducts.map(( product ) => (
          <CartProductCard product={product} key={product.id} />
        ))}
    </Container>
  )
}
