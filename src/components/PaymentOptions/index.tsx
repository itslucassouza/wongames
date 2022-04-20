import * as S from './styles'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import Button from 'components/Button'
import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ handlePayment, cards }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add /> Add a new credit card
          </S.AddCard>
        </S.CardList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue Shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy Now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions
