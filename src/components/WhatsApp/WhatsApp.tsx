import Image from 'next/image'
import Logo from 'public/assets/whatsapp.webp'

import { WhatsAppContainer } from './Styled'

export function WhatsApp() {
  return (
    <WhatsAppContainer
      target="_blank"
      href="https://api.whatsapp.com/send?phone=5543996378056"
    >
      <div>
        <Image src={Logo} alt="Teste" quality={100} priority fill />
      </div>
    </WhatsAppContainer>
  )
}
