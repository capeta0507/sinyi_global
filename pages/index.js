import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Layout from '../components/layout'
import MyCarousel from '../components/carousel'
import MobileCarousel from '../components/carouselMobilejs'
import Navbar from '../components/nav/navBarHome'
// import Theme from '../components/theme'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import News from '../components/news/newsList'
import Study from '../components/studyList'
import styled from 'styled-components'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeNav = styled.div`
  width: 100%;
  padding: 30px 0 0 0;
  background:	#263843;
`
const Nav = styled.div`
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  @media (max-width: 992px){
    display: none;
  }
`
const NavMb = styled.div`
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  display: none;
  @media (max-width: 992px){
    display: block;
  }
`
const MbNavList = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 10px;
`

const Home = () => (
  <Layout>
    <Head
      title="信義全球資產"
      description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
    />
    <Navbar />
    <NavHomeMobile />
    <MyCarousel />
    <MobileCarousel />
    <HomeNav>
      <Nav>
        <Link href='/sellList'>
          <a className='navItem place'></a>
        </Link>
        <Link href='/sellList'>
          <a className='navItem shop'></a>          
        </Link>
        <Link href='/sellList'>
          <a className='navItem factory'></a>
        </Link>
        <Link href='/sellList'>
          <a className='navItem land'></a>
        </Link>
        <Link href='/sellList'>
          <a className='navItem other'></a>
        </Link>
      </Nav>
      <NavMb>
        <MbNavList>
          <Link href='/sellList'>
            <a>
              <div className='navItem placeMb2'>
                <img src='/static/img/home_icon/01_m.png' />
              </div>
            </a>
          </Link>
        </MbNavList>
        <MbNavList>
          <Link href='/sellList'>
              <a className='navItem'>
                <img src='/static/img/home_icon/02.png' />
              </a>
          </Link>
          <Link href='/sellList'>
              <a className='navItem'>
                <img src='/static/img/home_icon/03.png' />
              </a>
          </Link>
        </MbNavList>
        <MbNavList>
          <Link href='/sellList'>
              <a className='navItem'>
                <img src='/static/img/home_icon/04.png' />
              </a>
          </Link>
          <Link href='/sellList'>
              <a className='navItem'>
                <img src='/static/img/home_icon/05.png' />
              </a>
          </Link>
        </MbNavList>
      </NavMb>
    </HomeNav>
    {/* <Theme /> */}
    <div className='newsBg'>
      <News />
    </div>
    <Study />
    <FastButton />
  </Layout>
)

export default Home
