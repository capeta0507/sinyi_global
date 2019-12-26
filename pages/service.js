import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import Breadcrumb from '../components/breadcrumb'
import FastButton from '../components/fastButton'
import styled from 'styled-components'
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
  height: 415px;
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
`

const Container = styled.div`
  width: 100%;
  padding: 0px 0 30px 0;
  background-color: #fff;
  background-image: url(/static/img/icon/white.png);
  background-repeat:  repeat-x;
`
const PeopleTitle = styled.div`
  font-size: 24px;
  width: 100%;
  border-bottom: 3px solid #00B1FF;
  padding-bottom: 8px;
  font-weight: bold;
  margin-bottom: 8px;
`
const PeopleContent = styled.div`
  width: 300px;
  font-size: 18px;
  color: #000;
  & > p {
    color: #878787;
    display:flex;
  }
  @media (max-width: 992px){
    width: 100%;
    text-align: center;
    & > p {
      color: #878787;
      display:block;
      text-align: center;
    }
  }
`
const Content = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
  justify-content: ${props => props.second ? 'flex-start' : 'flex-start'};
  @media (max-width: 1920px){
    width: 70%;
  }
  @media (max-width: 1560px){
    width: 75%;
  }
  @media (max-width: 1440px){
    width: 80%;
  }
  @media (max-width: 1366px){
    width: 85%;
  }
  @media (max-width: 1280px){
    width: 90%;
  }
  @media (max-width: 992px){
    width: 90%;
    display: block;
  }
`
const JustTitle = styled.div`
  font-size: 18px;
  width: 100%;
  border-bottom: 1px solid #B4B4B4;
  padding-bottom: 8px;
  font-weight: bold;
  margin-bottom: 8px;
`
const JustContent = styled.div`
  width: 150px;
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  margin-left: 20px;
  & > p {
    display:flex;
    color: #00B1FF;
  }
  @media (max-width: 992px){
    width: 40%;
    text-align: center;
    margin: 0 auto;
    & > p {
      display:flex;
      color: #00B1FF;
      text-align: center;
    }
  }
`
const MapContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: #F3F3F3;
`
const MapContent = styled.div`
  width: 60%;
  margin: 0 auto;
  & > img {
    width: 100%;
  }
  @media (max-width: 992px){
    width: 100%;
  }
`
const Bread = styled.div`
  width: 80%;
  margin: 0 auto;
`

const About = () => {
  return(
    <Layout>
      <Head
        title="服務據點 - 信義全球資產"
        description="工業地產部：台北市內湖區洲子街73之1號、總部：台北市信義區信義路五段2號11樓震旦國際大樓、商業仲介部：台北市松山區南京東路三段276號"
        url=""
      />
      <Navbar />
      <NavHomeMobile />
      <MakeTop />
      <BgHead>
        <img src='/static/img/aboutbanner/banner-2.png' />
      </BgHead>
      <BgHeadMb>
        <img src='/static/img/aboutbanner/M_banner-2.png' />
      </BgHeadMb>
      <Container>
        <Bread>
          <Breadcrumb data={[{title:"服務據點" , link:"/service"}]}/>
        </Bread>
        <h2 className='textCenter serviceTitle'><img className='serviceIcon' src='/static/img/about/service_phone.png' />服務電話</h2>
        <Content>
          <PeopleContent>
            <PeopleTitle>總部-震旦國際大樓</PeopleTitle>
            <p>台北市信義區信義路五段2號11樓</p>
          </PeopleContent>
          <JustContent>
            <JustTitle>公司代表號</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-2758-5880</p>
          </JustContent>
          <JustContent>
            <JustTitle>投資一部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-8978-8695</p>
          </JustContent>
          <JustContent>
            <JustTitle>投資二部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-8979-5098</p>
          </JustContent>
          <JustContent>
            <JustTitle>商仲一部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-8978-8691</p>
          </JustContent>
          <JustContent>
            <JustTitle>顧問發展部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-2720-8896</p>
          </JustContent>
          {/* seo h1 */}
          <h1 className='zero'>服務據點</h1>
        </Content>
        <Content second>
          <PeopleContent>
            <PeopleTitle>商業仲介部</PeopleTitle>
            <p>台北市松山區南京東路三段276號</p>
          </PeopleContent>
          <JustContent>
            <JustTitle>商仲二部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-8978-8692</p>
          </JustContent>
        </Content>
        <Content second>
          <PeopleContent>
            <PeopleTitle>工業地產部</PeopleTitle>
            <p>台北市內湖區洲子街73之1號</p>
          </PeopleContent>
          <JustContent>
            <JustTitle>工業地產部</JustTitle>
            <p><img className='placeIcon' src='/static/img/about/Group_3298.png' />02-2659-2828</p>
          </JustContent>
        </Content>
        <h2 className='textCenter serviceTitle'><img className='serviceIcon' src='/static/img/about/placeholder.png' />服務據點</h2>
      </Container>
      <MapContainer>
        <MapContent>
          <img src='/static/img/about/Group_3579.png' />
        </MapContent>
      </MapContainer>
      <FastButton />
    </Layout>
    )
  }
  
  export default About