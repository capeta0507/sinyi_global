import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
// import LoginStatus from './Login/loginStatus'

const Cas = styled.div`
  display: block;
  @media (max-width: 992px){
    display: none;
  }
`

const Photo = styled(Carousel.Item)`
  @media (max-width: 1920px){
    height: 700px;
  }
  @media (max-width: 1680px){
    height: 500px;
  }
  @media (max-width: 1366px){
    height: 450px;
  }
  @media (max-width: 992px){
    height: 400px;
  }
`

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [nextIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wR.png' />)
  const [prevIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wL.png' />)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return(
    <Cas>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon} interval={10000} activeIndex={index} direction={direction} onSelect={handleSelect} touch={true} indicators={false}>
        <Photo>
          <img
            className="d-block cauHeight"
            src="/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='carousel_text myShadow'>
            {/* <h3>從愛裡出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1> */}
            {/* <div className="myBtn myPosition bgWhite">我要加入</div> */}
          </Carousel.Caption>
        </Photo>
        <Photo>
          <img
            className="d-block cauHeight"
            src="/static/img/2019022001.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className='carousel_text myShadow'>
            {/* <h3>從愛里出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1> */}
          </Carousel.Caption>
        </Photo>
        <Photo>
          <img
            className="d-block cauHeight"
            src="/static/img/11-02607-005.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className='carousel_text myShadow'>
            {/* <h3>從愛里出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1> */}
          </Carousel.Caption>
        </Photo>
      </Carousel>
    </Cas>
  )
}

export default MyCarousel