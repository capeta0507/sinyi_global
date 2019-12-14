import React from 'react'
import styled from 'styled-components'
import MemberCard from '../Card/memberCard'

const TeamBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px){
    width: 100%;
  }
`
const FirstContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 90%;
    display: block;
  }
`
const SecondContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 90%;
    display: block;
  }
`
const LeftCon = styled.div`
  width: 40%;
  & > img {
    width: 80%;
  }
  & > h1 {
    color: #000;
    font-size: 35px;
    font-weight: 500;
  }
  & > h5 {
    color: #969696;
    font-size: 16px;
  }
  @media (max-width: 768px){
    width: 100%;
    text-align: center;
    & > img {
      width: 100%;
    }
  }
`
const RightCon = styled.div`
  width: 40%;
  @media (max-width: 768px){
    width: 100%
  }
`
const MainContent = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  & > h3 {
    color: #000;
    font-size: 25px;
  }
  & > p {
    color: #969696;
    font-size: 18px;
    margin-top: 36px;
  }
  @media (max-width: 768px){
    margin: 20px 0 0 50px;
    & > h3 {
      font-size: 21px;
    }
    & > h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 768px){
    width: 100%;
    margin: 0;
    padding: 0 10px;
  }
`
const MapContent = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
`
const MemberBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 29px 0;
`
const Member = styled.div`
  width: 32%;
  @media (max-width: 768px){
    width: 100%;
  }
`
const PeopleTitle = styled.div`
  font-size: 25px;
  width: 100%;
  border-bottom: 3px solid #00B1FF;
  padding-bottom: 8px;
  font-weight: bold;
  margin-bottom: 8px;
`
const PeopleContwnt = styled.div`
  width: 310px;
  font-size: 18px;
  color: #000;
  & > p {
    display:flex;
  }
  @media (max-width: 768px){
    width: 100%;
  }
`


const Manager = () => {
  return (
    <TeamBlock>
      <FirstContent>
        <LeftCon>
          <h1>信義101店</h1>
          <h5><img className='memberIcon' src='/static/img/about/Group_3298.png' />02-89786638</h5>
          <h5><img className='memberIcon' src='/static/img/about/Group_3295.png' />台北市信義區信義路五段１００號之１</h5>
          <img src='/static/img/about/101.png' />
        </LeftCon>
        <RightCon>
          <MapContent className='mbnone'>
            <img src='/static/img/about/map.png' />
          </MapContent>
        </RightCon>
      </FirstContent>
      <MainContent className=''>
        <h3><img className='prize' src='/static/img/about/hotel.png' /><span className='prizeName'>分店簡介</span></h3>
        <p>在百貨公司及豪宅林立的信義計畫區，是許多頂尖服務業必爭之地，在信義計畫區中心－世界最高地標101大樓旁，信義房屋買下了屬於自己的信義大樓，並於96年10月24日成立了信義101店。 信義101店是信義房屋在台灣的第200家直營單位，也因位於總部的1樓的特殊位置，所以服務的客群包含豪宅、商辦及周邊辦公大樓的商務人士外，還是信義房屋總部服務的重要窗口。 信義101店提供垂直整合的服務，包含個案企劃銷售、室內設計、水電修繕等轉介等服務，希望以強大的整合力、優質的服務人才，提供給客戶最頂級的服務。</p>
      </MainContent>
      <MainContent className=''>
        <h3><span className='prizeName'>商仲二部</span></h3>
        <MemberBlock>
          <Member>
            <MemberCard name='康錫晃' engName='Casper Kang' list1='0945612356' list2='s194806@sinyi.com.tw' list3='s194806' />
          </Member>
          <Member>
            <MemberCard name='康錫晃' engName='Casper Kang' list1='0945612356' list2='s194806@sinyi.com.tw' list3='s194806' />
          </Member>
          <Member>
            <MemberCard name='康錫晃' engName='Casper Kang' list1='0945612356' list2='s194806@sinyi.com.tw' list3='s194806' />
          </Member>
        </MemberBlock>
      </MainContent>
    </TeamBlock>
  )
}

export default Manager