import cover1 from '../../../assets/cover-1.png'
import cover2 from '../../../assets/cover-2.png'
import cover3 from '../../../assets/cover-3.png'
import cover4 from '../../../assets/cover-4.png'
import cover5 from '../../../assets/cover-5.png'
import cover6 from '../../../assets/cover-6.png'

const defaultState = [
  {id: 1, name: 'Iron Man #128', price: 132.50, image: cover1 },
  {id: 2, name: 'The Amazing Spider-Man #50', price: 128.50, image: cover2 },
  {id: 3, name: 'Batman: The Killing Joke', price: 155.30, image: cover3 },
  {id: 4, name: 'Captain America #1', price: 144.00, image: cover4 },
  {id: 5, name: 'Batman #608', price: 180.23, image: cover5 },
  {id: 6, name: 'Secret Wars #8', price: 97.27, image: cover6 },
]

const productsReducer = (state = defaultState, action) => {
  return state
}

export default productsReducer
