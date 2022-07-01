import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { Container, Content } from "./styles";

const Products = () => {
  const products = useSelector(({products}) => products)

  return (
    <Container>
      <Content>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Content>
    </Container>
  )

}

export default Products