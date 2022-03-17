import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWhithTheme(<Ribbon> Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with the secondary color', () => {
    renderWhithTheme(<Ribbon> Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#f231a5'
    })
  })

  it('should render with the primary color', () => {
    renderWhithTheme(<Ribbon color="secondary"> Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      backgroundColor: '#3cd3c1'
    })
  })

  it('should render with the normal size as default', () => {
    renderWhithTheme(<Ribbon color="secondary"> Best Seller</Ribbon>)

    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render with the small size', () => {
    renderWhithTheme(<Ribbon RibbonSize="small">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
