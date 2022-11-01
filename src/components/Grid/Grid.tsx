import { GridContainer } from './Styled'

type GridProps = {
  children: React.ReactNode
}

export function Grid(props: GridProps) {
  return <GridContainer>{props.children}</GridContainer>
}
