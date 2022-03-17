import { screen } from '@testing-library/react'
import { renderWhithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWhithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('sould render the ribon', () => {
    renderWhithTheme(
      <Banner
        {...props}
        ribbon="My ribbon"
        ribbonSize="normal"
        ribbonColor="secondary"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1'
    })
  })
})
