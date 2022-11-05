import Image from 'next/image'
import Link from 'next/link'
import {
  IoCall,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline
} from 'react-icons/io5'

import {
  FooterContainer,
  FooterContent,
  Title,
  About,
  Informations,
  Social
} from './Styled'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <Link href="/">
          <Image src="/assets/logo.webp" alt="Logo da Escola" priority fill />
        </Link>

        <FooterContent>
          <About>
            <Title>Sobre</Title>
            <ul>
              <li>
                <Link href="/">A escola</Link>
              </li>
              <li>
                <Link href="/">Educação infantil</Link>
              </li>
              <li>
                <Link href="/">Ensino fundamental I</Link>
              </li>
              <li>
                <Link href="/">Ensino fundamental II</Link>
              </li>
            </ul>
          </About>

          <Informations>
            <div>
              <Title>Endereço</Title>
              <p>
                Rua Irauna, 180 - Parque Veneza, Arapongas - Paraná - 86701-630
              </p>
            </div>

            <div>
              <Title>Contato</Title>
              <Link href="/">
                <IoMailOutline />
                Fale conosco
              </Link>

              <div>
                <Link href="/">
                  <IoCall />
                  (43) 3275-6874
                </Link>
                <Link href="/">
                  <IoLogoWhatsapp />
                  (43) 99637-8056
                </Link>
              </div>
              <span>Atendimento de segunda a sexta, das 06h40 às 19h</span>
            </div>
          </Informations>

          <Social>
            <Title>Redes sociais</Title>
            <Link href="/">
              <IoLogoInstagram />
              @escolapequenomarujo
            </Link>
          </Social>
        </FooterContent>
      </div>
    </FooterContainer>
  )
}
