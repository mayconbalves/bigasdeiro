import React from 'react'
import Header from 'components/header'
import { Container, Main, MainTitle } from './styled'

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <MainTitle>Site em construção</MainTitle>
        </Main>
      </Container>
    </div>
  )
}

export default Home
