import styled from 'styled-components'

export const Container = styled.div`
  border-top: 2px solid #ff60e2;
  border-bottom: 2px solid #ff60e2;
  height: 50px;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 780px) {
    justify-content: center;
  }
`

export const UlStyled = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const NavItem = styled.li`
  color: #ffc8f5;
  cursor: pointer;
  font-size: 2rem;
  padding: 10px;
  text-shadow: 1px 1px 1px #000;

  &:hover {
    text-shadow: 1px 1px 1px #000;
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`
