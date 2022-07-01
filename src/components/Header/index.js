import { Container } from './styles'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { useHistory, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Header() {
  const history = useHistory()
  const location = useLocation()

  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname)
  }, [location])

  const cart = useSelector(({ cart }) => cart)

  const numberOfProducts = cart.reduce(
    (total, { quantity }) => total + quantity, 0
  )

  return (
    <Container>
      <span>Kenzie Shop</span>
      <div>
        {path === '/cart' ? (
          <span onClick={() => history.push('/')}>
            <AiOutlineHome size={22} />
            <p>Home</p>
          </span>
        ) : (
          <>
            <span onClick={() => history.push('/cart')}>
              <AiOutlineShoppingCart size={25} />
              <p>Cart</p>
            </span>
            {numberOfProducts ? <div>{numberOfProducts}</div> : null}
          </>
        )}
      </div>
    </Container>
  )
}
