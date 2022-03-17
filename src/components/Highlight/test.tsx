import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'
import * as S from './styles'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  backgroundImage: '/img/reddead-bg.jpg',
  ButtonLabel: 'Buy Now',
  ButtonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWhithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWhithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWhithTheme(<Highlight {...props} floatImage="floatImg.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'floatImg.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWhithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align right by default', () => {
    const { container } = renderWhithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
