import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  ButtonLabel: string
  ButtonLink: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  ButtonLabel,
  ButtonLink,
  alignment = 'right'
}: HighlightProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={ButtonLink}>
        {ButtonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
