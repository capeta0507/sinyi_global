import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import Breadcrumb from '../components/breadcrumb'
import OtherNewsCard from '../components/Card/otherNewsCard'
import FastButton from '../components/fastButton'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainContain = styled.div`
  width: 100%;
  padding: 80px 0 50px 0;
  background-color: #fff
  background-image: url(/static/img/icon/white.png);
  background-repeat:  repeat-x;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
  }
`
const Title = styled.div`
  text-align: center;

  & > h1{
    font-weight: bold;
    font-size: 28px;
  }
  @media (max-width: 992px){
    & > h1{
      font-weight: bold;
      font-size: 26px;
    }
  }
`
const NewsDate = styled.div`
  text-align: right;
  color: #B4B4B4;
  font-size: 16px;
`
const TitleImg = styled.img`
  width: 100%;
  @media (max-width: 992px){
    margin-top: 17px;
  }
`
const OtherTitle = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:112px;
  }
`
const Content = styled.div`
  width: 100%;
  margin-top: 45px;
  @media (max-width: 992px){
    width: 90%;
    margin: 0 auto;
  }
`
const ConTitle = styled.div`
  border-left: 4px solid #00B1FF;
  padding-left: 8px;
  font-size: 24px;
  color: #00B1FF;
  @media (max-width: 992px){
    font-size: 18px;
    margin-top: 10px;
  }
`
const ConText = styled.div`
  color: #5A5A5A;
  font-size: 18px;
  padding: 10px 15px;
  margin-top: 11px;
  & > p {
    margin-bottom: 0;
  }
  @media (max-width: 992px){
    font-size:12px;
    padding: 0;
  }
