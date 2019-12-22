import React, {useState} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import { Carousel } from 'react-bootstrap'
import Breadcrumb from '../components/breadcrumb'
import NewSellCard from '../components/Card/newSellCard'
import FastButton from '../components/fastButton2'
import '../style/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.css'

const Container = styled.div`
	width: 90%;
  margin: 0 auto;
	padding: 130px 0 50px 0;
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
    margin-left: -250px;
  }
  & > h2{
    color: #00AAF5;
    font-size: 28px;
  }
  @media (max-width: 992px){
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
  @media (max-width: 992px){
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
  box-shadow: 0px 0px 10px ;
  padding: 20px;
  margin-left: 100px;
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
    color: #00B1FF;
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

const Item = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [nextIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wR.png' />)
  const [prevIcon] = useState(<img className='carouselArrow' src='/static/img/arrow_wL.png' />)
  const [showModal, setShowModal] = useState(false)

  var g_index = 0;
  var items = document.getElementsByClassName('carousel-item');
  console.log(items.length);
  var thumbnail = document.getElementsByClassName('carousel-thumbnail-img');
  // console.log('thumb', thumbnail.length);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  const imgClick = (e,idx) => {
    // console.log(idx)
    g_index = idx;
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active')
    }

    for (let i = 0; i < thumbnail.length; i++) {
      thumbnail[i].classList.remove('carousel-thumbnail-active')
    }

    items[g_index].classList.add('active')
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
  }
  const nextImg = () => {
    g_index++;
    if (g_index >= items.length) {
      g_index = items.length - 1
    }
    if (g_index >= thumbnail.length) {
      g_index = thumbnail.length - 1
    }
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active')
    }
    items[g_index].classList.add('active')
    for (let i = 0; i < thumbnail.length; i++) {
      thumbnail[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
  }
  const prevImg = () => {
    g_index--;
    if (g_index < 0) {
      g_index = 0
    }
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active')
    }
    items[g_index].classList.add('active')
    for (let i = 0; i < thumbnail.length; i++) {
      thumbnail[i].classList.remove('carousel-thumbnail-active')
    }
    thumbnail[g_index].classList.add('carousel-thumbnail-active')
  }
  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  const displayModal = showModal ? 'show' : ''
	return (
		<Layout>
			<Head
				title="信義全球資產"
				description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
			/>
			<Navbar />
      <Container>
        <Breadcrumb second='買賣' />
        <div className='row gendermg'>
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
              {/* <Carousel nextIcon={nextIcon} prevIcon={prevIcon} interval={10000} activeIndex={index} direction={direction} onSelect={handleSelect} touch={true} indicators={false}>
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
              </Carousel> */}
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
                          <div className="carousel-diolog-content">
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
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG)"
                                  }}
                                ></div>
                                <div className="carousel-dialog-paging-num">
                                  1{/* */}/{/* */}8
                                </div>
                              </div>
                              <div
                                onClick={nextImg}
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
                            </div>
                          </div>
                          <div className="carousel-dialog-thumbnail-frmae">
                            <div className="carousel-thumbnail-frame ">
                              <div
                                className="carousel-thumbnail-pattern"
                                style={{
                                  backgroundImage:
                                    "url(https://res.sinyi.com.tw/buy/45258B/bigimg/E.JPG)",
                                  backgroundPosition: "center center",
                                  backgroundRepeat: "no-repeat"
                                }}
                              >
                                <div className="carousel-thumbnail-mask">
                                  <img src="/static/img/ic-im-pattern.svg" />
                                  <span>格局</span>
                                </div>
                              </div>
                              <div
                                className="carousel-thumbnail-map"
                                style={{
                                  backgroundImage:
                                    "url(https://res.sinyi.com.tw/buy/45258B/lifeimg/45258B_MAP.JPG)"
                                }}
                              >
                                <div className="carousel-thumbnail-mask">
                                  <img src="/static/img/ic-im-map.svg" />
                                  <span>地圖</span>
                                </div>
                              </div>
                              <div className="carousel-thumbnail-cutting" />
                              <div
                                style={{
                                  width: "calc(100% - 85px - 85px - 7px)",
                                  position: "relative",
                                  display: "inline-block"
                                }}
                              >
                                <div
                                  onClick={prevImg}
                                  className="carousel-thumbnail-arrow-l"
                                >
                                  <img src="/static/img/ic-arrow-gray.svg" />
                                </div>
                                <div className="carousel-thumbnail-img-frame">
                                  <div style={{ width: 675 }}>
                                    <div onClick={(e) => imgClick(e,0)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                      className="carousel-thumbnail-img carousel-thumbnail-active"
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,1)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,2)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,3)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,4)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,5)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,6)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                    <div onClick={(e) => imgClick(e,7)}
                                      src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                      className="carousel-thumbnail-img "
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundImage:
                                          "url(https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG)"
                                      }}
                                    >
                                      <img
                                        src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                        style={{ width: 0, height: 0 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div onClick={nextImg} className="carousel-thumbnail-arrow-r">
                                  <img src="/static/img/ic-arrow-gray.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="buy-carousel-frame">
                        <div className="buy-carousel-content-frame">
                          <div
                            data-ride="carousel"
                            className="carousel slide"
                            style={{ width: "100%", height: "100%" }}
                          >
                            <div className="carousel-inner carousel-content-size">
                              <div className="carousel-item carousel-content-size active">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-item carousel-content-size ">
                                <div onClick={openModal}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                  className="carousel-content-size carousel-current-img"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                              <div className="carousel-paging-num">
                                1{/* */}/{/* */}8
                              </div>
                            </div>
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
                          </div>
                        </div>
                        <div className="carousel-thumbnail-frame mbnone">
                          <div
                            className="carousel-thumbnail-pattern"
                            style={{
                              backgroundImage:
                                "url(https://res.sinyi.com.tw/buy/45258B/bigimg/E.JPG)",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat"
                            }}
                          >
                            <div className="carousel-thumbnail-mask">
                              <img src="/static/img/ic-im-pattern.svg" />
                              <span>格局</span>
                            </div>
                          </div>
                          <div
                            className="carousel-thumbnail-map"
                            style={{
                              backgroundImage:
                                "url(https://res.sinyi.com.tw/buy/45258B/lifeimg/45258B_MAP.JPG)"
                            }}
                          >
                            <div className="carousel-thumbnail-mask">
                              <img src="/static/img/ic-im-map.svg" />
                              <span>地圖</span>
                            </div>
                          </div>
                          <div className="carousel-thumbnail-cutting" />
                          <div
                            style={{
                              width: "calc(100% - 85px - 85px - 7px)",
                              position: "relative",
                              display: "inline-block"
                            }}
                          >
                            <div
                              onClick={prevImg}
                              className="carousel-thumbnail-arrow-l"
                            >
                              <img src="/static/img/ic-arrow-gray.svg" />
                            </div>
                            <div className="carousel-thumbnail-img-frame">
                              <div style={{ width: 675 }}>
                                <div
                                  onClick={(e) => imgClick(e,0)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                  className="carousel-thumbnail-img carousel-thumbnail-active"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/A.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,1)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/B.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,2)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/C.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,3)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/D.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,4)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/G.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,5)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/H.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,6)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/I.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                                <div
                                  onClick={(e) => imgClick(e,7)}
                                  src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                  className="carousel-thumbnail-img "
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundImage:
                                      "url(https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG)"
                                  }}
                                >
                                  <img
                                    src="https://res.sinyi.com.tw/buy/45258B/bigimg/J.JPG"
                                    style={{ width: 0, height: 0 }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={nextImg}
                              className="carousel-thumbnail-arrow-r"
                            >
                              <img src="/static/img/ic-arrow-gray.svg" />
                            </div>
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
								<BusImformation>
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
      <FastButton />
    	<NavHomeMobile />
		</Layout>
	)
}

export default Item