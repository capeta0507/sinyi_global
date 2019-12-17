import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 992px){
    padding: 0;
    padding-bottom: 20px;
  }
`
const Img = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:112px;
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
