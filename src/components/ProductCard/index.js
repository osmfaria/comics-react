import React from 'react'
import { Container } from './styles'
import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../store/modules/cart/thunks'

export default function ProductCard({product, product : {name, image, price}}) {
  
  const dispatch = useDispatch()

  const currencyPrice = price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const handleClick = () => {
    dispatch(addToCartThunk(product))
  }
  
  return (
    <Container>
      <img src={image} alt='product' />
      <div></div>
      <h2>{name}</h2>
      <span>{currencyPrice}</span>
      <button onClick={() => handleClick()}>Adicionar ao carrinho</button>
    </Container>
  )
}
