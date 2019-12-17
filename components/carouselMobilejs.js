import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const Photo = styled(Carousel.Item)`
  @media (max-width: 992px){
    height: 400px;
  }
`
const Cas = styled.div`
  display: none;
  background: #fff;
  @media (max-width: 992px){
    display: block;
  }
`

const MyCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return(
    <Cas>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} touch={true}>
        <Photo>
          <img
            className="d-block cauHeight"
            src="/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg"
            alt="First slide"
          />
          <Carousel.Caption className='carousel_text myShadow'>
            <h3>從愛里出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1>
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
            <h3>從愛里出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1>
          </Carousel.Caption>
        </Photo>
        <Photo>
          <img
            className="d-block cauHeight"
            src="/static/img/11-02607-005.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className='carousel_text myShadow'>
            <h3>從愛里出發 在愛裡回家</h3>
            <h1>為了家，還可以更好</h1>
          </Carousel.Caption>
        </Photo>
      </Carousel>
    </Cas>
  )
}

export default MyCarousel