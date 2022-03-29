import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //renderizar o component com o `render`
    renderWhithTheme(<Logo />)
    //selecioanr o elemento a se testado `screen` (queries) - getBy..
    //expect - assertion (comparação - análise) (espero que renderize a logo branca)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render the logo with id passed', () => {
    const { container } = renderWhithTheme(<Logo id="myId" />)

    expect(container.querySelector('#a_myId')).toBeInTheDocument()
  })

  it('should render a black label color is passed', () => {
    renderWhithTheme(<Logo color="black" />)

    //verificando se a color é preta
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWhithTheme(<Logo />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a big logo', () => {
    renderWhithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo withdout text if hideOnMobile', () => {
    renderWhithTheme(<Logo size="large" hideOnMobile />)

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
