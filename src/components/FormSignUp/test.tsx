import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    const { container } = renderWhithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render text and link to sign in', () => {
    renderWhithTheme(<FormSignUp />)

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/already have an account\?/i)).toBeInTheDocument()
  })
})
