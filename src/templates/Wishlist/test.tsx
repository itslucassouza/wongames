import { screen } from '@testing-library/react'

import Wishlist from '.'
import gamesMock from 'components/GameCardSlider/mock'
import highlighMock from 'components/Highlight/mock'
import { renderWhithTheme } from 'utils/tests/helpers'

const props = {
  games: gamesMock,
  recommendedHighlight: highlighMock,
  recommendedGames: gamesMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWhithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWhithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlighMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
