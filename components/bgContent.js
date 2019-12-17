import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
  width: 100%;
  height: 200px;
   background-image: url(static/img/25358613_1553657854750443_452107410832652332_o.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  @media screen and (max-width: 992px){
    background-position: -99px -9338px;
    & before{
      content: ""; 
      background-image: inherit; 
      position: fixed; 
      top: 0; 
      left: 0; 
      height: 650px; 
      width: 800px; 
      background-position: -130px 0px;
      -webkit-background-size:  100% 100% !important; 
      -moz-background-size:  100% 100% !important; 
      -o-background-size:  100% 100%; 
      background-repeat: no-repeat;
      background-size: 100% 100% !important;
      z-index: -1;
    }
  }
`

const BigTitle = () => {
  return(
		<Background />
  )
}

export default BigTitle
