import styled from 'styled-components'

export const Container = styled.div`
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  display: flex;
  height: 50px;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 780px) {
    justify-content: center;
  }
`

export const UlStyled = styled.ul`
  display: flex;
`

export const NavItem = styled.li`
  color: #000;
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;

  &:hover {
    text-shadow: 1px 1px 1px #000;
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
