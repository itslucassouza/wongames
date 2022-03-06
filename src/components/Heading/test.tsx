import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    //renderizar o component com o `render`
    renderWhithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black heading when color is passed', () => {
    // renderizar o component com o `render`
    renderWhithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a heading with a line to the left ', () => {
    // renderizar o component com o `render`
    renderWhithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })
  it('should render a heading with a line to the bottom ', () => {
    // renderizar o component com o `render`
    renderWhithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
