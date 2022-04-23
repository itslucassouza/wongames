import { render, screen } from '@testing-library/react'

import Overview from '.'

describe('<Overview />', () => {
  it('should render the heading', () => {
    const { container } = render(<Overview />)

    expect(
      screen.getByRole('heading', { name: /Overview/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
