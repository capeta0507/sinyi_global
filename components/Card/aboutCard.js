import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Introduction = styled.div`
  padding:10px 0px;
  // background:#fff;
  margin-top: 10px;
`
const Card = styled.div`
  width: 100%;
  margin: 30px 10px;
  padding:0;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all .5s;
  // background: #fff;
  @media (max-width: 992px){
    width: 100%;
    margin: 0;
    margin-top: 30px;
  }
`
const Img = styled.div`
  position: relative;
  width: 100%;
`
const JustContent = styled.div`
  font-size: 14px;
  color: #878787;
  text-align: center;
`
const ItemCard = (props) => {
  return (
    <Card>
      <Img>
        <img src={`/static/img/about_six/${props.img}`} />
      </Img>
      <Introduction>
        <JustContent>
          {props.content1}
        </JustContent>
        <JustContent>
          {props.content2}
        </JustContent>
        <JustContent>
          {props.content3}
        </JustContent>
      </Introduction>
    </Card>
  )
}

export default ItemCard