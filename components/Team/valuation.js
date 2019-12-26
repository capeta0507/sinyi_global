import React from 'react'
import styled from 'styled-components'
import ValuationCard from '../Card/valuationCard'
import Link from 'next/link'

const TeamBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1560px){
    width: 85%;
  }
  @media (max-width: 1440px){
    width: 90%;
  }
  @media (max-width: 1366px){
    width: 95%;
  }
  @media (max-width: 1280px){
    width: 100%;
  }
  @media (max-width: 992px){
    width: 100%;
  }
`
const FirstContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 992px){
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
  @media (max-width: 992px){
    width: 90%;
    display: block;
  }
`
const LeftCon = styled.div`
  width: 45%;
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
  @media (max-width: 992px){
    width: 100%;
    text-align: center;
    & > img {
      width: 100%;
    }
  }
`
const RightCon = styled.div`
  width: 55%;
  @media (max-width: 992px){
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
  @media (max-width: 992px){
    margin: 20px 0 0 50px;
    & > h3 {
      font-size: 21px;
    }
    & > h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 992px){
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
  // justify-content: space-between;
  flex-wrap: wrap;
  margin: 29px 0;
`
const Member = styled.div`
  width: 32%;
  padding: 10px;
  @media (max-width: 992px){
    width: 100%;
    padding: 0px;
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
  @media (max-width: 992px){
    width: 100%;
  }
`


const Consultant = () => {
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
          <MapContent>
            <img src='/static/img/about/map.png' />
          </MapContent>
        </RightCon>
      </FirstContent>
      <MainContent className=''>
        <h3><span className='prizeName'>估價師團隊</span></h3>
        <MemberBlock>
          <Member>
            <a href='https://app.sinyi.com.tw/branch/branch.php#top1' target="_blank">
              <ValuationCard name='邱千惠' years='19年' />
            </a>
          </Member>
          <Member>
            <a href='https://app.sinyi.com.tw/branch/branch.php#top2' target="_blank">
              <ValuationCard name='遲維斯' years='17年' />
            </a>
          </Member>
          <Member>
            <a href='https://app.sinyi.com.tw/branch/branch.php#top3' target="_blank">
              <ValuationCard name='王士鳴' years='8年' />
            </a>
          </Member>
          <Member>
            <a href='https://app.sinyi.com.tw/branch/branch.php#top4' target="_blank">
              <ValuationCard name='紀亮安' years='13年' />
            </a>
          </Member>
          <Member>
            <a href='https://app.sinyi.com.tw/branch/branch.php#top5' target="_blank">
              <ValuationCard name='蔡文哲' years='8年' />
            </a>
          </Member>
        </MemberBlock>
      </MainContent>
    </TeamBlock>
  )
}

export default Consultant