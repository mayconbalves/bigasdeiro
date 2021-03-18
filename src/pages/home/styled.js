import styled from 'styled-components'
import logo from 'assets/logo.jpg'

export const Container = styled.div`
  display: flex;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position-x: center;
  height: 450px;
  width: 450px;
`

export const MainTitle = styled.h1`
  font-size: rem;
  text-align: center;
`
