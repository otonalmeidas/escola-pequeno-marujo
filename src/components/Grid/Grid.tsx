import { GridContainer } from './Styled'

type GridProps = {
  children: React.ReactNode
}

export function Grid(props: GridProps) {
  return (
    <GridContainer
      initial={{ transform: 'translateY(2rem)' }}
      animate={{ transform: 'translateY(0rem)' }}
      exit={{ transform: 'translateY(2rem)' }}
      transition={{ duration: 0.35 }}
    >
      {props.children}
    </GridContainer>
  )
}
