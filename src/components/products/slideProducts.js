import React from 'react'
import { StyledCarousel, PrevButton, NextButton, CarouselImg } from './styled'

const SlideProducts = () => {
  return (
    <StyledCarousel
      autoplay={true}
      autoplayInterval={2000}
      renderCenterLeftControls={({ previousSlide }) => (
        <PrevButton onClick={previousSlide} />
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <NextButton onClick={nextSlide} />
      )}
    >
      <CarouselImg
        alt="Photo by Bigas'deiro on October 05, 2020. May be an image of cake."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/120825962_682055152413902_3313012129737837635_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=102&amp;_nc_ohc=0lkkzfHger4AX-ZYSeh&amp;ccb=7-4&amp;oh=9075e22dd75c22d75095afb4069605c8&amp;oe=60808253&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro on September 17, 2020. May be an image of cake."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/119559845_602083394005617_1006619475228932551_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=oKwuLaFAvE8AX_26V8r&amp;ccb=7-4&amp;oh=f4b2c77883718163ad1f87dbb1dfcee2&amp;oe=607D279E&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro on October 05, 2020. May be an image of dessert."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/120739530_368018187780931_1517389543379795534_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=107&amp;_nc_ohc=TuZzhJhb9wMAX9n8YWa&amp;ccb=7-4&amp;oh=6d885b0463fea028ed5fc901b7d774f1&amp;oe=60806001&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro in Parque Recanto Mônica, São Paulo. May be an image of cake."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/120891318_2687972701416072_5970688537510780283_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=100&amp;_nc_ohc=ZaFlNHbHBe8AX-AMc7l&amp;ccb=7-4&amp;oh=9a7832e45515facab4c34e9aff18b6bc&amp;oe=607DBC0B&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro on October 19, 2020. May be an image of cake."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/121936419_179333120499615_7032075411201080513_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=oBr7OU6gT7QAX9NYLd2&amp;ccb=7-4&amp;oh=3cb95bd753a9e45f4d5be4f2dfc0fda1&amp;oe=607D4038&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro on December 11, 2020. May be an image of 1 person and dessert."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/130305885_920111938524565_1442456617352407443_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=101&amp;_nc_ohc=BwNT5cJBExgAX-4evOQ&amp;ccb=7-4&amp;oh=00f4aa9b8e9093b233f1c9d3b62a263d&amp;oe=607CC48D&amp;_nc_sid=4f375e"
      />
      <CarouselImg
        alt="Photo by Bigas'deiro in Confeitaria Bigas'Deiro. May be an image of 1 person and cake."
        src="https://instagram.fcgh19-1.fna.fbcdn.net/v/t51.2885-15/e35/137019517_867868450712751_1320627981287233359_n.jpg?tp=1&amp;_nc_ht=instagram.fcgh19-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=KUXX_nRNnWMAX86AKt1&amp;ccb=7-4&amp;oh=f33b7f375e2160768e340e2573f8c0d2&amp;oe=607FFDFB&amp;_nc_sid=4f375e"
      />
    </StyledCarousel>
  )
}

export default SlideProducts
