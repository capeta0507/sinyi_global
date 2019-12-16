import React, {useState} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import { Carousel } from 'react-bootstrap'
import NewItem from '../components/Card/newItemCard'
import FastButton from '../components/fastButton2'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
	width: 90%;
  margin: 0 auto;
	padding: 150px 0 50px 0;
`
const Main = styled.div`
  width: 60%;
  @media (max-width: 768px){
    width: 100%;
  }
`
const Title = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  position:relative;
  vertical-align:text-bottom;
  & > h1{
    color: #000;
    font-size: 28px;
  }
  & > div{
    padding-top: 15px;
    color: #969696;
    font-size: 14px;
    margin-left: -250px;
  }
  & > h2{
    color: #00AAF5;
    font-size: 28px;
  }
  @media (max-width: 768px){
    & > h1{
      color: #000;
      font-size: 22px;
    }
  }
`
const MbTitle = styled.h1`
  color: #00AAF5;
  font-size: 22px;
  display: none;
  margin-top: 10px;
  @media (max-width: 768px){
    display: block;
  }
`
const SubTitle = styled.div`
  width: 100%;
`
const Specification = styled.div`
  width: 60%;
  justify-content: space-between;
  display: flex;
  margin-top: 22px;
  margin-bottom: 10px;
  @media (max-width: 768px){
    width: 100%;
    display: none;
  }
`
const SpecificationMb = styled.div`
  width: 100%;
  display: none;
  margin-top: 22px;
  margin-bottom: 10px;
  justify-content: space-between;
  @media (max-width: 768px){
    display: block;
  }
`
const Cau = styled.div`
  width: 95%;
  @media (max-width: 768px){
    width: 100%;
  }
`
const BigTitle = styled.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 768px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 768px){
    width:112px;
  }
`
const ItemContent = styled.div`
  width: 60%;
  @media (max-width: 768px){
    width: 100%;
  }
`
const Introduction = styled.div`
  width: 100%;
  margin-top: 24px;
`
const IntroTitle = styled.div`
  /* width: 100%; */
  color: #00B1FF;
  font-size: 20px;
  font-weight: bold;
`
const IndList = styled.div`
  border-top: 1px solid #F0F0F0;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  padding: 5px 0;
`
const IndTag = styled.div`
  width: 20%
  color: #969696;
  font-size: 14px;
  @media (max-width: 768px){
    width: 20%;
    font-size: 12px;
  }
`
const IndName = styled.div`
  width: 30%;
  font-size: 14px;
  @media (max-width: 768px){
    width: 40%;
    font-size: 12px;
  }
`
const Business = styled.div`
  width: 310px;
  box-shadow: 0px 0px 10px ;
  padding: 20px;
  & > h3{
    font-size: 20px;
    color: #00B1FF;
    padding-left: 10px;
  }
  @media (max-width: 768px){
    width: 100%;
    display: none;
  }
`
const BusinessMb = styled.div`
  width: 100%;
  padding: 20px;
  display: none;
  & > h3{
    font-size: 20px;
    color: #00B1FF;
    padding-left: 10px;
  }
  @media (max-width: 768px){
    display: block;
    padding: 20px 0;
  }
