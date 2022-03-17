import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render follow us column', () => {
    renderWhithTheme(<Footer />)

    expect(screen.getByText(/follow us/i)).toBeInTheDocument()
  })
  it('should render contacts column', () => {
    renderWhithTheme(<Footer />)

    expect(screen.getByText(/contact/i)).toBeInTheDocument()
  })
  it('should render links column', () => {
    renderWhithTheme(<Footer />)

    expect(screen.getByText(/links/i)).toBeInTheDocument()
  })
  it('should render location column', () => {
    renderWhithTheme(<Footer />)

    expect(screen.getByText(/location/i)).toBeInTheDocument()
  })
})
