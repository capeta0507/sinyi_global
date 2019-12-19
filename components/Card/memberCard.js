import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import styled from 'styled-components'

const ThemeCard = styled.div`
  width: 100%;
  background: #fff;
  padding: 50px 0;
  @media (max-width: 992px){
    width: 100%;
    margin: 5px 0;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
  }
`
const Context = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
    display: flex;
  }
`
const SendButton = styled.div`
  width: 112px;
  margin: 0 auto;
  background: #00B1FF;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  @media (max-width: 992px){
    position: absolute;
    right: 40px;
    margin: 0;
    width: 70px;
    font-size: 12px;
  }
`
const MyPhone = styled.div`
  width: 70%;
  margin: 0 auto;
  & > h5{
    display: flex;
    font-size: 14px;
    color: #878787;
    font-weight: 400;
  }
`

const MemberCard = (props) => {
  return(
		<ThemeCard className='text-center'>
      <Context>
        <div className='memberCard'>
          <div className="memberImg">
            <img className="newsPhoto" src='/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg' />
          </div>
        </div>
        <div className="recruitTitle mbnone">
          <h2>{props.name}</h2>
          <h2>{props.engName}</h2>
        </div>
        <div className="memberList">
          <MyPhone>
            <div className="recruitTitle navBlock">
              <h2>{props.name}</h2>
              <h2>{props.engName}</h2>
            </div>
            <h5><img className='memberIcon' src='/static/img/about/telephone.png' />{props.list1}</h5>
            <h5><img className='memberIcon' src='/static/img/about/message-closed-envelope.png' />{props.list2}</h5>
            <h5><img className='memberIcon' src='/static/img/about/line.png' />{props.list3}</h5>
          </MyPhone>
          <p className='mbnone'>多年來經營內湖科學園區、大直重劃區、內湖五期重劃區，本著協助客戶洞見未來的初衷，帶領代理一部的夥伴精益求精，於不動產管理領域提供最專業與優質的服務，成為客戶最佳的資產 ...</p>
          <Link href='/teamDetail'>
            <SendButton>詳細介紹</SendButton>
          </Link>
        </div>
      </Context>
    </ThemeCard>
  )
}

export default MemberCard
