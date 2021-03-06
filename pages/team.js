import React, {useState} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import Breadcrumb from '../components/breadcrumb'
import FastButton from '../components/fastButton'
import Manager from '../components/Team/Gmanager'
import BusOne from '../components/Team/businessOne'
import Consultant from '../components/Team/consultant'
import Valuation from '../components/Team/valuation'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MakeTop = styled.div`
  width: 100%;
  height: 80px;
  @media (max-width: 992px){
    height: 56px;
  }

`

const BgHead = styled.div`
  width: 100%;
  height: 580px;
  @media (max-width: 1920px){
    height: 580px;
  }
  @media (max-width: 1680px){
    height: 505px;
  }
  @media (max-width: 1560px){
    height: 475px;
  }
  @media (max-width: 1366px){
    height: 415px;
  }
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 992px){
    display: none;
  }
`
const BgHeadMb = styled.div`
  width: 100%;
  height: 213px;
  display: none;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 992px){
    display: block;
  }
  @media (max-width: 375px){
    height: 194px;
  }
`
const BgTag = styled.div`
  width: 100%;
  position: absolute;
  top: 19%;
  @media (max-width: 1920px){
    top: 24%;
  }
  @media (max-width: 1680px){
    top: 26%;
  }
  @media (max-width: 1560px){
    top: 35%;
  }
  @media (max-width: 1440px){
    top: 30%;
  }
  @media (max-width: 1366px){
    top: 31%;
  }
  @media (max-width: 992px){
    top: 17%;
  }
`
const HeadDes = styled.h1`
  font-size: 53px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: ${props => props.second ? '400px' : '300px'};
  left: 210px;
`
const Mask = styled.div`
  background: #000;
  width: 100%;
  height: 580px;
  opacity: .5;
  top: 0px;
`
const NavTeam = styled.div`
  width: 100%;
  background: #566A77;
  padding: 14px 0;
  @media (max-width: 992px){
    display: none;
  }
`
const NavList = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  @media (max-width: 1560px){
    width: 70%;
  }
  @media (max-width: 1366px){
    width: 73%;
  }
  @media (max-width: 1280px){
    width: 80%;
  }
`
const NavItem = styled.div`
  display: flex;
  border-left: 1px solid #969696;
  border-right: 1px solid #969696;
  padding: 0 30px;
`
const ItemName = styled.div`
  color: #969696;
  cursor: pointer;
  font-size: 16px;
  &:hover{
    color: #fff;
  }
`

const Container = styled.div`
  width: 100%;
  background: #F1F1F1;
  padding-top: 50px;
  padding-bottom: 100px;
`
const Bread = styled.div`
  width: 80%;
  margin: 0 auto;
`
const TagText = styled.div`
  text-align: left;
  font-size: 60px;
  font-weight: bold;
  color: #000;
  @media (max-width: 992px){
    font-size: 26px;
  }
`


const Team = () => {
  const [page, setPage] = useState(1)

  const changeTeam = (pageIdx) => {
    setPage(pageIdx)
  }

  const col01 = page == 1 ? 'teamActive' : ''
  const col02 = page == 2 ? 'teamActive' : ''
  const col03 = page == 3 ? 'teamActive' : ''
  const col04 = page == 4 ? 'teamActive' : ''
  const col05 = page == 5 ? 'teamActive' : ''
  const col06 = page == 6 ? 'teamActive' : ''
  const col07 = page == 7 ? 'teamActive' : ''
  const col08 = page == 8 ? 'teamActive' : ''
  return (
    <Layout>
      <Head
          title="信義全球資產"
          description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
      />
      <Navbar />
      <NavHomeMobile changeTeam={changeTeam} />
      <MakeTop />
      <BgHead>
        <BgTag>
          <div className='container'>
            <TagText>信義全球資產<br />信義集團專營商用地產團隊</TagText>
          </div>
        </BgTag>
        <img src='/static/img/aboutbanner/teams.jpg' />
      </BgHead>
      <BgHeadMb>
        <BgTag>
          <div className='container'>
            <TagText>信義全球資產<br />信義集團專營商用地產團隊</TagText>
          </div>
        </BgTag>
        <img src='/static/img/aboutbanner/teams.jpg' />
      </BgHeadMb>
      <NavTeam>
        <NavList>
          <NavItem>
            <a href='/team'>
              <ItemName className={`${col01}`} onClick={() => {
                setPage(1)
              }}>總經理</ItemName>
            </a>
          </NavItem>
          <NavItem>
            <ItemName className={`${col02}`} onClick={() => {
                setPage(2)
              }}>商仲一部</ItemName>&nbsp;&nbsp;&nbsp;&nbsp; <ItemName className={`${col03}`} onClick={() => {
                setPage(3)
              }}>商仲二部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName className={`${col04}`} onClick={() => {
                setPage(4)
              }}>投資一部</ItemName>&nbsp;&nbsp;&nbsp;&nbsp; <ItemName className={`${col05}`} onClick={() => {
                setPage(5)
              }}>投資二部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName className={`${col06}`} onClick={() => {
                setPage(6)
              }}>工業地產部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName className={`${col07}`} onClick={() => {
                setPage(7)
              }}>顧問服務團隊</ItemName>
          </NavItem>
          <NavItem>
            <ItemName className={`${col08}`} onClick={() => {
              setPage(8)
            }}>估價師團隊</ItemName>
          </NavItem>
        </NavList>
      </NavTeam>
      <Container>
        <Bread>
          <Breadcrumb second='團隊介紹' />
        </Bread>
        {(() => {
          if(page == 1){
            return (<Manager />)
          } else if(page == 2){
            return(<BusOne plane='商仲一部' />)
          } else if(page == 3){
            return(<BusOne plane='商仲二部' />)
          } else if(page == 4){
            return(<BusOne plane='投資一部' />)
          } else if(page == 5){
            return(<BusOne plane='投資二部' />)
          } else if(page == 6){
            return(<BusOne plane='工業地產部' />)
          } else if(page == 7){
            return(<Consultant />)
          } else if(page == 8){
            return(<Valuation />)
          }

        })()}
        {/* 總經理 */}
        {/* <Manager /> */}
        {/* 商仲部門 */}
        {/* <BusOne /> */}
        {/* 顧問服務團隊 */}
        {/* <Consultant /> */}
        {/* 估價師團隊 */}
        {/* <Valuation /> */}
      </Container>
      <FastButton />
    </Layout>
  )
}

export default Team