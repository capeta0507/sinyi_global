import React,{useState, useEffect} from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import Breadcrumb from '../components/breadcrumb'
import PcAbout from '../components/about/pcAbout'
import MbAbout from '../components/about/mbAbout'
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
const BgTag = styled.div`
  width: 100%;
  position: absolute;
  top: 31%;
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
    top: 18%;
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
const Desk = styled.div`
  display: block;
  @media (max-width: 992px){
    display: none;
  }
`
const Mb = styled.div`
  display: none;
  @media (max-width: 992px){
    display: block;
  }
`
const Container = styled.div`
  width: 100%;
  background: url(/static/img/icon/logo.png) no-repeat;
  background-position: 50% 100px;
  background-attachment: fixed;
  @media (max-width: 992px){
    background: none;
    background-position: 0;
    background-attachment: none;
  }
`
const BigTitle = styled.div`
  text-align: center;
  width: 30%;
  padding: 40px 0 0px 0;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 85%;
    padding: 0;
    padding-top: 20px;
  }
`
const OtherTitle = styled.img`
  width:100%;
`
const AboutUs = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #404040;
  @media (max-width: 992px){
    width: 90%;
  }
`
const History = styled.div`
  width: 70%;
  // background: #fff;
  margin: 0 auto;
  position: relative;
  margin-top: ${props => props.long ? '50px' : '0px'};
  @media (max-width: 992px){
    width: 90%;
  }
`
const Historybd = styled.img`
  width: 3px;
  height: 1564px;
  left: 6px;
  top: 16px;
  @media (max-width: 1560px){
    height: 1585px;
  }
  @media (max-width: 992px){
    height: 2414px;
  }
`
const HistoryList = styled.div`
  width: 90%;
  margin-left: 60px;
  margin-top:30px;
  margin-bottom:30px;
  & > p{
    margin-bottom: 10px;
    font-size: 16px;
    color: #878787;
  }
  @media (max-width: 992px){
    margin-left: 26px;
    margin-top:20px;
  }
`
const Point = styled.img`
  width: 14px;
  height: 14px;
  left: 0;
`
const ListTitle = styled.div`
  color: #000;
  font-size: 24px;
  margin-left: 30px;
  font-weight: 600;
`
const Bread = styled.div`
  width: 80%;
  margin: 0 auto;
`
const TagText = styled.div`
  text-align: right;
  font-size: 60px;
  font-weight: bold;
  color: #000;
  @media (max-width: 992px){
    font-size: 30px;
  }
`

