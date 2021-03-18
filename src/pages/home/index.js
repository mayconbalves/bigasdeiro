import React from 'react'
import Header from 'components/header'
import logo from 'assets/logo.jpg'
import { Container, Main, MainImg } from './styled'

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <MainImg src={logo} alt="bigasdeiro" />
        </Main>
      </Container>
    </div>
  )
}

export default Home
