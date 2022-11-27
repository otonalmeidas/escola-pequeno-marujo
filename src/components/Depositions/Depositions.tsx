import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Content, DepositionsContainer } from './Styled'

export function Depositions() {
  return (
    <DepositionsContainer>
      <Content>
        <span>Depoimentos</span>
        <h2>O que os tutores dizem sobre nós</h2>
      </Content>

      <Swiper
        pagination={true}
        modules={[Navigation, Pagination]}
        navigation={true}
        spaceBetween={24}
        breakpoints={{
          960: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          },
          280: {
            slidesPerView: 1
          }
        }}
      >
        <SwiperSlide>
          <h4>Cátia Oliveira Santana</h4>
          <span>Mãe do Matheus e da Juliana</span>
          <p>
            “Mauris posuere, metus sit amet iaculis tincidunt, ex felis volutpat
            risus, vitae feugiat orci ante sed magna. Nunc et dui eu est luctus
            pulvinar. Proin pharetra risus ac urna tempor, a iaculis quam
            rhoncus.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Maria da Silva</h4>
          <span>Mãe da Valentina</span>
          <p>
            “Sed in lacus a sem commodo semper. Duis lobortis varius sem, et
            tristique purus luctus vel. Nam ipsum orci, molestie ultricies
            posuere eu, pretium eget augue. Aliquam egestas, arcu quis
            vestibulum faucibus, enim tellus dictum nisi, quis rutrum est metus
            vel erat.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>José dos Santos</h4>
          <span>Pai da João</span>
          <p>
            ”Mauris posuere, metus sit amet iaculis tincidunt, ex felis volutpat
            risus, vitae feugiat orci ante sed magna. Nunc et dui eu est luctus
            pulvinar. Proin pharetra risus ac urna tempor, a iaculis quam
            rhoncus.”
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Cátia Oliveira Santana</h4>
          <span>Mãe do Matheus e da Juliana</span>
          <p>
            “Mauris posuere, metus sit amet iaculis tincidunt, ex felis volutpat
            risus, vitae feugiat orci ante sed magna. Nunc et dui eu est luctus
            pulvinar. Proin pharetra risus ac urna tempor, a iaculis quam
            rhoncus. In fermentum turpis non ipsum tempus, eget mattis urna
            commodo.”
          </p>
        </SwiperSlide>
      </Swiper>
    </DepositionsContainer>
  )
}
