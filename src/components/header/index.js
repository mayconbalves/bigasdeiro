import React from 'react'
import { Container, HeaderTitle, NavItem, UlStyled } from './styled'

const Header = () => {
  return (
    <Container>
      <HeaderTitle>Bigasdeiro</HeaderTitle>
      <nav>
        <UlStyled>
          <NavItem>
            <p>Brigadeiros</p>
          </NavItem>
          <NavItem>
            <p>Bolos</p>
          </NavItem>
          <NavItem>
            <p>Sobremesas</p>
          </NavItem>
          <NavItem>
            <p>Sobre nós</p>
          </NavItem>
        </UlStyled>
      </nav>
    </Container>
  )
}

export default Header
