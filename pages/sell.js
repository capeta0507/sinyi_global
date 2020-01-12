import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import { Carousel } from 'react-bootstrap'
import Breadcrumb from '../components/breadcrumb'
import NewSellCard from '../components/Card/newSellCard'
import FastButton from '../components/fastButton2'
import ProvicyModal from '../components/Modal/privacyModal'
import ServiceModal from '../components/Modal/serviceModal'
import SuccessModal from '../components/Modal/successModal'
import MobileFooter from '../components/footer/mobileFooterSell'
import '../style/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.css'
const MainContainer = styled.div`
  width: 100%;
  background-color: #fff;
  background-image: url(/static/img/icon/white.png);
  background-repeat:  repeat-x;
`

const Container = styled.div`
	width: 70%;
  margin: 0 auto;
  padding: 70px 0 50px 0;
  @media (max-width: 1560px){
    width: 75%;
  }
  @media (max-width: 1366px){
    width: 80%;
  }
  @media (max-width: 992px){
    width: 90%;
    padding: 0px 0 50px 0;
  }
`
const Main = styled.div`
  width: 60%;
  @media (max-width: 992px){
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
    // margin-left: -250px;
  }
  & > h2{
    color: #00AAF5;
    font-size: 28px;
  }
  @media (max-width: 1560px){
    & > div{
      padding-top: 15px;
      color: #969696;
      font-size: 14px;
      // margin-left: -165px;
    }
  }
  @media (max-width: 1440px){
    & > div{
      padding-top: 15px;
      color: #969696;
      font-size: 14px;
      // margin-left: -165px;
    }
  }
  @media (max-width: 992px){
    & > h1{
      padding-top: 6px;
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
  @media (max-width: 992px){
    display: block;
  }
`
const SubTitle = styled.div`
  width: 100%;
  position: relative;
  @media (max-width: 992px){
    display: none;
  }
`
const SubTitleMb = styled.div`
  width: 100%;
  position: relative;
  display: none;
  @media (max-width: 992px){
    display: block;
  }
`
const Specification = styled.div`
  width: 60%;
  justify-content: space-between;
  display: flex;
  margin-top: 22px;
  margin-bottom: 10px;
  @media (max-width: 992px){
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
  @media (max-width: 992px){
    display: block;
  }
`
const Cau = styled.div`
  width: 95%;
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
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:112px;
  }
`
const ItemContent = styled.div`
  width: 60%;
  @media (max-width: 992px){
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
  width: 20%;
  color: #969696;
  font-size: 14px;
  @media (max-width: 992px){
    width: 20%;
    font-size: 12px;
  }
`
const IndName = styled.div`
  width: 30%;
  font-size: 14px;
  @media (max-width: 992px){
    width: 40%;
    font-size: 12px;
  }
`
const Business = styled.div`
  width: 310px;
  height: 535px;
  box-shadow: 0px 0px 5px ;
  padding: 20px;
  position: fixed;
  right: 13%;
  top: 83px;
  z-index: 5;
  background: #fff;
  & > h3{
    font-size: 20px;
    color: #00B1FF;
    padding-left: 10px;
  }
  @media (max-width: 992px){
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
  @media (max-width: 992px){
    display: block;
    padding: 20px 0;
  }
`
const BusPeople = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #E8E8E8;
  @media (max-width: 992px){
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
  @media (max-width: 992px){
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
    cursor: pointer;
    color: #00B1FF;
    text-decoration: underline;
  }
  @media (max-width: 992px){
    padding-left: 30px;
    padding-right: 30px;
  }
`
const Join = styled.div`
  color: #00B1FF;
  font-size: 23px;
  cursor: pointer;
  display: flex;
  @media (max-width: 992px){
    display: none;
  }
`
const BusInfo = styled.div`
	width: 100%;
	height: 125px;
	overflow: hidden;
	overflow-y:scroll;
	border: 1px solid #F0F0F0;
	@media (max-width: 992px){
    height: auto;
    overflow-y:none;
		overflow:none;
  }
`
const BusImformation = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-size: 14px;
	padding: 2px 10px;
	@media (max-width: 992px){
		font-size: 10px;
  }
`
const DownPrice = styled.div`
  position: absolute;
  width: 60px;
  background: #EE0000;
  right: 0%;
  top: 3px;
  padding: 2px;
  border-radius: 5px;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  @media (max-width: 992px){
    top: 60px;
    right: 40%;
  }
`

var g_index = 0;

const Item = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [nextIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wR.png' />)
  const [prevIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wL.png' />)
  const [showModal, setShowModal] = useState(false)
  const [imgData] = useState([
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/E.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/F.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG'},
      {'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG'},
  ])
  const [imgData2] = useState([
    {
      'img':'https://res.sinyi.com.tw/buy/45258B/bigimg/E.JPG',
      'icon': '/static/img/ic-im-pattern.svg',
      'name': '格局'
    },
    {
      'img':'https://res.sinyi.com.tw/buy/45258B/lifeimg/45258B_MAP.JPG',
      'icon': '/static/img/ic-im-map.svg',
      'name': '地圖'
    },
  ])
  const [showMainImg, setShowMainImg] = useState('https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG')
  const [displayService, setDisplayService] = useState(false)
  const [displayProvicy, setDisplayProvicy] = useState(false)
  const [displaySend, setDisplaySend] = useState(false)
  const [displayArrow, setDisplayArrow] = useState(true)
  const [displayLeftArrow, setDisplayLeftArrow] = useState(false)
  const [displayRightArrow, setDisplayRightArrow] = useState(true)
  const [carouselIdx, setCarouselIdx] = useState(1)
  const [allCarousel, setAllCarousel] = useState(1)

  var x_start = 0
  var x_end = 0
  var items
//   console.log(items.length);
  var thumbnail
  var thumbModal
  // console.log('thumb', thumbnail.length);
  // 計算小圖width長度
  var img_length = (imgData.length*85 - 5) + 'px'
  // console.log(img_length,"length")

  const imgClick = (e,idx) => {
    g_index = idx;
    setCarouselIdx(g_index + 1)
    thumbnail = document.getElementsByClassName('carousel-thumbnail-img')
    thumbModal = document.getElementsByClassName('carousel-thumbnail-img-Modal')
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('carousel-thumbnail-active')
      thumbModal[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
    thumbModal[g_index].classList.add('carousel-thumbnail-active')
    setShowMainImg(imgData[g_index].img)
    setDisplayArrow(true)
  }
  const imgClick2 = (e,idx) => {
    thumbnail = document.getElementsByClassName('carousel-thumbnail-img')
    thumbModal = document.getElementsByClassName('carousel-thumbnail-img-Modal')
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('carousel-thumbnail-active')
      thumbModal[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
    thumbModal[g_index].classList.add('carousel-thumbnail-active')
    setShowMainImg(imgData2[idx].img)
    setDisplayArrow(false)
  }
  const nextImg = () => {
    g_index++;
    if (g_index >= imgData.length) {
      g_index = imgData.length - 1
    }
    if (g_index >= imgData.length) {
      g_index = imgData.length - 1
    }
    if(g_index == imgData.length - 1){
      setDisplayRightArrow(false)
    }
    if(g_index > 0 ){
      setDisplayLeftArrow(true)
    }
    setCarouselIdx(g_index + 1)
    // 後5項時跳到後面
    // 一般carousel
    if(g_index >=5 ){
      let img_position = '-' + ((g_index - 4)*85) + 'px'
      // document.getElementById('thumbnail-img-position').style.left = "-255px"
      document.getElementById('thumbnail-img-position').style.left = img_position;
    } 
    // 彈窗carousel
    if(g_index >=9 ){
      let img_position_diolog = '-' + ((g_index - 8)*85) + 'px'
      // document.getElementById('thumbnail-img-position').style.left = "-255px"
      document.getElementById('thumbnail-img-position-diolog').style.left = img_position_diolog;
    } 
    thumbnail = document.getElementsByClassName('carousel-thumbnail-img')
    thumbModal = document.getElementsByClassName('carousel-thumbnail-img-Modal')
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('carousel-thumbnail-active')
      thumbModal[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
    thumbModal[g_index].classList.add('carousel-thumbnail-active')
    setShowMainImg(imgData[g_index].img)
  }
  const prevImg = () => {
    g_index--;
    if (g_index < 0) {
      g_index = 0
    }
    if(g_index == 0){
      setDisplayLeftArrow(false)
    }
    if(g_index < imgData.length - 1){
      setDisplayRightArrow(true)
    }
    setCarouselIdx(g_index + 1)
    // 前4項時跳到前面
    // 一般carousel
    if(g_index <=4 ){
      document.getElementById('thumbnail-img-position').style.left = "0px"
    }
    if(g_index >=5 ){
      let img_position = '-' + ((g_index - 4)*85) + 'px'
      // document.getElementById('thumbnail-img-position').style.left = "-255px"
      document.getElementById('thumbnail-img-position').style.left = img_position;
    } 
    // 彈窗carousel
    if(g_index <=8 ){
      document.getElementById('thumbnail-img-position-diolog').style.left = "0px"
    }
    if(g_index >=9 ){
      let img_position_diolog = '-' + ((g_index - 8)*85) + 'px'
      // document.getElementById('thumbnail-img-position').style.left = "-255px"
      document.getElementById('thumbnail-img-position-diolog').style.left = img_position_diolog;
    } 
    thumbnail = document.getElementsByClassName('carousel-thumbnail-img')
    thumbModal = document.getElementsByClassName('carousel-thumbnail-img-Modal')
    for(let i = 0; i < thumbnail.length; i++){
      thumbnail[i].classList.remove('carousel-thumbnail-active')
      thumbModal[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
    thumbModal[g_index].classList.add('carousel-thumbnail-active')
    setShowMainImg(imgData[g_index].img)
  }
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const showProvicy = () => {
    setDisplayProvicy(true)
  }
  const closeProvicy = () => {
    setDisplayProvicy(false)
  }
  const showService = () => {
    setDisplayService(true)
  }
  const closeService = () => {
    setDisplayService(false)
  }
  const sendMessenger = () => {
    setDisplaySend(true)
  }
  const closeMessenger = () => {
    setDisplaySend(false)
  }
  useEffect(() => {
    setAllCarousel(imgData.length)
  },[imgData])
  useEffect(() => {
    x_start = 0
    x_end = 0

    var myimgDiv = document.getElementById('imgDiv');
    var myimgDivDig = document.getElementById('imgDivDig');
    // 一般版
    myimgDiv.addEventListener("touchstart",(e)=>{
      // alert('touch_start');
      // console.log(e)
      x_start = e.touches[0].clientX;
      // console.log("start",x_start);
    })
    
    myimgDiv.addEventListener("touchend",(e)=>{
      // alert('touch_start');
      // console.log(e)
      x_end = e.changedTouches[0].clientX;
      // console.log("end",x_end);
      if(x_start > x_end){
        let x_move = x_start - x_end
        if(x_move > 100){
          nextImg();
        }

      } 
      if(x_start < x_end){
        let x_move = x_end - x_start
        if(x_move > 100){
          prevImg();            
        }

      }
    })
    // 彈窗版
    myimgDivDig.addEventListener("touchstart",(e)=>{
      // alert('touch_start');
      // console.log(e)
      x_start = e.touches[0].clientX;
      // console.log("start",x_start);
    })
    
    myimgDivDig.addEventListener("touchend",(e)=>{
      // alert('touch_start');
      // console.log(e)
      x_end = e.changedTouches[0].clientX;
      // console.log("end",x_end);
      if(x_start > x_end){
        let x_move = x_start - x_end
        if(x_move > 100){
          nextImg();
        }

      } 
      if(x_start < x_end){
        let x_move = x_end - x_start
        if(x_move > 100){
          prevImg();            
        }

      }
    })
  }, [1])
  const displayModal = showModal ? 'show' : ''
	return (
		<Layout>
			<Head
				title=" {程式抓取物件名稱}- 信義全球資產"
        description="{物件名稱}，總價{總價}，單價{單價}/坪，土地{土地坪數}/坪，買賣{物件詳情-類型}物件都在信義全球資產。"
        url=""
			/>
			<Navbar />
      <MainContainer>
        <Container>
          {/* seo h1 */}
          <h1 className='zero'>信義獨棟透天別墅</h1>
          <Breadcrumb data={[{title:"買賣" , link:"/sellList"} , {title: "信義獨棟透天別墅"}]}/>
          <div className='row gendermg'>
            <Main>
              <Title>
                <h1>信義獨棟透天別墅</h1>
                <div>
                  案件編號：32092Y
                </div>
                <h2 className='mbnone'>6,000元/月</h2>
              </Title>
              <SubTitle>
                <span className='itemPlace'>地址</span><span className='itemPlace2'> 新北市蘆洲區長興路</span>&nbsp;&nbsp;<span className='itemPlace'>單價</span><span className='itemPlace2'> 本物件含車位及家蓋，詳洽經紀人員</span><DownPrice>↓16.81%</DownPrice>
              </SubTitle>
              <SubTitleMb>
                <div>
                  <span className='itemPlace'>地址</span><span className='itemPlace2'> 新北市蘆洲區長興路</span>
                </div>
                <div>
                  <span className='itemPlace'>單價</span><span className='itemPlace2'> 本物件含車位及家蓋，詳洽經紀人員</span>
                </div>
                <DownPrice>↓16.81%</DownPrice>
              </SubTitleMb>
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
                <div className="buy-content-detail">
                  <div className="buy-content-detail-body">
                    <div className="buy-content-detail-carousel">
                      <div>
                        <div className={`modal fade carousel-dialog-frame ${displayModal}`}>
                          <div onClick={closeModal} className="carousel-dialog-close d-none d-lg-block">
                            <img src="/static/img/ic-baseline_clear_white.png" />
                          </div>
                          <div onClick={closeModal} className="carousel-dialog-close d-block d-lg-none">
                            <img src="/static/img/ic-baseline_clear_white.png" />
                          </div>
                          <div>
                            <div id="imgDivDig" className="carousel-diolog-content">
                              <div
                                data-ride="carousel"
                                className="carousel slide"
                                style={{ width: "100%", height: "100%" }}
                              >
                                <div className="carousel-inner carousel-content-size">
                                  <div
                                    className="carousel-diolog-content-img"
                                    style={{
                                      backgroundImage:
                                        `url(${showMainImg})`
                                    }}
                                  ></div>
                                  <div className="carousel-dialog-paging-num">
                                  {carouselIdx}{/* */}/{/* */}{allCarousel}
                                  </div>
                                </div>
                                {
                                  displayArrow ? (
                                    <React.Fragment>
                                      <div
                                        onClick={prevImg}
                                        className="carousel-control-prev"
                                        style={{ cursor: "pointer", opacity: ".6" }}
                                      >
                                        <img
                                          className="d-block carousel-img-arrow"
                                          src="/static/img/Path_1112.png"
                                        />
                                      </div>
                                      <div
                                        className="carousel-control-next"
                                        onClick={nextImg}
                                        style={{
                                          transform: "rotate(180deg)",
                                          cursor: "pointer",
                                          opacity: 1
                                        }}
                                      >
                                        <img
                                          className="d-block carousel-img-arrow"
                                          src="/static/img/Path_1112.png"
                                        />
                                      </div>
                                    </React.Fragment>
                                  ) : (
                                    ''
                                  )
                                }
                              </div>
                            </div>
                            <div className="carousel-dialog-thumbnail-frmae">
                              <div className="carousel-thumbnail-frame">
                                {
                                  imgData2.map((data, idx) => {
                                    return(
                                      <div key={idx}
                                        className="carousel-thumbnail-pattern"
                                        onClick={(e) => {imgClick2(e, idx)}}
                                        style={{
                                          backgroundImage:
                                            `url(${data.img})`,
                                          backgroundPosition: "center center",
                                          backgroundRepeat: "no-repeat"
                                        }}
                                      >
                                        <div className="carousel-thumbnail-mask">
                                          <img src={data.icon} />
                                          <span>{data.name}</span>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                                <div className="carousel-thumbnail-cutting" />
                                <div
                                  style={{
                                    width: "calc(100% - 85px - 85px - 7px)",
                                    position: "relative",
                                    display: "inline-block"
                                  }}
                                >
                                  {
                                    displayLeftArrow ? (
                                      <div
                                        onClick={prevImg}
                                        className="carousel-thumbnail-arrow-l"
                                      >
                                        <img src="/static/img/ic-arrow-gray.svg" />
                                      </div>
                                    ) : (
                                      ''
                                    )
                                  }
                                  
                                  <div className="carousel-thumbnail-img-frame">
                                    <div id="thumbnail-img-position-diolog" style={{ width: `${img_length}` , position: 'relative' , left:'0px' }}>
                                      {
                                        imgData.map((img,idx) => {
                                          return(
                                            <div key={idx}
                                              onClick={(e) => imgClick(e,idx)}
                                              src={img.img}
                                              className={"carousel-thumbnail-img-Modal" + ((idx==0)?" carousel-thumbnail-active":"")}
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                                backgroundImage:
                                                  `url(${img.img})`
                                              }}
                                            >
                                              <img
                                                src={img.img}
                                                style={{ width: 0, height: 0 }}
                                              />
                                            </div>
                                          )
                                        })
                                      }
                                    </div>
                                  </div>
                                  {
                                    displayRightArrow ? (
                                      <div onClick={nextImg} className="carousel-thumbnail-arrow-r">
                                        <img src="/static/img/ic-arrow-gray.svg" />
                                      </div>
                                    ) : (
                                      ''
                                    )
                                  }
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="buy-carousel-frame">
                          <div id="imgDiv" className="buy-carousel-content-frame">
                            <div
                              data-ride="carousel"
                              className="carousel slide"
                              style={{ width: "100%", height: "100%" }}
                            >
                              <div className="carousel-inner carousel-content-size">
                                {/* {showImg} */}
                                <div className="carousel-item carousel-content-size active">
                                  <div onClick={openModal}
                                    src={showMainImg}
                                    className="carousel-content-size carousel-current-img"
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      backgroundPosition: "center",
                                      backgroundRepeat: "no-repeat",
                                      backgroundSize: "cover",
                                      backgroundImage:
                                        `url(${showMainImg})`
                                    }}
                                  >
                                  <img
                                    src={showMainImg}
                                    style={{ width: 0, height: 0 }}
                                  />
                                  </div>
                                </div>
                                <div className="carousel-paging-num">
                                {carouselIdx}{/* */}/{/* */}{allCarousel}
                                </div>
                              </div>
                              {
                                displayArrow ? (
                                  <React.Fragment>
                                    <div
                                      onClick={prevImg}
                                      className="carousel-control-prev"
                                      style={{ cursor: "pointer", opacity: ".6" }}
                                    >
                                      <img
                                        className="d-block carousel-img-arrow"
                                        src="/static/img/Path_1112.png"
                                      />
                                    </div>
                                    <div
                                      onClick={nextImg}
                                      className="carousel-control-next"
                                      style={{
                                        transform: "rotate(180deg)",
                                        cursor: "pointer",
                                        opacity: 1
                                      }}
                                    >
                                      <img
                                        className="d-block carousel-img-arrow"
                                        src="/static/img/Path_1112.png"
                                      />
                                    </div>
                                  </React.Fragment>
                                ) : (
                                  ''
                                )
                              }
                            </div>
                          </div>
                          <div className="carousel-thumbnail-frame mbnone">
                            {
                              imgData2.map((data, idx) => {
                                return(
                                  <div key={idx}
                                    className="carousel-thumbnail-pattern"
                                    onClick={(e) => {imgClick2(e, idx)}}
                                    style={{
                                      backgroundImage:
                                        `url(${data.img})`,
                                      backgroundPosition: "center center",
                                      backgroundRepeat: "no-repeat"
                                    }}
                                  >
                                    <div className="carousel-thumbnail-mask">
                                      <img src={data.icon} />
                                      <span>{data.name}</span>
                                    </div>
                                  </div>
                                )
                              })
                            }
                            <div className="carousel-thumbnail-cutting" />
                            <div
                              style={{
                                width: "calc(100% - 85px - 85px - 7px)",
                                position: "relative",
                                display: "inline-block"
                              }}
                            >
                              {
                                displayLeftArrow ? (
                                  <div
                                    onClick={prevImg}
                                    className="carousel-thumbnail-arrow-l"
                                  >
                                    <img src="/static/img/ic-arrow-gray.svg" />
                                  </div>
                                ) : (
                                  ''
                                )
                              }
                              <div className="carousel-thumbnail-img-frame">
                                <div id="thumbnail-img-position" style={{ width: `${img_length}` , position: 'relative' , left:'0px' }}>
                                  {
                                    imgData.map((img,idx) => {
                                      return(
                                        <div key={idx}
                                          onClick={(e) => imgClick(e,idx)}
                                          src={img.img}
                                          className={"carousel-thumbnail-img" + ((idx==0)?" carousel-thumbnail-active":"")}
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            backgroundImage:
                                              `url(${img.img})`
                                          }}
                                        >
                                          <img
                                            src={img.img}
                                            style={{ width: 0, height: 0 }}
                                          />
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                              </div>
                              {
                                displayRightArrow ? (
                                  <div
                                    onClick={nextImg}
                                    className="carousel-thumbnail-arrow-r"
                                  >
                                    <img src="/static/img/ic-arrow-gray.svg" />
                                  </div>
                                ) : (
                                  ''
                                )
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <input type="checkbox" /> 送出資料前，請點選同意本站<a onClick={showProvicy}>隱私權政策</a>及<a onClick={showService}>服務條款</a>
                </BusCheck>
                <Button onClick={sendMessenger}>送出</Button>
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
              {/* 格局圖 */}
              <Introduction  className='navBlock'>
                <IntroTitle>格局圖</IntroTitle>
                <img src='/static/img/pic_place.png' />
              </Introduction>
              {/* 物件地圖 */}
              <Introduction className='navBlock'>
                <IntroTitle>物件地圖</IntroTitle>
                <img src='/static/img/pic12.png' />
              </Introduction>
              {/* 交通資訊 */}
              <Introduction>
                <IntroTitle>交通資訊</IntroTitle>
                {/* 地圖位置 */}
                <img src='/static/img/pic08.png' />
                <BusInfo>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation id='business'>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                  <BusImformation>
                    <div>P 中和新蘆線-中山國小站 出口一</div>
                    <div> 0.56km<img className='walkicon' src='/static/img/walk.png' /> 7分鐘</div>
                  </BusImformation>
                </BusInfo>
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
                <input type="checkbox" /> 送出資料前，請點選同意本站 <a onClick={showProvicy}>隱私權政策</a>及<a onClick={showService}>服務條款</a>
              </BusCheck>
              <Button onClick={sendMessenger}>送出</Button>
            </Busconnection>
            <Join>
              <div className='comparePlus'></div>加入比較
            </Join>
          </BusinessMb>
          <BigTitle>
            <TitleImg src='/static/img/t5_newItem.png' />
          </BigTitle>
          <div className='row gendermg mbnone'>
            <NewSellCard />
            <NewSellCard />
            <NewSellCard />
            <NewSellCard />
          </div>
          <div className='row gendermg mbFlex'>
            <NewSellCard />
            <NewSellCard />
          </div>
        </Container>
      </MainContainer>
      <FastButton />
    	<NavHomeMobile />
      <ProvicyModal
        show={displayProvicy}
        close={closeProvicy}
      />
      <ServiceModal
        show={displayService}
        close={closeService}
      />
      <SuccessModal 
        show={displaySend}
        close={closeMessenger} />
        <MobileFooter />
		</Layout>
	)
}

export default Item
