import React, {useState} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import Manager from '../components/Team/Gmanager'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MakeTop = styled.div`
  width: 100%;
  height: 100px;
`

const BgHead = styled.div`
  width: 100%;
  height: 480px;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px){
    display: none;
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
  @media (max-width: 768px){
    display: none;
  }
`
const NavList = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
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
  margin-top: 80px
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
  @media (max-width: 768px){
    width: 100%;
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
  @media (max-width: 768px){
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
  @media (max-width: 768px){
    width: 100%;
  }
`


const Team = () => {
  return (
    <Layout>
      <Head
          title="信義全球資產"
          description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
      />
      <Navbar />
      <NavHomeMobile />
      <MakeTop />
      <BgHead>
        <img src='/static/img/about/teamAbout.png' />
        <Mask className='absolute' />
        <HeadDes>您就是我們的家人！</HeadDes>
        <HeadDes second>讓我們在信義一同完成家業夢想！</HeadDes>
      </BgHead>
      <NavTeam>
        <NavList>
          <NavItem>
            <ItemName className='teamActive'>總經理</ItemName>
          </NavItem>
          <NavItem>
            <ItemName>商仲一部</ItemName>&nbsp;&nbsp;&nbsp;&nbsp; <ItemName>商仲二部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName>投資一部</ItemName>&nbsp;&nbsp;&nbsp;&nbsp; <ItemName>投資二部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName>工業地產部</ItemName>
          </NavItem>
          <NavItem>
            <ItemName>顧問服務團隊</ItemName>
          </NavItem>
          <NavItem>
            <ItemName>估價師團隊</ItemName>
          </NavItem>
        </NavList>
      </NavTeam>
      <Container>
        <Manager />
      </Container>
      <FastButton />
    </Layout>
  )
}

export default Team