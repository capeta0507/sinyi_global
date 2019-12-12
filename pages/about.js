import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import FastButton from '../components/fastButton'
import AboutCard from '../components/Card/aboutCard'
import styled from 'styled-components'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const MakeTop = styled.div`
  width: 100%;
  height: 100px;
`

const BgHead = styled.div`
  width: 100%;
  height: 480px;
  // background: url(/static/img/about.png) no-repeat;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Mask = styled.div`
  background: #000;
  width: 100%;
  height: 580px;
  opacity: .5;
  top: 0px;
`
const Container = styled.div`
  width: 100%;
`
const BigTitle = styled.div`
  text-align: center;
  width: 25%;
  padding: 60px 0 40px 0;
  margin: 0 auto;
  @media (max-width: 768px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const MainTitle = styled.div`
  width: 100%;
  background: #fff;
  padding:50px;
`
const AboutTitle = styled.div`
  text-align: center;
  width: 40%;
  padding: 60px 0 40px 0;
  margin: 0 auto;
`
const MakeChinese = styled.div`
  color: #404040;
`
const MakeEnglish = styled.div`
  color: #878787;
`
const OtherTitle = styled.img`
  width:100%;
`
const AboutUs = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #404040;
`
const Service = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #404040;
  & > h3 {
    color: #000;
    font-size: 24px;
    margin: 0 0 30px 0;
  }
  & > p {
    color: #404040;
    font-size: 18px;
    margin-bottom: 30px;
  }
`
const History = styled.div`
  width: 70%;
  background: #fff;
  margin: 0 auto;
  position: relative;
  margin-top: ${props => props.long ? '50px' : '0px'};
`
const Historybd = styled.img`
  width: 3px;
  height: 1564px;
  left: 6px;
  top: 16px;
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
const AboutContent = styled.div`
  width: 100%;
  background: #F1F1F1;
  padding: 40px 0;
`
const Bdtag = styled.img`
  width: 168px;
  margin: 0 auto;
  margin-top: -40px;
`
const SixTitle = styled.div`
  text-align: center;
  margin: 0px 0 30px 0;
  & > h1 {
    font-weight: bold;
  }
`
const CardBlock = styled.div`
  width: 33%;
  margin: 0 10px;
`
const SixCardBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`
const SixSec = styled.div`
  text-align: center;
  font-size: 22px;
  color: #000;
`


const About = () => (
    <Layout>
      <Head
        title="信義全球資產"
        description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
      />
      <Navbar />
      <NavHomeMobile />
      <MakeTop />
      <BgHead>
        <img src='/static/img/about.png' />
        <Mask className='absolute' />
      </BgHead>
      <Container>
        <BigTitle>
          <OtherTitle src='/static/img/about_us.png' />
        </BigTitle>
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
        <MainTitle>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT2.png' />
          </AboutTitle>
        </MainTitle>
        <AboutContent>
          <AboutUs>
            <MakeChinese>
              秉持著信義企業「以人為本」的精神，我們投注企業資源在企業社會責任上，不遺餘力地，也因此有了「社區一家」贊助計畫的產生，藉由參與社區志工活動，拉近人與人之間的距離，創造善的循環。
              <br /><br />
              企業社會責任除回饋社會，也包括了良好的公司治理: 我們相信，惟有體制健全﹑專業管理﹑風氣良善的企業，才能給員工最好的照顧，保障投資人的權益，甚而透過公司影響力，影響社會大眾。創造企業永續價值的雙贏，啟動善的循環，是我們持續在做的。
            </MakeChinese>
            <br /><br />
            <MakeEnglish>
              Upholding the people-oriented philosophy of the Sinyi Group, we vow to allocate a chunk of our resources in corporate social responsibility—giving birth to the“Community As One” sponsorship program.
              <br /><br />
              This program encourages people to engage in volunteer activities in their neighborhoods to bring people closer together and start the cycle of goodness in the society.
              <br /><br />
              We are dedicated to creating sustainable corporate values that promote good deeds and enabling win-win situations for all.
            </MakeEnglish>
          </AboutUs>
        </AboutContent>
        <MainTitle>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT3.png' />
          </AboutTitle>
        </MainTitle>
        <AboutContent>
          <AboutUs>
            <MakeChinese>
            做為信義集團各專業資源整合，以及全球商用不動產的服務平台，
              <br />
              信義全球資產 提供客戶 在台灣﹑中國﹑日本等亞太不動產投資服務企業進擊 何需遠求?
            </MakeChinese>
            <br />
            <MakeEnglish>
              <p>Armed with integrated professional resources within the Sinyi Group, and complete</p>
              <p>with a service platform for commercial properties around the globe, Sinyi Global offers</p>
              <p>customized services for real estate investments in Taiwan, China, Japan, and across the Asia Pacific.</p>
              <p>We are your number one choice in expanding your enterprise.</p>
            </MakeEnglish>
          </AboutUs>
        </AboutContent>
        <MainTitle>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT4.png' />
          </AboutTitle>
        </MainTitle>
        <History className='textCenter'>
          <SixTitle>
            <h1>商業仲介</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <p>需求精準媒合，滿足客戶多元需求</p>
          <p>信義全球資產熟悉各類商用不動產，交易產品涵蓋純辦、廠辦、店面、商場、旅館、土地等多元產品，提供務實和明確的建議，富有整合性銷售經驗，找到最適合您的地段以及優質物業。信義集團全台通路逾400家直營分店，替您資產做最有效曝光，透過完整商圈地籍資料，讓買賣雙方享有安全的交易，藉由精準的資料庫，第一時間提供適合的物件資料。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
          <SixTitle>
            <h1>租賃招商</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <SixSec>租賃需求分析  /  招商策略擬定  /  拓點展店代尋</SixSec>
          <p>重視租戶權益，創造客戶雙贏契機 </p>
          <p>我們掌握豐富大型租賃物業，專注整棟及整層辦公廠辦及店面商場，協助客戶租賃及招商策略擬定，嚴謹分析前期商場定位規劃，引入優質租戶，有效去化閒置資產，發揮空間最有效利用。與各大企業、建設公司、專業法人機構定期資訊交流，定期掌握市場動向及待租物件，提供您最適合物業，為企業成長最佳後盾。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
          <SixTitle>
            <h1>工業地產</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <SixSec>政府機關合作  /  嚴謹交易安全  /  開發法令諮詢</SixSec>
          <p>全面盤點現況，發掘閒置土地潛力</p>
          <p>建置專責工業地產團隊，具備工業地產豐富經驗，包括倉庫、廠房及工業土地，為您考量交通便利性、基礎建設、擴充潛力與工業區群聚效應。同時與政府機關合作，提供多元流通平台，加速工業土地媒合。信義集團嚴謹安全的交易制度，讓您在建廠開發時多一層保障。信義全球資產擁有長期經營的顧客群，掌握未來趨勢，提出最佳決策。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
          <SixTitle>
            <h1>顧問服務</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <SixSec>資產盤點活化  /  產品定位規劃  /  財務評估建議</SixSec>
          <p>掌握最佳契機，關鍵決策成就非凡</p>
          <p>提供專業市場分析，協助客戶評估閒置資產或選址、拓點分析，透過市場即時競爭分析，到資產重新定位、策略擬定、行銷包裝，協助您從不動產買賣、租賃，到複雜的土地變更與開發，活化閒置資產。信義全球資產擁有北市超過600餘棟商辦大樓的數據分析以及當地市場豐厚的行業分析，運用當前趨勢，提供專屬的客製化服務。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
          <SixTitle>
            <h1>資產管理</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <SixSec>收益改善成長  /  物業管理維護  /  投資策略佈局</SixSec>
          <p>資產仰賴管理，財富用心累積</p>
          <p>有效的資產管理不僅涉及租金收取，運營維護，減少管理費用以及改善資本價值。我們平衡收益及風險，實現良好的資本增長，透過市場調查，評估市場即時競爭分析，到資產重新定位、策略擬定、行銷包裝，協助您從不動產買賣、租賃、選點，到複雜的土地變更與開發，為您找到投資節奏，不但解決財務需求，更創造公司資產價值。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
          <SixTitle>
            <h1>公開標售</h1>
            <Bdtag src='/static/img/aboutTag.png' />
          </SixTitle>
          <SixSec>交易條件磋商  /  媒體行銷曝光  /  標售作業執行</SixSec>
          <p>公正處理資產，嚴謹銷售策略</p>
          <p>我們接受政府機關、企業、私人的委託，透過行銷及策略妥善處理資產，依循嚴謹的標售程序，為客戶創造最高收益。無論您是希望處分開發用地或閒置資產，我們在整個交易過程中為您提供支持。替您盤點現況、提案、曝光、通盤考量，透過對市場的敏銳度及區域發展，準確建議標售底價，並以公平公開的方式，策略性處分資產。</p>
          <SixCardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
            <CardBlock>
              <AboutCard />
            </CardBlock>
          </SixCardBlock>
        </History>
        <MainTitle>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT5.png' />
          </AboutTitle>
        </MainTitle>
        <Service>
          <h3>正確的事持續做  用心才能看見美好</h3>
          <p>信義全球資產為信義集團專營商用不動產及工業地產團隊，我們依據每位客戶需求，透過專業服務團隊的水平分工，加上信義集團上中下游服務鏈的垂直整合，提供客戶全方位顧問服務。涵蓋商業仲介、價格評估、建築開發、預售交易、信託管理等，從台灣發展到海外房地產，依據每位客戶的需求與特性，擬定策略及長遠的資產計劃，信義全球資產為您走在市場及法令的最前端，扮演客戶信賴的房地產後盾。</p>
          <h3>正確的事持續做  用心才能看見美好</h3>
          <p>信義房屋服務創新 獲服務第壹大獎及金仲獎肯定<br />
            深耕CSR的台灣之光 信義房屋12度獲「天下企業公民獎」<br />
            第11度獲得讀者文摘信譽品牌肯定<br />
            連續四年擠進上市公司前5% 信義房屋公司治理獲肯定<br />
            獲《天下雜誌》評選營運績效50強第一名<br />
            榮獲第十四屆《遠見雜誌》「CSR大調查服務業組」首獎及「環境友善組」楷模獎<br />
            再度勇奪亞洲永續報告獎ASRA 信義房屋：人才是企業永續關鍵(2016, 2017)<br />
            信義房屋獲得「全球最具道德企業獎」獎項開辦十二年以來 首家台灣企業獲獎<br />
          </p>
        </Service>
      </Container>

      <FastButton />
    </Layout>
  )
  
  export default About