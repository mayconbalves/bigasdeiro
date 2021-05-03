import React from 'react'
import {
  Container,
  NavStyled,
  UlStyled,
  ListItem,
  MenuIcon,
  FacebookIcon,
  InstaIcon,
  WhatsIcon
} from './styled'

const Header = () => {
  return (
    <Container>
      <NavStyled>
        <UlStyled>
          <ListItem>
            <MenuIcon />
          </ListItem>
          <ListItem>
            <p>{`Confeitaria Bigas'Deiro`}</p>
          </ListItem>
        </UlStyled>

        <UlStyled>
          <ListItem>
            <a
              href="https://www.facebook.com/bigasdeiro/photos/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.instagram.com/confeitaria.bigasdeiro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstaIcon />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://api.whatsapp.com/send/?phone=5511948503764&text&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsIcon />
            </a>
          </ListItem>
        </UlStyled>
      </NavStyled>
    </Container>
  )
}

export default Header
