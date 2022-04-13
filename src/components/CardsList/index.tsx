import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as S from './styles'

export type CardlistProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardlistProps) => (
  <>
    <Heading color="black" lineBottom size="small">
      My Cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)

export default CardsList
