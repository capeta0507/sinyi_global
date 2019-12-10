import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const News = () => {
    return(
      <Layout>
        <Head
          title="信義全球資產"
          description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
        />
        <Navbar />
        <NavHomeMobile />
        <FastButton />
      </Layout>
    )
}
export default News