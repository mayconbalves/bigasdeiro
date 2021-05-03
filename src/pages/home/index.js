import React from 'react'
import Nav from 'components/nav'
import logo from 'assets/headerlogo.png'
import { Container, Header, WrapperImg, LogoImg } from './styled'

const Home = () => {
  return (
    <Container>
      <Header>
        <Nav />
      </Header>
      <WrapperImg>
        <LogoImg src={logo} alt="bigasdeiro" />
      </WrapperImg>
    </Container>
  )
}

export default Home
