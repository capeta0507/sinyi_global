import React from 'react'
import { Col } from 'react-bootstrap'
import styled from 'styled-components'

const ThemeCard = styled.div`
  width: 24%;
  padding-left: 10px;
  padding-right: 10px;
  @media (max-width: 768px){
    width: 50%;
    padding-left: 5px;
    padding-right: 5px;
  }
`

const BigTitle = (props) => {
  return(
		<ThemeCard className='text-center'>
      <div className='recruitCard'>
        <div className="recruitImg">
          <img className="newsPhoto" src='/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg' />
        </div>
      </div>
      <div className="recruitTitle">
        <h2>{props.title}</h2>
      </div>
      <div className="recList">
        <h5>{props.list1}</h5>
        <h5>{props.list2}</h5>
        <h5>{props.list3}</h5>
      </div>
    </ThemeCard>
  )
}

export default BigTitle
