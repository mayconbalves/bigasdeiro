import React from 'react'
import Nav from 'components/nav'
import logo from 'assets/headerlogo.png'
import Bolo from 'assets/bolo.jpeg'
import Bolo01 from 'assets/bolo_01.jpeg'
import Bolo02 from 'assets/bolo_02.jpeg'
import Sobremesas from 'assets/sobremesas.jpeg'
import {
  Container,
  Header,
  WrapperImg,
  LogoImg,
  ImgStyled,
  ProductGalery,
  ProductGaleryWrapper,
  AboutUsSection
} from './styled'

const Home = () => {
  return (
    <Container>
      <Header>
        <Nav />
      </Header>
      <WrapperImg>
        <LogoImg src={logo} alt="bigasdeiro" />
      </WrapperImg>
      <ProductGalery>
        <ProductGaleryWrapper>
          <ImgStyled src={Bolo} alt="#" />
          <ImgStyled src={Bolo01} alt="#" />
          <ImgStyled src={Bolo02} alt="#" />
          <ImgStyled src={Sobremesas} alt="#" />
          <ImgStyled src={Bolo} alt="#" />
          <ImgStyled src={Bolo01} alt="#" />
          <ImgStyled src={Bolo02} alt="#" />
          <ImgStyled src={Sobremesas} alt="#" />
        </ProductGaleryWrapper>
      </ProductGalery>
      <AboutUsSection>
        <h1>Nossa história...</h1>
        <div>
          <p>
            Nossa confeitaria tem pouco menos de um ano, mas desde sempre
            gostavamos de brincar com bolos e doces. Percebendo que a
            brincadeira começou a ficar mais séria, decidimos nos dedicar
            totalmente aos doces, bolos e sobremesas.
          </p>
        </div>
      </AboutUsSection>
    </Container>
  )
}

export default Home
