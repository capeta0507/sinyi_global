import React from 'react'
import styled from 'styled-components'

const TeamBlock = styled.div`
  width: 80%;
  margin: 0 auto;
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
    width: 100%;
  }
  @media (max-width: 992px){
    & > img {
      width: 100%;
    }
  }
`
const SpName = styled.div`
  width: 100%;
  color: #969696;
  font-size: 16px;
  text-align: right;
`
const RightCon = styled.div`
  width: 45%;
  // padding-top: 50px;
  @media (max-width: 992px){
    width: 100%;
    padding-top: 0px;
  }
`
const MainContent = styled.div`
  margin: 100px 0 50px 0;
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


const Manager = () => {
  return (
    <TeamBlock>
      <MainContent className='navBlock'>
        <h3><img className='prize' src='/static/img/about/prize.png' /><span className='prizeName'>總經理</span></h3>
        <h1>柯宏安 James Ko</h1>
      </MainContent>
      <FirstContent>
        <LeftCon>
          <Photo>
            <img src='/static/img/about/james_ko.png' />
          </Photo>
          <SpName>柯宏安 James Ko</SpName>
        </LeftCon>
        <RightCon>
          <MainContent className='mbnone'>
            <h3><img className='prize' src='/static/img/about/prize.png' /><span className='prizeName'>總經理</span></h3>
            <h1>柯宏安 James Ko</h1>
          </MainContent>
          <PeopleContwnt>
            <PeopleTitle>個人簡介</PeopleTitle>
            <p>從事不動產業二十多年經驗，熟悉台灣及中國各地之房地產市場狀況，具備不動產整合服務之專業與能力。 領導信義全球資產管理股份有限公司，邁向專業化及國際化，建立信義集團跨國商用不動產服務平台！</p>
          </PeopleContwnt>
        </RightCon>
      </FirstContent>
      <SecondContent>
        <LeftCon>
          <PeopleContwnt>
            <PeopleTitle>個人資歷</PeopleTitle>
            <p><div className='peoList'></div>上海信義房屋總經理</p>
            <p><div className='peoList'></div>信義房屋中南桃竹事業處主管</p>
            <p><div className='peoList'></div>住商不動產董事</p>
            <p><div className='peoList'></div>成大測量及空間資訊學系畢業</p>
          </PeopleContwnt>
        </LeftCon>
        <RightCon>
          <PeopleContwnt>
            <PeopleTitle>參與社團</PeopleTitle>
            <p><div className='peoList'></div>東吳大學EMBA聯誼會</p>
            <p><div className='peoList'></div>台灣連鎖暨加盟協會</p>
          </PeopleContwnt>
          <PeopleContwnt>
            <PeopleTitle>專業證照&專長</PeopleTitle>
            <p><div className='peoList'></div>不動產經紀人證照</p>
          </PeopleContwnt>
        </RightCon>
      </SecondContent>
    </TeamBlock>
  )
}

export default Manager