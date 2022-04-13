import { Story, Meta } from '@storybook/react'
import CardsList, { CardlistProps } from '.'

import cardsMock from 'components/PaymentOptions/mock'

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Default: Story<CardlistProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
