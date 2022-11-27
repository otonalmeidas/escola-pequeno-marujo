import Image from 'next/image'
import AboutImage from 'public/assets/about.webp'

import { AboutContainer, Illustration } from './Styled'

export function About() {
  return (
    <AboutContainer>
      <Illustration>
        <Image src={AboutImage} alt="Teste" quality={100} priority fill />
      </Illustration>

      <div>
        <h2>Sobre a escola</h2>
        <p>
          A Escola pequeno marujo tem a missão de formar cidadãos bem treinados
          para agregarem valores na sociedade.
        </p>
        <p>
          Oferecendo o melhor ensino da região e se dedicando com profissionais
          capacitados a dar o suporte necessário para que seu filho aprenda com
          satisfação. Com aulas dinâmicas e divertidas e conforto para que as
          crianças aprendam sorrindo.
        </p>
        <p>
          Trabalhando com ensino infantil e fundamental I. Venha conhecer nossa
          escola e fazer parte da nossa família!
        </p>
      </div>
    </AboutContainer>
  )
}
