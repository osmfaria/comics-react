import { Container, Content } from './styles'
import { BsCartPlusFill } from 'react-icons/bs'

export default function EmptyCart() {
  return (
    <Container>
      <Content>
        <div>
          <BsCartPlusFill />
          <h2>Seu carrinho está vazio</h2>
        </div>
        <span>Adicione produtos</span>
      </Content>
    </Container>
  )
}
