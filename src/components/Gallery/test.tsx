import 'match-media-mock'

import { screen } from '@testing-library/react'

import Gallery from '.'

import mockItems from './mock'
import { renderWhithTheme } from 'utils/tests/helpers'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWhithTheme(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /thumb - Gallery image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)

    expect(
      screen.getByRole('button', { name: /thumb - Gallery image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })
})
