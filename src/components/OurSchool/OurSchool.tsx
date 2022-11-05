import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../Button/Button'
import {
  OurSchoolContainer,
  Photo,
  OurSchoolContent,
  Separator,
  Buttons
} from './Styled'

export function OurSchool() {
  return (
    <OurSchoolContainer>
      <Photo>
        <Image
          src="/assets/our-school.webp"
          alt="Logo da Escola"
          priority
          fill
        />
      </Photo>
      <OurSchoolContent>
        <h4>Nossa Escola</h4>
        <h2>
          Oferecemos toda a estrutura necessária para o conforto e
          desenvolvimento educacional
        </h2>

        <ul>
          <Separator>
            <li>Parque Infantil</li>
            <li>Refeitório</li>
            <li>Biblioteca</li>
            <li>Quadra Esportiva</li>
          </Separator>

          <Separator>
            <li>Laboratório de Ciência</li>
            <li>Laboratório de Informática</li>
            <li>Área Verde</li>
            <li>Internet</li>
          </Separator>
        </ul>

        <Buttons>
          <Button variant="normal">
            <Link href="/">Saiba mais</Link>
          </Button>
          <Button variant="outline">
            <Link href="/">Agende sua visita</Link>
          </Button>
        </Buttons>
      </OurSchoolContent>
    </OurSchoolContainer>
  )
}
