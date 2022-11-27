import Image from 'next/image'
import FormImage from 'public/assets/form.webp'
import { IoCall } from 'react-icons/io5'

import { Form } from '../Form/Form'
import { ContactContainer, Content, Illustration } from './Styled'

export function Contact() {
  return (
    <ContactContainer>
      <Form />

      <Content
        initial={{ transform: 'translateX(2rem)' }}
        animate={{ transform: 'translateX(0rem)' }}
        exit={{ transform: 'translateX(2rem)' }}
        transition={{ duration: 0.35 }}
      >
        <div>
          <span>Endereço</span>
          <p>Rua Irauna, 180 - Parque Veneza, Arapongas - Paraná - 86701-630</p>
        </div>
        <div />
        <div>
          <div>
            <IoCall />
            (43) 3275-6874
          </div>
          <p>Atendimento de segunda a sexta, das 06h40 às 19h</p>
        </div>

        <Illustration>
          <Image src={FormImage} alt="Teste" quality={100} priority fill />
        </Illustration>
      </Content>
    </ContactContainer>
  )
}
