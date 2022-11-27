import Image from 'next/image'
import Logo from 'public/assets/fachada.webp'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Content, List, StructureSection } from './Styled'

import 'swiper/css'
import 'swiper/css/pagination'

export function Structure() {
  return (
    <StructureSection>
      <Content>
        <h2>Nossa estrutura</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus
          blandit augue quis placerat. Sed finibus finibus lacus, sed tincidunt
          nulla maximus sed. Phasellus ac auctor purus. Fusce fringilla tellus
          eu lacus bibendum hendrerit. Praesent iaculis justo non sapien
          faucibus blandit. Aenean ullamcorper risus et odio egestas, nec mattis
          massa mollis. Donec tempor efficitur orci quis lobortis. Cras pretium
          imperdiet mi, eu rhoncus libero pretium eu. Donec ac orci magna.
        </p>

        <List>
          <li>Parque Infantil</li>
          <li>Refeitório</li>
          <li>Biblioteca</li>
          <li>Quadra Esportiva</li>
          <li>Laboratório de Ciência</li>
          <li>Laboratório de Informática</li>
          <li>Área Verde</li>
          <li>Internet</li>
        </List>
      </Content>

      <Swiper pagination={true} modules={[Pagination]} spaceBetween={24}>
        <SwiperSlide>
          <Image src={Logo} alt="Logo da Escola" quality={100} priority fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} alt="Logo da Escola" quality={100} priority fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} alt="Logo da Escola" quality={100} priority fill />
        </SwiperSlide>
      </Swiper>
    </StructureSection>
  )
}
