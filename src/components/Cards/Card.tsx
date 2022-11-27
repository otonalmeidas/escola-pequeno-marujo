import { CardContainer } from './Styled'

interface CardProps {
  title: string
  description: string
}

export function Card(props: CardProps) {
  return (
    <CardContainer>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </CardContainer>
  )
}
