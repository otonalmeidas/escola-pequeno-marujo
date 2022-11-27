import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import { VisitContainer, VisitContent, Illustration } from './Styled'

export function Visit() {
  return (
    <VisitContainer>
      <VisitContent>
        <h3>Ofereça o que há de melhor na educação!</h3>
        <p>
          Venha nos visitar, conheça nossas instalações e grades curriculares.
        </p>
        <Button type="button" variant="normal">
          <Link href="/">Agende sua visita</Link>
        </Button>
      </VisitContent>
      <Illustration>
        <Image src="/assets/depositions.webp" alt="Teste" fill />
      </Illustration>
    </VisitContainer>
  )
}
