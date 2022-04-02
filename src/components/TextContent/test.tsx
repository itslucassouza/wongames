import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import TextContent from '.'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWhithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWhithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render the title and content', () => {
    renderWhithTheme(<TextContent {...props} />)

    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: '#FAFAFA' // theme.colors.white
    })

    expect(wrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    })
  })
})
