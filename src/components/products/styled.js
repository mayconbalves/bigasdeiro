import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight
} from 'react-icons/fa'

export const StyledCarousel = styled(Carousel)`
  outline: none;
`

export const PrevButton = styled(FaRegArrowAltCircleLeft)`
  color: pink;
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    color: #000;
  }
`

export const NextButton = styled(FaRegArrowAltCircleRight)`
  color: pink;
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    color: #000;
  }
`

export const CarouselImg = styled.img`
  display: flex;
  height: 100%;
`
