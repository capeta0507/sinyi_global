import React, {Component} from 'react'
import styled from 'styled-components'
import AboutCard from '../Card/aboutCard'

const MainTitle = styled.div`
  width: 100%;
  background: #fff;
  padding:50px;
  @media (max-width: 992px){
    padding:0 30px;
  }
`
const AboutTitle = styled.div`
  text-align: center;
  width: 40%;
  padding: 60px 0 40px 0;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
    padding: 10px 0 0px 0;
  }
`
const MakeChinese = styled.div`
  color: #404040;
  line-height: 30px;
  font-size: 14px;
`
const MakeEnglish = styled.div`
  color: #878787;
  line-height: 30px;
  font-size: 14px;
`
const OtherTitle = styled.img`
  width:100%;
`
const AboutUs = styled.div`
  width: 60%;
  margin: 0 auto;
  color: #404040;
  @media (max-width: 992px){
    width: 85%;
  }
`
const Service = styled.div`
  width: 90%;
  margin: 0 auto;
  color: #404040;
  & > h3 {
    color: #000;
    font-size: 18px;
    text-align: center;
    margin: 18px 0 30px 0;
    font-weight: bold;
  }
  & > h4 {
    color: #000;
    font-size: 18px;
    text-align: center;
    margin: 0 0 20px 0;
    font-weight: bold;
  }
  & > h5 {
    color: #000;
    font-size: 18px;
    text-align: center;
    margin: 0 0 30px 0;
    font-weight: bold;
  }
  & > p {
    width: 90%;
    margin: 0 auto;
    line-height: 30px;
    color: #404040;
    font-size: 14px;
    margin-bottom: 30px;
  }
`
const History = styled.div`
  width: 70%;
  background: #fff;
  margin: 0 auto;
  position: relative;
  margin-top: ${props => props.long ? '50px' : '0px'};
  @media (max-width: 992px){
    width: 85%;
  }
`
const AboutContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 40px 0;
`
const Bdtag = styled.img`
  width: 168px;
  margin: 0 auto;
  margin-top: -40px;
`
const SixTitle = styled.div`
  text-align: center;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 16px;
  & > h1 {
    font-weight: bold;
    font-size: 27px;
  }
`
const CardBlock = styled.div`
  width: 33%;
  margin: 0 10px;
  @media (max-width: 992px){
    width: 100%;
    margin: 0 5px;
  }
`
const SixCardBlock = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  @media (max-width: 992px){
    width: 95%;
    margin: 0;
    display: block;
  }
`
const SixSec = styled.div`
  text-align: center;
  font-size: 22px;
  color: #000;
`
const SixMainSub = styled.h3`
  font-size: 20px;
  font-weight: bold;
`
const SixSub = styled.p`
  color: #444444;
  font-size: 18px;
  margin-top: 16px;
  font-weight: 400;
`
const SixDes = styled.p`
  color: #878787;
  font-size: 16px;
  font-weight: 400;
  margin-top: 30px;
  line-height: 30px;
`
// 公開標售用
const Introduction = styled.div`
  padding:10px 0px;
  // background:#fff;
  margin-top: 10px;
`
const Card = styled.div`
  width: 100%;
  margin: 30px 10px;
  padding:0;
  cursor: pointer;
  flex-wrap: wrap;
  transition: all .5s;
  // background: #fff;
  @media (max-width: 992px){
    width: 100%;
    margin: 0;
    margin-top: 30px;
  }
`
const Img = styled.div`
  position: relative;
  width: 100%;
`
const JustContent = styled.div`
  font-size: 14px;
  color: #878787;
  text-align: center;
  font-weight: 300;
`

class About extends Component {
  constructor(){
    super()
    this.state = {
      displayHistory: false,
      displayAbout1: false,
      displayAbout2: false,
      displayAbout3: false,
      displayAbout4: false
    }
  }
  showHistory = (event) => {
    event.preventDefault();
    this.setState({ displayHistory: !this.state.displayHistory });
  }
  showAbout1 = (event) => {
    event.preventDefault();
    this.setState({ displayAbout1: !this.state.displayAbout1 });
  }
  showAbout2 = (event) => {
    event.preventDefault();
    this.setState({ displayAbout2: !this.state.displayAbout2 });
  }
  showAbout3 = (event) => {
    event.preventDefault();
    this.setState({ displayAbout3: !this.state.displayAbout3 });
  }
  showAbout4 = (event) => {
    event.preventDefault();
    this.setState({ displayAbout4: !this.state.displayAbout4 });
  }

