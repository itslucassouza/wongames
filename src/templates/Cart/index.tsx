import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Base from 'templates/Base'
// import * as S from './styles'

const Cart = () => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        My Cart
      </Heading>
      {/* <Divider /> */}
    </Container>
  </Base>
)

export default Cart
