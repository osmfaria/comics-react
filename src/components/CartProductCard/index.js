import { Container } from './styles'
import { HiOutlineTrash } from 'react-icons/hi'
import { removeFromCartThunk, editCartThunk } from '../../store/modules/cart/thunks'
import { useDispatch } from 'react-redux'

export default function CartProductCard({
  product: { id, name, price, image, quantity },
}) {

  const currencyPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const dispatch = useDispatch()



  return (
    <Container>
      <img src={image} alt='comic cover' />
      <div className='info'>
        <p>{name}</p>
        <span>{currencyPrice}</span>
      </div>
      <span onClick={() => dispatch(removeFromCartThunk(id))}>
        <HiOutlineTrash />
      </span>
      <div className='quantity'>
        <span>Qty:</span>
        <input
          value={quantity}
          type='number'
          min='1'
          max='5'
          step='1'
          onChange={(event) => dispatch(editCartThunk(id, event.target.value))}
        />
      </div>
    </Container>
  )
}
