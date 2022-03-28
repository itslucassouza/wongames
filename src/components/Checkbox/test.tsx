import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWhithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWhithTheme(<Checkbox label="checkboxlabel" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkboxlabel/i)).toBeInTheDocument()
    expect(screen.getByText(/checkboxlabel/i)).toHaveAttribute('for', 'check')
  })
  it('should render without label', () => {
    renderWhithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })
  it('should render with black label', () => {
    renderWhithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWhithTheme(<Checkbox label="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()

    renderWhithTheme(<Checkbox label="checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
