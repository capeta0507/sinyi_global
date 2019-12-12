import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Introduction = styled.div`
  padding:10px 0px;
  background:#fff;
  margin-top: 10px;
`
const Card = styled.div`
  width: 100%;
  margin: 30px 10px;
  padding:0;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all .5s;
  background: #fff;
  &:hover {
    box-shadow: 2px 10px 11px rgba(0,0,0,0.2);
  }
  @media (max-width: 768px){
    width: 100%;
    margin: 10px 10px;
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
const ItemCard = () => {
  return (
    <Card>
      <Img>
        <img src='/static/img/25358613_1553657854750443_452107410832652332_o.jpg' />
      </Img>
      <Introduction>
        <JustContent>
          內湖長虹旗艦辦公
        </JustContent>
        <JustContent>
          客戶：中華郵政
        </JustContent>
        <JustContent>
          面積：648坪
        </JustContent>
      </Introduction>
    </Card>
  )
}

export default ItemCard