import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`

export const Header = styled.header`
  display: inline-block;
  width: 100%;
  background: linear-gradient(
    94deg,
    rgba(255, 169, 250, 1) 7%,
    rgba(255, 251, 255, 1) 50%,
    rgba(255, 177, 243, 1) 91%
  );
`

export const ProductGalery = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px auto;
`

export const ProductGaleryWrapper = styled.section`
  display: grid;
  row-gap: 20px;
  column-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 80%;
`

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 50px;
`

export const ImgStyled = styled.img`
  border-radius: 25px;
  width: 250px;

  &:hover {
    transform: scale(1.2);
    border: 5px solid rgb(255, 169, 250);
  }

  @media (max-width: 560px) {
    margin: 5px auto;
  }
`

export const LogoImg = styled.img`
  height: 200px;
  width: 200px;
`

export const AboutUsSection = styled.section`
  background: linear-gradient(
    94deg,
    rgba(255, 169, 250, 1) 7%,
    rgba(255, 251, 255, 1) 50%,
    rgba(255, 177, 243, 1) 91%
  );
  height: 400px;
  text-align: center;

  h1 {
    width: 30%;
    margin: 0 auto;
    padding: 10px;
    font-size: 5rem;
    color: pink;
    font-weight: bold;
  }

  div {
    margin: 0 auto;
    width: 80%;
  }

  p {
    text-align: center;
    font-size: 2rem;
  }
`
