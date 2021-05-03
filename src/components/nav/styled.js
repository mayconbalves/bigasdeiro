import styled from 'styled-components'
import {
  MenuOutlined,
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'

export const Container = styled.div`
  background-color: #fff;
  display: inline;
  box-shadow: 2px 2px 8px #000;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;

  @media (max-width: 780px) {
    justify-content: center;
  }
`

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  width: 80%;
`

export const UlStyled = styled.ul`
  display: flex;
`

export const ListItem = styled.li`
  color: #ffc8f5;
  cursor: pointer;
  font-size: 2rem;
  padding: 5px;
  text-shadow: 1px 1px 1px #000;
`

export const MenuIcon = styled(MenuOutlined)`
  color: #ffc8f5;
  font-size: 2rem;
`

export const FacebookIcon = styled(FacebookOutlined)`
  color: #ffc8f5;
  font-size: 3rem;
`

export const InstaIcon = styled(InstagramOutlined)`
  color: #ffc8f5;
  font-size: 3rem;
`

export const WhatsIcon = styled(WhatsAppOutlined)`
  color: #ffc8f5;
  font-size: 3rem;
`
