import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSize = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  RibbonSize?: RibbonSize
}

const Ribbon = ({
  children,
  color = 'primary',
  RibbonSize = 'normal'
}: RibbonProps) => (
  <S.Wrapper color={color} RibbonSize={RibbonSize}>
    {children}
  </S.Wrapper>
)

export default Ribbon
