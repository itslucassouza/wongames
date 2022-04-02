import Heading from 'components/Heading'
import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ content, title }: TextContentProps) => (
  <S.Wrapper>
    {!!title && <Heading lineLeft>{title}</Heading>}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
