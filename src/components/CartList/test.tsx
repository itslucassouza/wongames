import { render, screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cartlist', () => {
    const { container } = renderWhithTheme(
      <CartList items={mockItems} total="R$ 330,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)

    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
