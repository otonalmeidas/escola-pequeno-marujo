import Image from 'next/image'
import Photo1 from 'public/assets/childish1.webp'
import Photo2 from 'public/assets/childish2.webp'
import Photo3 from 'public/assets/childish3.webp'
import Photo4 from 'public/assets/childish4.webp'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { SliderContainer } from './Styled'

export function PhotosSlider() {
  return (
    <SliderContainer>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={24}
        breakpoints={{
          1200: {
            slidesPerView: 4
          },
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
          <Image src={Photo1} alt="Teste" quality={100} priority fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Photo2} alt="Teste" quality={100} priority fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Photo3} alt="Teste" quality={100} priority fill />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Photo4} alt="Teste" quality={100} priority fill />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  )
}
