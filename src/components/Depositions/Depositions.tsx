import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { DepositionsContainer, Container, Illustration } from './Styled'

export function Depositions() {
  return (
    <DepositionsContainer>
      <Container>
        <h3>Ofereça o que há de melhor na educação!</h3>
        <p>
          Venha nos visitar, conheça nossas instalações e grades curriculares.
        </p>
        <Button variant="normal">
          <Link href="/">Agende sua visita</Link>
        </Button>
      </Container>
      <Illustration>
        <Image src="/assets/depositions.webp" alt="Teste" fill />
      </Illustration>
    </DepositionsContainer>
  )
}