`
const StatisticsImg = styled.div`
  width: 50%;
  margin: 15px 0 7px 5px;
  & > img {
    width: 100%;
  }
  @media (max-width: 992px){
    width: 100%;
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
const DataFrom = styled.div`
  font-size: 16px;
  color: #969696;
`
const OtherNewsContent = styled.div`
  width: 100%;
  padding: 50px 0 50px 0;
  background: #FAFAFA;
`
const NewsBlock = styled.div`
  width: 48%;
  margin: 0 10px;
  position: relative;
  & > img {
    width: 71px;
    position: absolute;
    left: 43%;
  }
  @media (max-width: 992px){
    width: 90%;
    margin: 0 auto;
    & > img {
      width: 50px;
      left: 4%;
      top: 50px;
    }

  }
`
const DownContent = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
  & > span{
    font-size: 16px;
    color: #5A5A5A;
    margin-top: 10px;
    margin-left: 10px;
  }
  @media (max-width: 992px){
    width: 100%;
    display: block;
    margin-top: 40px;
    & > span{
      text-align: center;
    }
  }
`
const DownloadBtn = styled.div`
  width: 144px;
  padding: 10px;
  cursor: pointer;
  background: #00B1FF;
  color: #fff;
  font-size: 16px;
  display: flex;
  border-radius: 5px;
  & > img {
    width: 20px;
  }
  & > span {
    margin-left: 10px;
  }
  @media (max-width: 992px){
    margin: 0 auto;
    margin-top: 10px;
    & > img {
      width: 18px;
      height: 18px;
      margin: 5px 0 0 0px;
    }
    & > span {
      margin-left: 20px;
    }
  }
`

const News = () => {
  return(
    <Layout>
      <Head
        title="{程式抓取新聞標題} - 信義全球資產"
        description="台北科技走廊最後一塊版圖 北士科土地交易發燙"
        url=""
      />
      <Navbar />
      <NavHomeMobile />
      <MainContain>
        <Container>
        <Breadcrumb data={[{title:"新聞" , link:"/newsList"} , {title: "台北科技走廊最後一塊版圖 北士科土地交易發燙"}]}/>
          <Title>
            <h1>台北科技走廊最後一塊版圖 北士科土地交易發燙</h1>
            <NewsDate className='mbnone'>2019/09/24</NewsDate>
            <TitleImg src='/static/img/pic10.png' />
            <NewsDate className='navblock'>2019/09/24</NewsDate>
          </Title>
          <Content>
            <ConText>
              今年土地交易受惠於標售熱潮，各地重劃區土地單價創下歷年新高，信義全球資產統計上市櫃土地交易截至今年8月止，交易金額已遠遠超過2018年全年度，來到937億。而今年以來台北土地交易重獲市場矚目，北市最後一塊科技園區-北投士林科技園區更受到建設公司喜愛，躍為市場新寵兒，今年就出現5筆交易，包含知名建商華固、國泰、長虹等前來搶地，累計購入91億元。<br />
              信義全球資產經理王維宏分析，內湖科技園區及南港軟體園區發展完善，帶動台北科技走廊交易發燒，成為大型企業獵樓熱區，不僅吸引跨國企業進駐，近年來上市櫃對於內湖、南港情有獨鍾，內湖整棟交易比例提高，南港辦公室更是出現每坪百萬交易。由於內科及南軟可開發土地已寥寥無幾，使得台北科技走廊最後一塊版圖-北投士林科技園區交易相當熱絡。今年已有4家建商插旗，包含華固、國泰、長虹、天賀建設等公司前來搶地，而從上市櫃交易可以觀察到，2017年起就有建商來北士科插旗，興利開發以19.84億元買下科專區土地，換算土地每坪單價126萬元，預計興建總部大樓。<br /><br />
              長虹建設持續布局廠辦市場，今年5月以7.9億元買下北士科科專區土地，換算每坪單價157萬元，預計開發辦公大樓，長虹自去年起已連續購入6筆土地，5筆宣布開發辦公大樓。國泰建設在今年7月以5.8億元買下軟橋段住宅土地，簽訂合建分屋及買賣契約，今年累計買進2筆土地，分別在桃園及台北。華固建設今年更大動作的買下2筆科專區土地，以總價30億元買下軟橋段49、53地號，其中一筆土地在去年新世貿資產以每坪155萬元取得，隔一年以每坪165萬元賣給華固建設，短短一年的時間土地每坪上漲10萬。<br /><br />
              為協助北投士林科技園區私有科技產業專用區土地之開發，臺北市政府產業發展局委託信義全球資產，進行現況普查及釐清所有權人土地開發、處份及管理方向，以及協助提供所有權人與需地企業雙方媒合的服務，來加速全區的開發。特別建置資訊平台(http://bstp.gov.taipei/index.php)，提供園區開發定位、都市計畫、私有科專用地租售需求、市有科專用地開發計畫與招商需求等資訊。另外，還設置了諮詢服務專線(（02）8780-8528 李先生)，提供法令諮詢及私有科專用地資訊媒合服務。<br /><br />
            </ConText>
            <ConTitle>2014-2019年全台上市櫃公司土地交易金額 (2019年截至8月底)</ConTitle>
            <StatisticsImg>
              <img src='/static/img/statistics.png' />
            </StatisticsImg>
            <DataFrom>資料來源:信義全球資產</DataFrom>
            <ConTitle>2019年建商購置北士科土地交易明細:</ConTitle>
            <StatisticsImg>
              <img src='/static/img/form.png' />
            </StatisticsImg>
            <DataFrom>資料來源:信義全球資產</DataFrom>
          </Content>
          <DownContent>
            <span className='mbBlock'>台北科技走廊最後一塊版圖</span>
            <DownloadBtn><img src='/static/img/download.png'></img><span>檔案下載</span></DownloadBtn>
            <span className='getMbnone'>台北科技走廊最後一塊版圖</span>
          </DownContent>
        </Container>
        </MainContain>
        <OtherNewsContent>
          <Container>
            <BigTitle>
              <OtherTitle src='/static/img/t4_list.png' />
            </BigTitle>
            <div className='row'>
              <NewsBlock>
                <OtherNewsCard />
                <img className='' src='/static/img/prev_news.png' />
              </NewsBlock>
              <NewsBlock>
                <OtherNewsCard />
                <img className='' src='/static/img/next_news.png' />
              </NewsBlock>
            </div>
          </Container>
        </OtherNewsContent>
      <FastButton />
    </Layout>
  )
}
export default News