import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`

export const Header = styled.header`
  display: inline-block;
  width: 100%;
  background: rgb(255, 169, 250);
  background: linear-gradient(
    94deg,
    rgba(255, 169, 250, 1) 7%,
    rgba(255, 251, 255, 1) 50%,
    rgba(255, 177, 243, 1) 91%
  );
`

export const ProductSlideWrapper = styled.div`
  height: 400px;
  margin: 20px auto;
  width: 80%;
`

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoImg = styled.img`
  height: 200px;
  width: 200px;
`