const About = () => {
  const [displayHistory, setDisplayHistory] = useState(false)

  const showHistory = (event) => {
    event.preventDefault();
    setDisplayHistory(!displayHistory)
  }

  useEffect(() => {
    if(window.location.pathname === '/about'){
      setTimeout(() => {
        setDisplayHistory(true)
      },1000)
    }
  },[1])
  const coll01 = displayHistory ? 'downActive' : '' ;
  return(
    <Layout>
      <Head
        title="公司介紹 - 信義全球資產"
        description="信義全球資產整合商用不動產投資、代理、顧問與資產管理服務，提供客戶更專業、全面的服務。秉持著信義企業立業宗旨：實現家業夢想，扮演客戶一路上最值得信賴的成長夥伴。"
        url=""
      />
      <Navbar />
      <NavHomeMobile />
      <MakeTop />
      <BgHead>
        <BgTag>
          <div className='container'>
            <TagText>我們珍惜所託<br />看見資產雋永價值</TagText>
          </div>
        </BgTag>
        <img src='/static/img/aboutbanner/company_intor.jpg' />
      </BgHead>
      <BgHeadMb>
        <BgTag>
          <div className='container'>
            <TagText>我們珍惜所託<br />看見資產雋永價值</TagText>
          </div>
        </BgTag>
        <img src='/static/img/aboutbanner/company_intor.jpg' />
      </BgHeadMb>
      <Desk>
        <Container>
          <Bread>
            <Breadcrumb data={[{title:"公司簡介" , link:"/about"}]}/>
          </Bread>
          <BigTitle>
            <OtherTitle src='/static/img/about_us.png' />
          </BigTitle>
          {/* seo h1 */}
          <h1 className='zero'>關於我們</h1>
          <AboutUs>
            信義全球資產(Sinyi Global)，為臺灣上市公司信義房屋(TWSE：9940)集團之內，專營商用不動產的全資子公司，創立20多年來，
            業務範疇從商業仲介、租賃招商、公開標售，擴及工業地產、資產管理、顧問服務等。
            營運期間協助3000組以上客戶完成不動產交易，累計交易金額逾800億元。
            作為臺灣商用不動產領導品牌，信義全球資產整合信義集團完整的上、中、下游及關聯產業服務，
            以及400多個直營據點及行銷通路，滿足客戶多元及客製化服務，為企業成長最佳後盾。
            <br /><br />
            Sinyi Realty is tasked with the mission of helping people fulfill their dreams of becoming a homeowner, while playing the role as the most trustworthy partner that grows with our clients.
            <br /><br />
            In January 2010, Sinyi Global Assets Management Ltd. was inaugurated by merging the Commercial Property Brokerage Department, which had been long devoted to the commercial properties in Taipei and a true player in commercial real estate, with the Assets Management Department, which had been offering asset consulting services for foreign investment funds such as Morgan Stanley ever since NPL came into being.
            <br /><br />
            Together, we now offer integrated commercial property services, such as investment, brokerage, consulting, and asset management, to professionally cater to our clients’diverse needs.

          </AboutUs>
          <History long>
            <Historybd className='absolute' src='/static/img/aboutBorder.png' />
            <Point className='absolute point1' src='/static/img/point.png' />
            <ListTitle>2004-2006</ListTitle>
            <HistoryList>
              <p>獲Cheers雜誌「最佳企業雇主」</p>
              <p>信義房屋直營店店數突破200家店，信義101店開幕</p>
              <p>信義企業集團全球營業總部成立，並進駐「信義大樓」</p>
              <p>連續14年蟬聯天下雜誌「五百大服務業」不動產經紀類第一名(1995-2008)</p>
              <p>連續3年蟬聯遠見雜誌「企業社會責任獎」-服務業楷模</p>
              <p>Recognized as the Best Enterprise Employer by Cheers Magazine</p>
              <p>The number of direct stores hit 200 with the grand opening of the Sinyi Store near Taipei 101</p>
              <p>Sinyi Group Global Headquarters established in the Sinyi Building</p>
              <p>Ranked No.1 in Top 500 Service Industry Companies in the Realty Agency category by Common-Wealth Magazine for 14 consecutive years (1995-2008)</p>
              <p>Won the Corporate Social Responsibility - Service Model Award from Global Views Magazine for 3 years in a row</p>
            </HistoryList>
            <Point className='absolute point2' src='/static/img/point.png' />
            <ListTitle>2001-2005</ListTitle>
            <HistoryList>
              <p>與業界合資成立吉家網，成為台灣最大不動產交易平台</p>
              <p>信義房屋成為國內唯一股票上市房仲</p>
              <p>信義不動產估價事務所正式掛牌營業，不動產估價邁向新里程碑</p>
              <p>連續14年蟬聯天下雜誌「五百大服務業」不動產經紀類第一名(1995-2008)</p>
              <p>獲中國國務院頒發「中國房地產百強企業第二名」</p>
              <p>Co-founded GigaHouse in a joint venture with other real estate partners to become the biggest real estate trading platform in Taiwan</p>
              <p>Became the first listed real estate agency in the Taiwan Exchange</p>
              <p>Sinyi Real Estate Valuation Office officially launched, marking a new milestone in real estate valuation</p>
              <p>Awarded Second Place in China’s Top 100 Real Estate Companies by China's State Council</p>
            </HistoryList>
            <Point className='absolute point3' src='/static/img/point.png' />
            <ListTitle>1996-2000</ListTitle>
            <HistoryList>
              <p>信義房屋為全國第一家實施「成屋履約保證制度」的房屋仲介公司</p>
              <p>信義房屋推出國內首見「信義房價指數」，提供更客觀的市場行情</p>
              <p>取得美國知名房仲品牌Goldwell Banker大中國地區品牌代理權</p>
              <p>Full implementation of the House Performance Assurance System, as the first real estate agency to launch this new </p>
              <p>secure trading system in Taiwan</p>
              <p>Launched Sinyi Housing Price Indexes to offer realistic market price information</p>
              <p>Became an official brand agency for Goldwell Banker, an renowned American real estate franchise, in the Greater </p>
              <p>China region</p>
            </HistoryList>
            <Point className='absolute point4' src='/static/img/point.png' />
            <ListTitle>1991-1995</ListTitle>
            <HistoryList>
              <p>成立流程管理推動組織，展開服務品質元年</p>
              <p>實施「購屋全面保障系統」</p>
              <p>上海信義房屋開幕，正式跨足大陸市場</p>
              <p>「土地登記專業流程」獲頒第四屆品質優良案例獎</p>
              <p>Established the Process Management Promotion Organization, ushering into the era of high service quality</p>
              <p>Implemented the Comprehensive Protection System for Homebuyers</p>
              <p>Grand opening of Sinyi Shanghai, officially branching out to the China market</p>
              <p>Our Land Registration Process won the 4th Best Practice of Quality Management Award</p>
            </HistoryList>
            <Point className='absolute point5' src='/static/img/point.png' />
            <ListTitle>1981-1990</ListTitle>
            <HistoryList>
              <p>1981年3月公司成立</p>
              <p>率先採行「先調查產權，再進行買賣」</p>
              <p>總公司成立，導入CIS，強化企業形象</p>
              <p>製作「不動產說明書」，創仲介業製作「不動產說明書」之先</p>
              <p>Founded in March 1981</p>
              <p>A pioneer in implementing the Pre-Sale Property Rights Investigation system</p>
              <p>Headquarters established, incorporating CIS and strengthening corporate image</p>
              <p>The first in the industry to provide Real Estate Statements</p>
            </HistoryList>
          </History>
          <PcAbout />
          <MbAbout />
        </Container>
      </Desk>
      <Mb>
        <Container>
          <BigTitle onClick={showHistory}>
            <OtherTitle src='/static/img/about_us_mb.png' />
            <img className={`aboutdown ${coll01}`} src='static/img/about_down.png' />
          </BigTitle>
          {
            displayHistory ?(
              <React.Fragment>
                <AboutUs>
                  信義全球資產(Sinyi Global)，為臺灣上市公司信義房屋(TWSE：9940)集團之內，專營商用不動產的全資子公司，創立20多年來，
                  業務範疇從商業仲介、租賃招商、公開標售，擴及工業地產、資產管理、顧問服務等。
                  營運期間協助3000組以上客戶完成不動產交易，累計交易金額逾800億元。
                  作為臺灣商用不動產領導品牌，信義全球資產整合信義集團完整的上、中、下游及關聯產業服務，
                  以及400多個直營據點及行銷通路，滿足客戶多元及客製化服務，為企業成長最佳後盾。
                  <br /><br />
                  Sinyi Realty is tasked with the mission of helping people fulfill their dreams of becoming a homeowner, while playing the role as the most trustworthy partner that grows with our clients.
                  <br /><br />
                  In January 2010, Sinyi Global Assets Management Ltd. was inaugurated by merging the Commercial Property Brokerage Department, which had been long devoted to the commercial properties in Taipei and a true player in commercial real estate, with the Assets Management Department, which had been offering asset consulting services for foreign investment funds such as Morgan Stanley ever since NPL came into being.
                  <br /><br />
                  Together, we now offer integrated commercial property services, such as investment, brokerage, consulting, and asset management, to professionally cater to our clients’diverse needs.

                </AboutUs>
                <History long>
                  <Historybd className='absolute' src='/static/img/aboutBorder.png' />
                  <Point className='absolute point1' src='/static/img/point.png' />
                  <ListTitle>2004-2006</ListTitle>
                  <HistoryList>
                    <p>獲Cheers雜誌「最佳企業雇主」</p>
                    <p>信義房屋直營店店數突破200家店，信義101店開幕</p>
                    <p>信義企業集團全球營業總部成立，並進駐「信義大樓」</p>
                    <p>連續14年蟬聯天下雜誌「五百大服務業」不動產經紀類第一名(1995-2008)</p>
                    <p>連續3年蟬聯遠見雜誌「企業社會責任獎」-服務業楷模</p>
                    <p>Recognized as the Best Enterprise Employer by Cheers Magazine</p>
                    <p>The number of direct stores hit 200 with the grand opening of the Sinyi Store near Taipei 101</p>
                    <p>Sinyi Group Global Headquarters established in the Sinyi Building</p>
                    <p>Ranked No.1 in Top 500 Service Industry Companies in the Realty Agency category by Common-Wealth Magazine for 14 consecutive years (1995-2008)</p>
                    <p>Won the Corporate Social Responsibility - Service Model Award from Global Views Magazine for 3 years in a row</p>
                  </HistoryList>
                  <Point className='absolute point2' src='/static/img/point.png' />
                  <ListTitle>2001-2005</ListTitle>
                  <HistoryList>
                    <p>與業界合資成立吉家網，成為台灣最大不動產交易平台</p>
                    <p>信義房屋成為國內唯一股票上市房仲</p>
                    <p>信義不動產估價事務所正式掛牌營業，不動產估價邁向新里程碑</p>
                    <p>連續14年蟬聯天下雜誌「五百大服務業」不動產經紀類第一名(1995-2008)</p>
                    <p>獲中國國務院頒發「中國房地產百強企業第二名」</p>
                    <p>Co-founded GigaHouse in a joint venture with other real estate partners to become the biggest real estate trading platform in Taiwan</p>
                    <p>Became the first listed real estate agency in the Taiwan Exchange</p>
                    <p>Sinyi Real Estate Valuation Office officially launched, marking a new milestone in real estate valuation</p>
                    <p>Awarded Second Place in China’s Top 100 Real Estate Companies by China's State Council</p>
                  </HistoryList>
                  <Point className='absolute point3' src='/static/img/point.png' />
                  <ListTitle>1996-2000</ListTitle>
                  <HistoryList>
                    <p>信義房屋為全國第一家實施「成屋履約保證制度」的房屋仲介公司</p>
                    <p>信義房屋推出國內首見「信義房價指數」，提供更客觀的市場行情</p>
                    <p>取得美國知名房仲品牌Goldwell Banker大中國地區品牌代理權</p>
                    <p>Full implementation of the House Performance Assurance System, as the first real estate agency to launch this new </p>
                    <p>secure trading system in Taiwan</p>
                    <p>Launched Sinyi Housing Price Indexes to offer realistic market price information</p>
                    <p>Became an official brand agency for Goldwell Banker, an renowned American real estate franchise, in the Greater </p>
                    <p>China region</p>
                  </HistoryList>
                  <Point className='absolute point4' src='/static/img/point.png' />
                  <ListTitle>1991-1995</ListTitle>
                  <HistoryList>
                    <p>成立流程管理推動組織，展開服務品質元年</p>
                    <p>實施「購屋全面保障系統」</p>
                    <p>上海信義房屋開幕，正式跨足大陸市場</p>
                    <p>「土地登記專業流程」獲頒第四屆品質優良案例獎</p>
                    <p>Established the Process Management Promotion Organization, ushering into the era of high service quality</p>
                    <p>Implemented the Comprehensive Protection System for Homebuyers</p>
                    <p>Grand opening of Sinyi Shanghai, officially branching out to the China market</p>
                    <p>Our Land Registration Process won the 4th Best Practice of Quality Management Award</p>
                  </HistoryList>
                  <Point className='absolute point5' src='/static/img/point.png' />
                  <ListTitle>1981-1990</ListTitle>
                  <HistoryList>
                    <p>1981年3月公司成立</p>
                    <p>率先採行「先調查產權，再進行買賣」</p>
                    <p>總公司成立，導入CIS，強化企業形象</p>
                    <p>製作「不動產說明書」，創仲介業製作「不動產說明書」之先</p>
                    <p>Founded in March 1981</p>
                    <p>A pioneer in implementing the Pre-Sale Property Rights Investigation system</p>
                    <p>Headquarters established, incorporating CIS and strengthening corporate image</p>
                    <p>The first in the industry to provide Real Estate Statements</p>
                  </HistoryList>
                </History>
              </React.Fragment>
            ) : (
              ''
            )
          }
          <PcAbout />
          <MbAbout />
        </Container>
      </Mb>
      <FastButton />
    </Layout>
    )
  }
  
  export default About