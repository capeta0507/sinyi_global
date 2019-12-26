import React, {useState} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import Breadcrumb from '../components/breadcrumb'
import Link from 'next/link'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import Businesser from '../components/Team/business'
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
  height: 500px;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 992px){
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
  background: #F3F3F3;
  // background: linear-gradient(to top, #f1f1f1, rgba(255, 255, 255, 0));
  padding-top: 0px;
`
const Bread = styled.div`
  width: 80%;
  margin: 0 auto;
`


const Team = () => {
  return (
    <Layout>
      <Head
        title="{部門/職稱}{抓取網頁姓名} - 信義全球資產"
        description=""
        url=""
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
            <a href='/team_manager'>
              <ItemName>總經理</ItemName>
            </a>
          </NavItem>
          <NavItem>
            <a href='/team_BusinessOne'>
              <ItemName>商仲一部</ItemName>
            </a>&nbsp;&nbsp;&nbsp;&nbsp; 
            <a href='/team_BusinessTwo'>
              <ItemName className='teamActive'>商仲二部</ItemName>
            </a>
          </NavItem>
          <NavItem>
            <a href='/team_investmentOne'>
              <ItemName>投資一部</ItemName>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <a href='/team_investmentTwo'>
              <ItemName>投資二部</ItemName>              
            </a>
          </NavItem>
          <NavItem>
            <a href='/team_industry'>
              <ItemName>工業地產部</ItemName>
            </a>
          </NavItem>
          <NavItem>
            <a href='/team_Consultant'>
              <ItemName>顧問服務團隊</ItemName>
            </a>
          </NavItem>
          <NavItem>
            <a href='/team_Valuation'>
              <ItemName>估價師團隊</ItemName>
            </a>
          </NavItem>
        </NavList>
      </NavTeam>
      <Container>
        {/* seo h1 */}
        <h1 className='zero'>商仲一部/專員 康錫晃</h1>
        <Bread>
          <Breadcrumb data={[{title:"團隊介紹" , link:"/team_manager"}]} />
        </Bread>
        {/* 同仁明細 */}
        <Businesser />
      </Container>
      <FastButton />
    </Layout>
  )
}

export default Team