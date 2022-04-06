import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  publisher: 'Walktrough',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    renderWhithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('should render platforms icons', () => {
    renderWhithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('should render free rating when br18', () => {
    renderWhithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    renderWhithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/Different Tales/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    renderWhithTheme(<GameDetails {...props} />)

    expect(screen.getByText(/walktrough/i)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    renderWhithTheme(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText('Role-playing/Narrative')).toBeInTheDocument()
  })
})
