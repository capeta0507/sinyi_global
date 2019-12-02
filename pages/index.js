import React from 'react'
// import Link from 'next/link'
import Head from '../components/head'
import Layout from '../components/layout'
import MyCarousel from '../components/carousel'
import MobileCarousel from '../components/carouselMobilejs'
import Navbar from '../components/nav/navBar'
import Theme from '../components/theme'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import News from '../components/news/newsList'
import Study from '../components/studyList'
import styled from 'styled-components'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HomeNav = styled.div`
  width: 100%;
  height: 150px;
  background:	#444444;
`

const Home = () => (
  <Layout>
    <Head
      title="信義房屋集團人才招募網"
      description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
    />
    <Navbar />
    <NavHomeMobile />
    <MyCarousel />
    <MobileCarousel />
    <HomeNav />
    <Theme />
    <News />
    <Study />
    <FastButton />
  </Layout>
)

export default Home
