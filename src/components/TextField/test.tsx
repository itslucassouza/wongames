import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Email } from '@styled-icons/material-outlined'

import TextField from '.'
import { renderWhithTheme } from 'utils/tests/helpers'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    renderWhithTheme(<TextField label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    renderWhithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    renderWhithTheme(<TextField placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    renderWhithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWhithTheme(
      <TextField onInput={onInput} label="TextField" name="TextField" />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWhithTheme(<TextField label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Renders with Icon on the right side', () => {
    renderWhithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        iconPosition="right"
        name="TextField"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    renderWhithTheme(
      <TextField onInput={onInput} label="TextField" id="TextField" disabled />
    )

    const input = screen.getByRole('textbox')
    expect(input).not.toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
    })
    expect(onInput).toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', () => {
    renderWhithTheme(<TextField label="TextField" disabled name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Renders with error', () => {
    const { container } = renderWhithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="TextField"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