  componentDidMount(){
    if(window.location.hash === '#bidMb'){
      this.setState({
        displayAbout3: true
      })
      setTimeout(() => {
        let myBid = document.getElementById('mbBid')
        window.scrollTo(0, myBid.offsetTop + 600*13 - 50)
      },1000)
    }
  }

  render(){
    const coll01 = this.state.displayAbout1 ? 'downActive' : '' ;
    const coll02 = this.state.displayAbout2 ? 'downActive' : '' ;
    const coll03 = this.state.displayAbout3 ? 'downActive' : '' ;
    const coll04 = this.state.displayAbout4 ? 'downActive' : '' ;
    return (
      <div className='navBlock'>
        <MainTitle onClick={this.showAbout1}>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT5_mb.png' />
            <img className={`aboutdown ${coll01}`} src='static/img/about_down.png' />
          </AboutTitle>
        </MainTitle>
        {
          this.state.displayAbout1 ? (
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
          ) : (
            null
          )
        }
        <MainTitle onClick={this.showAbout2}>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT2_mb.png' />
            <img className={`aboutdown ${coll02}`} src='static/img/about_down.png' />
          </AboutTitle>
        </MainTitle>
        {
          this.state.displayAbout2 ? (
            <AboutContent className=''>
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
          ) : (
            null
          )
        }
        <MainTitle onClick={this.showAbout3}>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT3_mb.png' />
            <img className={`aboutdown ${coll03}`} src='static/img/about_down.png' />
          </AboutTitle>
        </MainTitle>
        {
          this.state.displayAbout3 ? (
            <History className='textCenter '>
              <SixTitle>
                <h1>商業仲介</h1>
              </SixTitle>
              <SixMainSub>完整商圈資料</SixMainSub>
              <SixMainSub>海量資料配對</SixMainSub>
              <SixMainSub>精準行銷通路</SixMainSub>
              <SixSub>需求精準媒合，滿足客戶多元需求</SixSub>
              <SixDes>信義全球資產熟悉各類商用不動產，交易產品涵蓋純辦、廠辦、店面、商場、旅館、土地等多元產品，提供務實和明確的建議，富有整合性銷售經驗，找到最適合您的地段以及優質物業。信義集團全台通路逾400家直營分店，替您資產做最有效曝光，透過完整商圈地籍資料，讓買賣雙方享有安全的交易，藉由精準的資料庫，第一時間提供適合的物件資料。</SixDes>
              <SixCardBlock>
              <CardBlock>
                <AboutCard content1='內湖長虹旗艦辦公' content2='客戶：中華郵政' content3='面積：648坪' img='110.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='時代金融店面' content2='客戶：三商美邦人壽' content3='面積：896坪' img='120.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='台中飯店全棟' content2='客戶：投資機構' content3='面積：1,272坪' img='130.png' />
              </CardBlock>
              </SixCardBlock>
              <SixTitle>
                <h1>租賃招商</h1>
              </SixTitle>
              <SixMainSub>租賃需求分析</SixMainSub>
              <SixMainSub>招商策略擬定</SixMainSub>
              <SixMainSub>拓點展店代尋</SixMainSub>
              <SixSub>重視租戶權益，創造客戶雙贏契機 </SixSub>
              <SixDes>我們掌握豐富大型租賃物業，專注整棟及整層辦公廠辦及店面商場，協助客戶租賃及招商策略擬定，嚴謹分析前期商場定位規劃，引入優質租戶，有效去化閒置資產，發揮空間最有效利用。與各大企業、建設公司、專業法人機構定期資訊交流，定期掌握市場動向及待租物件，提供您最適合物業，為企業成長最佳後盾。</SixDes>
              <SixCardBlock>
              <CardBlock>
                <AboutCard content1='內湖潭美總部' content2='客戶：雄獅旅遊' content3='面積：7,575坪' img='210.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='福全新整棟' content2='客戶：救國團' content3='面積：1,271坪' img='220.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='重慶南路整棟' content2='客戶：共享辦公' content3='面積：304坪' img='230.png' />
              </CardBlock>
              </SixCardBlock>
              <SixTitle>
                <h1>工業地產</h1>
              </SixTitle>
              <SixMainSub>政府機關合作</SixMainSub>
              <SixMainSub>嚴謹交易安全</SixMainSub>
              <SixMainSub>開發法令諮詢</SixMainSub>
              <SixSub>全面盤點現況，發掘閒置土地潛力</SixSub>
              <SixDes>建置專責工業地產團隊，具備工業地產豐富經驗，包括倉庫、廠房及工業土地，為您考量交通便利性、基礎建設、擴充潛力與工業區群聚效應。同時與政府機關合作，提供多元流通平台，加速工業土地媒合。信義集團嚴謹安全的交易制度，讓您在建廠開發時多一層保障。信義全球資產擁有長期經營的顧客群，掌握未來趨勢，提出最佳決策。</SixDes>
              <SixCardBlock>
              <CardBlock>
                <AboutCard content1='桃科萬坪廠房' content2='客戶：科技業' content3='面積：23,159坪' img='310.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='新竹湖口廠房' content2='客戶：科技業' content3='面積：2,012坪' img='320.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='桃園新屋丁建' content2='客戶：化工業' content3='面積：2,794坪' img='330.png' />
              </CardBlock>
              </SixCardBlock>
              <SixTitle>
                <h1>顧問服務</h1>
              </SixTitle>
              <SixMainSub>資產盤點活化</SixMainSub>
              <SixMainSub>產品定位規劃</SixMainSub>
              <SixMainSub>財務評估建議</SixMainSub>
              <SixSub>掌握最佳契機，關鍵決策成就非凡</SixSub>
              <SixDes>提供專業市場分析，協助客戶評估閒置資產或選址、拓點分析，透過市場即時競爭分析，到資產重新定位、策略擬定、行銷包裝，協助您從不動產買賣、租賃，到複雜的土地變更與開發，活化閒置資產。信義全球資產擁有北市超過600餘棟商辦大樓的數據分析以及當地市場豐厚的行業分析，運用當前趨勢，提供專屬的客製化服務。</SixDes>
              <SixCardBlock>
              <CardBlock>
                <AboutCard content1='花蓮港＃1~3碼頭親水遊憩區' content2='招商顧問' img='410.png' />
              </CardBlock>
              <CardBlock>
                <AboutCard content1='高鐵苗栗車站產業專用區土地' content2='處分招商委託技術服務案' img='420.png' />
              </CardBlock>
              <CardBlock>
            <AboutCard content1='台北市政府捷運工程局' content2='捷運中和線景安站開發大樓租賃市場調查' img='430.png' />
          </CardBlock>
              </SixCardBlock>
              <SixTitle>
                <h1>資產管理</h1>
              </SixTitle>
              <SixMainSub>收益改善成長</SixMainSub>
              <SixMainSub>物業管理維護</SixMainSub>
              <SixMainSub>投資策略佈局</SixMainSub>
              <SixSub>資產仰賴管理，財富用心累積</SixSub>
              <SixDes>有效的資產管理不僅涉及租金收取，運營維護，減少管理費用以及改善資本價值。我們平衡收益及風險，實現良好的資本增長，透過市場調查，評估市場即時競爭分析，到資產重新定位、策略擬定、行銷包裝，協助您從不動產買賣、租賃、選點，到複雜的土地變更與開發，為您找到投資節奏，不但解決財務需求，更創造公司資產價值。</SixDes>
              <SixCardBlock>
                <CardBlock>
                  <AboutCard content1='板橋板信銀行家大樓' content2='REITS圓滿一號' content3='面積：商辦大樓' img='510.png' />
                </CardBlock>
                <CardBlock>
                  <AboutCard content1='台南FOCUS時尚流行館' content2='REITS圓滿一號' content3='面積：百貨商場' img='520.png' />
                </CardBlock>
                <CardBlock>
                  {/* <AboutCard content1='台北開發顧問服務' content2='北市資產活化' content3='面積：1,與再開發顧問服務' img='530.png' /> */}
                  <Card>
                    <Img>
                      <img src={`/static/img/about_six/530.png`} />
                    </Img>
                    <Introduction>
                      <JustContent id='mbBid'>
                      台北開發顧問服務
                      </JustContent>
                      <JustContent>
                      北市資產活化
                      </JustContent>
                      <JustContent>
                      面積：1,與再開發顧問服務
                      </JustContent>
                    </Introduction>
                  </Card>
                </CardBlock>
              </SixCardBlock>
              <SixTitle>
                <h1>公開標售</h1>
              </SixTitle>
              <SixMainSub>交易條件磋商</SixMainSub>
              <SixMainSub>媒體行銷曝光</SixMainSub>
              <SixMainSub>標售作業執行</SixMainSub>
              <SixSub>公正處理資產，嚴謹銷售策略</SixSub>
              <SixDes>我們接受政府機關、企業、私人的委託，透過行銷及策略妥善處理資產，依循嚴謹的標售程序，為客戶創造最高收益。無論您是希望處分開發用地或閒置資產，我們在整個交易過程中為您提供支持。替您盤點現況、提案、曝光、通盤考量，透過對市場的敏銳度及區域發展，準確建議標售底價，並以公平公開的方式，策略性處分資產。</SixDes>
              <SixCardBlock>
                <CardBlock>
                  <AboutCard content1='台北金融中心大樓' content2='客戶：新光人壽' content3='金額：20.7億元' img='610.png' />
                </CardBlock>
                <CardBlock>
                  <AboutCard content1='淡大HI-CITY複合學舍' content2='客戶：新光人壽' content3='金額：18.2億元' img='620.png' />
                </CardBlock>
                <CardBlock>
                  <AboutCard content1='桃園市法鼓山土地' content2='客戶：建設公司' content3='金額：6.5億元' img='630.png' />
                </CardBlock>
              </SixCardBlock>
            </History>
          ) : (
            null
          )
        }
        <MainTitle onClick={this.showAbout4}>
          <AboutTitle>
            <OtherTitle src='/static/img/aboutT4_mb.png' />
            <img className={`aboutdown ${coll04}`} src='static/img/about_down.png' />
          </AboutTitle>
        </MainTitle>
        {
          this.state.displayAbout4 ? (
            <Service className=''>
              <h3>正確的事持續做  用心才能看見美好</h3>
              <p>信義全球資產為信義集團專營商用不動產及工業地產團隊，我們依據每位客戶需求，透過專業服務團隊的水平分工，加上信義集團上中下游服務鏈的垂直整合，提供客戶全方位顧問服務。涵蓋商業仲介、價格評估、建築開發、預售交易、信託管理等，從台灣發展到海外房地產，依據每位客戶的需求與特性，擬定策略及長遠的資產計劃，信義全球資產為您走在市場及法令的最前端，扮演客戶信賴的房地產後盾。</p>
              <br /><br />
              <h4>信義品牌獲獎無數，並為首家獲得全球</h4>
              <h5>最具道德企業獎之台灣企業</h5>
              <p>台灣服務業唯一 信義房屋獲全球企業永續報告獎
                信義房屋服務創新 獲服務第壹大獎及金仲獎肯定
                深耕CSR的台灣之光 信義房屋12度獲「天下企業公民獎」
                第11度獲得讀者文摘信譽品牌肯定
                連續四年擠進上市公司前5% 信義房屋公司治理獲肯定
                獲《天下雜誌》評選營運績效50強第一名
                榮獲第十四屆《遠見雜誌》「CSR大調查服務業組」首獎及「環境友善組」楷模獎
                再度勇奪亞洲永續報告獎ASRA 信義房屋：人才是企業永續關鍵(2016, 2017)
                信義房屋獲得「全球最具道德企業獎」獎項開辦十二年以來 首家台灣企業獲獎
              </p>
            </Service>
          ) : (
            null
          )
        }
      </div>
    )
  }
}
    
  
  export default About