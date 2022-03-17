import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSize } from 'components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSize
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLink,
  buttonLabel,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} RibbonSize={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.Img src={img} role="img" aria-label={title}></S.Img>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
