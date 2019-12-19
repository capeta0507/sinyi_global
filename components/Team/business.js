import React from 'react'
import styled from 'styled-components'
import ItemCard from '../Card/itemCard'

const TeamBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
  }
`
const SecondBlock = styled.div`
  width: 100%;
  background: #fff;
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
  background: #fff;
  justify-content: space-between;
  @media (max-width: 992px){
    width: 100%;
    display: block;
  }
`
const LeftCon = styled.div`
  width: 40%;
  @media (max-width: 992px){
    width: 100%;
    & > img {
      width: 100%;
    }
  }
`
const Photo = styled.div`
  width: 100%;
  & > img {
    width: 80%;
  }
  @media (max-width: 992px){
    & > img {
      width: 100%;
    }
  }
`
const SpName = styled.div`
  width: 78%;
  color: #969696;
  font-size: 16px;
  text-align: right;
  @media (max-width: 992px){
    width: 100%;
    font-size: 12px;
  }
`
const RightCon = styled.div`
  width: 40%;
  @media (max-width: 992px){
    width: 100%
  }
`
const MainContent = styled.div`
  margin: 50px 0 50px 0;
  & > h3 {
    color: #00B1FF;
    font-size: 26px;
  }
  & > h1 {
    color: #000;
    font-size: 38px;
    font-weight: 500;
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
  width: 100%;
  font-size: 18px;
  color: #000;
  & > p {
    display:flex;
  }
  @media (max-width: 992px){
    width: 100%;
  }
`
const MyPhone = styled.div`
  width: 100%;
  margin: 0 auto;
  & > h5{
    display: flex;
    font-size: 20px;
    color: #878787;
    font-weight: 400;
  }
  @media (max-width: 992px){
    width: 60%;
  }
`
const ListContent = styled.div`
  width: 25%;
  margin: 0 10px;
  & > p {
    display:flex;
  }
  @media (max-width: 992px){
    width: 90%;
    margin: 0 auto;
  }
`
const BigTitle = styled.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 992px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:112px;
  }
`
const Show = styled.div`
  width: 82px;
  text-align: center;
  margin-bottom: 80px;
  margin: 0 auto;
  cursor: pointer;
  & > img{
    width: 100%;
  }
`


const Businesser = () => {
  return (
    <>
      <TeamBlock>
        <MainContent className='navBlock'>
          <h3><img className='prize' src='/static/img/about/user.png' /><span className='prizeName'>商仲二部</span></h3>
          <h1>康錫晃 Casper Kang</h1>
        </MainContent>
        <FirstContent>
          <LeftCon>
            <Photo>
              <img src='/static/img/about/casper_kang.png' />
            </Photo>
            <SpName>康錫晃 Casper Kang</SpName>
            <MyPhone className='navBlock'>
              <h5><img className='busIcon' src='/static/img/about/telephone.png' />0945612356</h5>
              <h5><img className='busIcon' src='/static/img/about/message-closed-envelope.png' />s194806@sinyi.com.tw</h5>
              <h5><img className='busIcon' src='/static/img/about/line.png' />s194806</h5>
            </MyPhone>
          </LeftCon>
          <RightCon>
            <MainContent className='mbnone'>
              <h3><img className='prize' src='/static/img/about/user.png' /><span className='prizeName'>商仲二部</span></h3>
              <h1>康錫晃 Casper Kang</h1>
              <MyPhone>
                <h5><img className='busIcon' src='/static/img/about/telephone.png' />0945612356</h5>
                <h5><img className='busIcon' src='/static/img/about/message-closed-envelope.png' />s194806@sinyi.com.tw</h5>
                <h5><img className='busIcon' src='/static/img/about/line.png' />s194806</h5>
              </MyPhone>
            </MainContent>
            <PeopleContwnt>
              <PeopleTitle>個人簡介</PeopleTitle>
              <p>多年來經營內湖科學園區、大直重劃區、內湖五期重劃區，本著協助客戶洞見未來的初衷，帶領商仲一部的夥伴精益求精，於不動產管理領域提供最專業與優質的服務，成為客戶最佳的資產管理顧問。</p>
            </PeopleContwnt>
          </RightCon>
        </FirstContent>
      </TeamBlock>
      <SecondBlock>
        <SecondContent>
          <ListContent>
            <PeopleTitle>個人資歷</PeopleTitle>
            <p><div className='peoList'></div>信義全球資產商仲一部主管</p>
            <p><div className='peoList'></div>信義房屋商仲一組主管</p>
            <p><div className='peoList'></div>信義房屋大直內湖店主管</p>
            <p><div className='peoList'></div>信義房屋內湖文德店、西湖店</p>
            <p><div className='peoList'></div>經紀人</p>
          </ListContent>
          <ListContent>
            <PeopleTitle>參與社團</PeopleTitle>
            <p><div className='peoList'></div>中華民國中小企業總會</p>
            <p><div className='peoList'></div>台北市中小企業協會</p>
          </ListContent>
          <ListContent>
            <PeopleTitle>專業證照&專長</PeopleTitle>
            <p><div className='peoList'></div>高級證券業務員</p>
            <p><div className='peoList'></div>期貨業務人員</p>
            <p><div className='peoList'></div>理財人員</p>
            <p><div className='peoList'></div>信託人員</p>
          </ListContent>
          <ListContent>
            <PeopleTitle>服務實績</PeopleTitle>
            <p><div className='peoList'></div>桃園科技園區科技廠房</p>
            <p><div className='peoList'></div>愛丁堡科技大樓</p>
            <p><div className='peoList'></div>大帝國科技大樓</p>
            <p><div className='peoList'></div>世紀經貿科技大樓</p>
          </ListContent>
        </SecondContent>
      </SecondBlock>
      <BigTitle>
        <TitleImg src='/static/img/about/serviceItem.png' />
      </BigTitle>
      <SecondBlock>
        <SecondContent>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </SecondContent>
        <Show>
          <img src='/static/img/show_all.png' />
        </Show>
      </SecondBlock>
    </>
  )
}

export default Businesser