`
const BusPeople = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #E8E8E8;
  @media (max-width: 768px){
    margin: 0 auto;
    width: 80%;
  }
`
const Busconnection = styled.div`
  width: 100%;
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #E8E8E8;
`
const Name = styled.div`
  color: #969696;
  font-size: ${props => props.name ? '18px' : '14px'};
  margin-top: ${props => props.name ? '0px' : '10px'};
`
const IptName = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 5px 0;
  @media (max-width: 768px){
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
`
const Button = styled.div`
  width: 120px;
  margin: 0 auto;
  background: #00B1FF;
  font-size: 16px;
  padding: 8px;
  text-align: center;
  color: #fff;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 5px;
`
const BusCheck = styled.div`
  font-size: 12px;
  & > a {
    color: #00B1FF;
  }
  @media (max-width: 768px){
    padding-left: 30px;
    padding-right: 30px;
  }
`
const Join = styled.div`
  color: #00B1FF;
  font-size: 23px;
  cursor: pointer;
  display: flex;
  @media (max-width: 768px){
    display: none;
  }
`

const Item = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [nextIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wR.png' />)
  const [prevIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wL.png' />)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
	return (
		<Layout>
			<Head
				title="信義全球資產"
				description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
			/>
			<Navbar />
      <Container>
        <div className='row juseBet gendermg'>
          <Main>
            <Title>
              <h1>勤樸辦公廠房Ａ</h1>
              <div>
                案件編號：32092Y
              </div>
              <h2 className='mbnone'>6,000元/月</h2>
            </Title>
            <SubTitle>
              <span className='itemPlace'>地址</span><span className='itemPlace2'> 新北市蘆洲區長興路</span>
            </SubTitle>
            <MbTitle>6,000元/月</MbTitle>
            <Specification>
              <div className='flex'>
                <div className='spcTitle flex'><img className='listSp' src='/static/img/list/list01.png' />&nbsp;&nbsp;權狀</div>
                <div className='spcTitle2'>114.6 坪</div>
              </div>
              <div className='flex'>
                <span className='spcTitle'><img className='list' src='/static/img/list/list02.png' />&nbsp;&nbsp;出租</span>
                <span className='spcTitle2'>62.3 坪</span>
              </div>
              <div className='flex'>
                <span className='spcTitle'><img className='list' src='/static/img/list/list03.png' />&nbsp;&nbsp;樓層</span>
                <span className='spcTitle2'>1樓</span>
              </div>
              <div className='flex'>
                <span className='spcTitle'><img className='list' src='/static/img/list/list04.png' />&nbsp;&nbsp;屋齡</span>
                <span className='spcTitle2'>10.5 年</span>
              </div>
            </Specification>
            <SpecificationMb>
              <div className='mbSpec'>
                <div className='speTag'>
                  <span className='spcTitle'>權狀</span>
                  <span className='spcTitle2'> 114.6 坪</span>
                </div>
                <div className='speTag'>
                  <span className='spcTitle'>出租</span>
                  <span className='spcTitle2'> 62.3 坪</span>
                </div>
              </div>
              <div className='mbSpec'>
                <div className='speTag'>
                  <span className='spcTitle'>樓層</span>
                  <span className='spcTitle2'> 1樓</span>
                </div>
                <div className='speTag'>
                  <span className='spcTitle'>屋齡</span>
                  <span className='spcTitle2'> 10.5 年</span>
                </div>
              </div>
            </SpecificationMb>
            <Cau>
              <Carousel nextIcon={nextIcon} prevIcon={prevIcon} interval={10000} activeIndex={index} direction={direction} onSelect={handleSelect} touch={true} indicators={false}>
                <div className='cauimg'>
                  <img
                    className="d-block cauHeight"
                    src="/static/img/sean-pollock-PhYq704ffdA-unsplash.jpg"
                    alt="First slide"
                  />
                </div>
                <div className='cauimg'>
                  <img
                    className="d-block cauHeight"
                    src="/static/img/7152019128020115162m.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className='cauimg'>
                  <img
                    className="d-block cauHeight"
                    src="/static/img/11-02607-005.jpg"
                    alt="Third slide"
                  />
                </div>
              </Carousel>
            </Cau>
          </Main>
          <Business>
            <h3>本案經紀人員</h3>
            <BusPeople>
              <div className='busCard'>
                <div className="busImg">
                  <img className="newsPhoto" src='/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg' />
                </div>
              </div>
              <div className='busName'>
                <Name name>蔡佳宏</Name>
                <Name>長春吉林店</Name>
                <Name>0911259808</Name>
                <Name>C02897523</Name>
              </div>
            </BusPeople>
              <h3>與我聯繫</h3>
            <Busconnection>
              <IptName>
                <input className='form-control' type='text' placeholder='姓名(必填)' />
              </IptName>
              <IptName>
                <input className='form-control' type='phone' placeholder='聯絡電話(必填)' />
              </IptName>
              <IptName>
                <input className='form-control' type='text' placeholder='電子郵件(必填)' />
              </IptName>
              <BusCheck>
                <input type="checkbox" /> 送出資料前，請點選同意本站 <a href=''>隱私權政策</a> 及 <a href=''>服務條款</a>
              </BusCheck>
              <Button>送出</Button>
            </Busconnection>
            <Join>
              <img className='makeJoin' src='/static/img/list/join.PNG' />
              {/* <img className='makeJoin' src='/static/img/list/plusActive.PNG' /> */}
              加入比較
            </Join>
          </Business>
          <ItemContent>
            <BigTitle>
              <TitleImg src='/static/img/t4_list.png' />
            </BigTitle>
            <h3 className='itemConTitle'>勤樸辦公廠房Ａ</h3>
            {/* 基本資料 */}
            <Introduction>
              <IntroTitle>基本資料</IntroTitle>
              <IndList>
                <IndTag>地址</IndTag>
                <IndName>新北市蘆洲區長興路</IndName>
                <IndTag>產權登記</IndTag>
                <IndName>有</IndName>
              </IndList>
              <IndList>
                <IndTag>型態</IndTag>
                <IndName>大樓(11層含以上有電梯)</IndName>
                <IndTag>屋齡</IndTag>
                <IndName>10年</IndName>
              </IndList>
              <IndList>
                <IndTag>權狀坪數</IndTag>
                <IndName>47.5坪</IndName>
                <IndTag>樓層</IndTag>
                <IndName>9樓/共17樓</IndName>
              </IndList>
              <IndList>
                <IndTag>公共設施</IndTag>
                <IndName>0.0坪</IndName>
                <IndTag>該層戶數</IndTag>
                <IndName>1戶</IndName>
              </IndList>
              <IndList>
                <IndTag>類型</IndTag>
                <IndName>成屋</IndName>
                <IndTag>大樓朝向</IndTag>
                <IndName>西</IndName>
              </IndList>
              <IndList>
                <IndTag>管理費</IndTag>
                <IndName>$0 (不含租金內)</IndName>
                <IndTag>警衛管理</IndTag>
                <IndName>有(全天)</IndName>
              </IndList>
            </Introduction>
            {/* 物件詳情 */}
            <Introduction>
              <IntroTitle>物件詳情</IntroTitle>
              <IndList>
                <IndTag>建物結構</IndTag>
                <IndName>鋼筋混凝土</IndName>
                <IndTag>外牆建材</IndTag>
                <IndName>方塊磚</IndName>
              </IndList>
              <IndList>
                <IndTag>屋齡</IndTag>
                <IndName>2.6年</IndName>
                <IndTag>類型</IndTag>
                <IndName>辦公/廠房</IndName>
              </IndList>
              <IndList>
                <IndTag>樓層</IndTag>
                <IndName>6樓/12樓</IndName>
                <IndTag>每層戶數</IndTag>
                <IndName>4</IndName>
              </IndList>
              <IndList>
                <IndTag>警衛管理</IndTag>
                <IndName>全天候</IndName>
                <IndTag>管理費</IndTag>
                <IndName>5836元/月</IndName>
              </IndList>
              <IndList>
                <IndTag>其他</IndTag>
                <IndName>--</IndName>
                <IndTag>注意事項</IndTag>
                <IndName>--</IndName>
              </IndList>
            </Introduction>
            {/* 物件特色 */}
            <Introduction>
              <IntroTitle>物件特色</IntroTitle>
              <IndList>
                <IndName className='flex'><div className='ptdolt'></div>一二三四五六七八九十一 </IndName>
                <IndTag></IndTag>
                <IndName className='flex'><div className='ptdolt'></div>穩定收租投資自用皆宜</IndName>
              </IndList>
              <IndList>
                <IndName className='flex'><div className='ptdolt'></div>近大汐止經貿園區</IndName>
                <IndTag></IndTag>
                <IndName className='flex'><div className='ptdolt'></div>氣派門面完善管理</IndName>
              </IndList>
            </Introduction>
            {/* 周邊環境 */}
            <Introduction>
              <IntroTitle>周邊環境</IntroTitle>
              <IndList>
                <IndTag>捷運資訊</IndTag>
                <IndName>西門站      松山新店線/板南線</IndName>
              </IndList>
              <IndList>
                <IndTag></IndTag>
                <IndName>小南門站  松山新店線</IndName>
              </IndList>
              <IndList>
                <IndTag></IndTag>
                <IndName>龍山寺站  板南線</IndName>
              </IndList>
              <IndList>
                <IndTag>公車站名</IndTag>
                <IndName>福林橋</IndName>
              </IndList>
              <IndList>
                <IndTag>公車路線</IndTag>
                <IndName>220，224，280</IndName>
              </IndList>
            </Introduction>
          </ItemContent>
        </div>
        <BusinessMb>
          <h3>本案經紀人員</h3>
          <BusPeople>
            <div className='busCard'>
              <div className="busImg">
                <img className="newsPhoto" src='/static/img/bench-accounting-8D2k7a3wMKQ-unsplash.jpg' />
              </div>
            </div>
            <div className='busName'>
              <Name name>蔡佳宏</Name>
              <Name>長春吉林店</Name>
              <Name>0911259808</Name>
              <Name>C02897523</Name>
            </div>
          </BusPeople>
            <h3 className='connection'>與我聯繫</h3>
          <Busconnection>
            <IptName>
              <input className='form-control' type='text' placeholder='姓名(必填)' />
            </IptName>
            <IptName>
              <input className='form-control' type='phone' placeholder='聯絡電話(必填)' />
            </IptName>
            <IptName>
              <input className='form-control' type='text' placeholder='電子郵件(必填)' />
            </IptName>
            <BusCheck>
              <input type="checkbox" /> 送出資料前，請點選同意本站 <a href=''>隱私權政策</a> 及 <a href=''>服務條款</a>
            </BusCheck>
            <Button>送出</Button>
          </Busconnection>
          <Join>
            <div className='comparePlus'></div>加入比較
          </Join>
        </BusinessMb>
        <BigTitle>
          <TitleImg src='/static/img/t5_newItem.png' />
        </BigTitle>
        <div className='row gendermg mbnone'>
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
        </div>
        <div className='row gendermg mbFlex'>
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
        </div>
      </Container>
      <FastButton />
    	<NavHomeMobile />
		</Layout>
	)
}

export default Item