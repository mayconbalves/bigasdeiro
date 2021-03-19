import React from 'react'
import Nav from 'components/nav'
import SlideProducts from 'components/products/slideProducts'
import logo from 'assets/headerlogo.png'
import {
  Container,
  Header,
  WrapperImg,
  LogoImg,
  ProductSlideWrapper
} from './styled'

const Home = () => {
  return (
    <Container>
      <Header>
        <WrapperImg>
          <LogoImg src={logo} alt="bigasdeiro" />
        </WrapperImg>
      </Header>
      <Nav />
      <ProductSlideWrapper>
        <SlideProducts />
      </ProductSlideWrapper>
    </Container>
  )
}

export default Home
