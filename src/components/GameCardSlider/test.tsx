import 'match-media-mock'
import { screen } from '@testing-library/react'

import GameCardSlider from '.'
import { renderWhithTheme } from 'utils/tests/helpers'
import items from './mock'

describe('<GameCardSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWhithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWhithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
