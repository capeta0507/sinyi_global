import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import styled from 'styled-components'

const ThemeCard = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px 0;
  background: -webkit-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: -o-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: -moz-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background-size: 100% 100%;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
  cursor: pointer;
  @media (max-width: 992px){
    position: relative;
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
  box-shadow: 5px 5px #C7D1D6;
  @media (max-width: 992px){
    position: absolute;
    right: 5%;
    margin: 0;
    width: 70px;
    font-size: 12px;
    box-shadow: none;
    bottom: 15px;
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
      <Link href='/teamDetail'>
        <Context>
          <div className='memberCard'>
            <div className="memberImg">
              <img className="newsPhoto" src='/static/img/people.png' />
            </div>
          </div>
          <div className="recruitTitle titleBlock">
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
      </Link>
    </ThemeCard>
  )
}

export default MemberCard
