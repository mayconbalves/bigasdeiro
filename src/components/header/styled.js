import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #ffb5f2;
  display: flex;
  height: 50px;
  justify-content: space-around;
  width: 100%;
`

export const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-shadow: 2px 2px 2px #000;
`

export const UlStyled = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;

  &:hover {
    text-shadow: 1px 1px 1px #000;
    transform: scale(1.2);
  }
`
