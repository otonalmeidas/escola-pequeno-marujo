import { CardsContainer } from './Styled'

type CardsProps = {
  children: React.ReactNode
}

export function Cards(props: CardsProps) {
  return <CardsContainer>{props.children}</CardsContainer>
}
