import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Introduction = styled.div`
  padding:10px 0px;
  background:#fff;
`
const Card = styled.div`
  width: 23%;
  margin: 30px 10px;
  padding:0;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all .5s;
  background: #fff;
  &:hover {
    box-shadow: 2px 10px 11px rgba(0,0,0,0.2);
  }
  @media (max-width: 992px){
    display: none;
  }
`
const Img = styled.div`
  position: relative;
  width: 100%;
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`
const JustContent = styled.div`
  font-size: 12px;
  justify-content: space-between;
  border-top: 1px solid #B4B4B4;
  padding: 10px 10px;
  display: flex;
  @media (max-width: 992px){
    display: none;
  }
`
const JustContentMb = styled.div`
  font-size: 12px;
  justify-content: space-between;
  border-top: 1px solid #B4B4B4;
  padding: 10px 10px;
  display: none;
  @media (max-width: 992px){
    display: flex;
  }
`
const Monthly = styled.div`
  font-size: 18px;
  position: relative;
  font-weight: 600;
  color: #00B1FF;
  padding: 0 10px;
  margin: 10px 0;
`
const DownPrice = styled.div`
  position: absolute;
  width: 60px;
  background: #EE0000;
  left: 40%;
  top: 3px;
  padding: 2px;
  border-radius: 5px;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
`

const Title = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 22px;
  font-weight: bold;
  padding: 0 10px;
`
const Content = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 15px;
  font-weight: 300;
  color: #5A5A5A;
  /* margin:10px 0 20px 0; */
  padding: 0 10px;
`
const MoreCard = () => {
  return (
    <Link href='/item'>
      <Card>
        <Img>
          <img src='/static/img/25358613_1553657854750443_452107410832652332_o.jpg' />
        </Img>
      </Card>
    </Link>
  )
}

export default MoreCard