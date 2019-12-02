import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 768px){
    padding: 0;
    padding-bottom: 20px;
  }
`
const Img = styled.img`
  width:25%;
  @media (max-width: 768px){
    width:60%;
  }
`

const BigTitle = (props) => {
  return(
		<Title>
			<Img src={props.title} alt="" />
		</Title>
  )
}

export default BigTitle
