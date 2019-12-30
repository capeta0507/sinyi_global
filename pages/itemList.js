import React,{Component} from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import ItemCard from '../components/Card/itemCard'
import Breadcrumb from '../components/breadcrumb'
import FastButton from '../components/fastButton3'
import Select from 'react-select'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchDiv = styled.div`
	background: #566A77;
  width: 100%;
  height: 400px;
	padding: 130px 0 50px 0;
	@media (max-width: 992px){
		padding: 80px 0 10px 0;
  }
`
const HeadTag = styled.div`
	display: flex;
	margin: 0 auto;
	width: 20%;
	font-weight: bold;
  text-align: center;
  @media (max-width: 1560px){
    width: 22%;
  }
	@media (max-width: 992px){
    width: 90%;
  }
`
const HeadList = styled.div`
	display: flex;
	margin: 0 auto;
	width: 60%;
	border-radius: 5px;
	border: ${props => props.search ? '2px solid #00B1FF' : ''};
	text-align: center;
  margin-top: 10px;
  @media (max-width: 1440px){
    width: 80%;
  }
	@media (max-width: 992px){
    width: 90%;
    display: none;
		justify-content: space-between;
  }
`
const HeadListMb = styled.div`
  display: none;
	margin: 0 auto;
	width: 60%;
	border-radius: 5px;
	border: ${props => props.search ? '2px solid #00B1FF' : ''};
	text-align: center;
  margin-top: 10px;
  @media (max-width: 1440px){
    width: 80%;
  }
	@media (max-width: 992px){
    width: 90%;
    display: flex;
		justify-content: space-between;
  }
`
const IptName = styled.div`
  width: 85%;
  @media (max-width: 992px){
    width: 100%;
  }
`
const SearchButton = styled.div`
	width: 15%;
	background: #00B1FF;
	text-align: center;
	color: #fff;
	font-size: 16px;
	padding: 9px 0 0 0;
	@media (max-width: 992px){
    display: none;
  }
`
const SearchButtonMb = styled.div`
	width: 100%;
	background: #00B1FF;
	text-align: center;
	color: #fff;
	font-size: 16px;
	padding: 5px 0;
	border-radius: 5px;
	display: none;
	@media (max-width: 992px){
    display: block;
  }
`
const Make = styled.div`
  text-align: left;
  width: ${props => props.long ? '30%' : '18%'};
  padding-right: 15px;
  @media (max-width: 992px){
		display: none;
  }
`
const MakeMb = styled.div`
  text-align: left;
  width: ${props => props.long ? '100%' : '48%'};
  display: none;
  @media (max-width: 992px){
		display: block;
  }
`
const Container = styled.div`
	width: 100%;
  background-color: #F3F3F3;
  background-image: url(/static/img/icon/grey.png);
  background-repeat:  repeat-x;
	padding: 0 0 60px 0;
`
const Content = styled.div`
	width: 80%;
	margin: 0 auto;
	@media (max-width: 992px){
		width: 90%;
	}
`
const PageInfo = styled.div`
  float: right;
  left: -50%;
  position: relative;
  & > ul{
    float:left;
    left: 50%;
    position: relative;
    display: flex;
    & > li{
      margin-right: 10px;
    } 
  }
  @media (max-width: 992px){
    display: none;
  }
`
const PageCircle = styled.div`
  width: 26px;
  height: 26px;
  cursor: pointer;
  color:#ABABAB;
  border: 1px solid #ABABAB;
`
const PageImg = styled.img`
  width: 12px;
  margin-top: -3px;
  margin-left: ${props => props.next ? '6px' : '9px'};
  @media (max-width: 992px){
    width: 12px;
    margin-top: 0px;
    margin-left: ${props => props.next ? '5px' : '8px'};
  }
`
const MakeHead = styled.div`
  width: 100%;
  // padding-top: 50px;
  display: flex;
  justify-content: space-between;
`
const Sort = styled.div`
  width: 15%;
  padding-top: 20px;
  @media (max-width: 992px){
    width: 70%;
  }
`
const DrowDown = styled.div`
  width: 100%;
  border: 1px solid #fff;
  // background: #fff;
  padding: 7px 10px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background: url(/static/img/select_down.png) no-repeat 94% 13px;
  @media (max-width: 992px){
    padding: 7px 10px;
    background: url(/static/img/select_down.png) no-repeat 92% 15px;
  }
`
const PlaceOption = styled.div`
  background: #fff;
  width: 330px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.2);
  margin-top: 10px;
  @media (max-width: 992px){
    left: 5%;
    width: 90%;
    position: absolute;
  }
`
const Check = styled.div`
  width: 25%;
  display: flex;
  & > input{
    margin-top: 6px;
    margin-right: 5px;
  }
`
const DrowOption = styled.div`
  background: #fff;
  width: 100%;
  box-shadow: 0 5px 5px rgba(0,0,0,0.2);
  margin-top: 10px;
  border-radius: 5px;
  @media (max-width: 992px){
    width: 90%;
    position: absolute;
  }
`
const ForSel = styled.div`
  width: 100%;
  padding: ${props => props.long ? '15px' : '15px'};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 992px){
    padding: ${props => props.long ? '0 15px 15px 15px' : '15px'};
  }
`
const DrowMenu = styled.ul`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  & > li {
    width: 100%;
    padding: 8px 15px;
    color:  #969696;
    font-size: 16px;
    &:hover {
      background: rgba(0,177,255,.1);
      color: #00B1FF;
    }
  }
`
const DrowMenuCity = styled.ul`
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: scroll;
  height: 250px;
  & > li {
    width: 100%;
    padding: 8px 15px;
    color:  #969696;
    font-size: 16px;
    &:hover {
      background: rgba(0,177,255,.1);
      color: #00B1FF;
    }
  }
`
const Back = styled.div`
  width: 100%;
  padding: 5px 20px;
  color: #00B1FF;
  cursor: pointer;
`
const SalSelect = styled.div`
  width: 40%;
`
const SalSpan = styled.div`
  width: 5%;
  margin-top: 8px;
`
const BtnContent = styled.div`
  width:100%;
  text-align: center;
  padding: 20px 0 60px 0;
  @media (max-width: 992px){
    padding: 20px 0 20px 0;
  }
`
const Show = styled.div`
  width: 82px;
  text-align: center;
  margin-bottom: 80px;
  margin: 0 auto;
  cursor: pointer;
  & > img{
    width: 100%;
  }
`
const PresetOption = [
  { value: '租金從高到低', label: '租金從高到低'},
  { value: '租金從低到高', label: '租金從低到高'},
  { value: '坪數從小到大', label: '坪數從小到大'},
  { value: '坪數從大到小', label: '坪數從大到小'}
]

class ItemList extends Component {
  constructor(){
    super()
    this.state = {
      kind: false,
      place: false,
      district: false,
      rent: false,
      rentPing: false,
      makePrice: false,
      makePlace: false
    }
  }
  componentDidMount(){
    document.addEventListener('click', (e) => {
      this.setState({
        kind: false,
        place: false,
        district: false,
        rent: false,
        rentPing: false,
        makePrice: false,
        makePlace: false
      })
    })
  }

  showKind = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({ 
      kind: !this.state.kind,
      place: false,
      district: false,
      rent: false,
      rentPing: false 
    }, () => {
      document.addEventListener('click', this.hideKind)
    })
  }
  hideKind = () => {
    this.setState({ kind: false },() => {
      document.removeEventListener('click', this.hideKind)
    })

  }
  showPlace = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({ 
      place: !this.state.place,
      kind: false,
      district: false,
      rent: false,
      rentPing: false 
    }, () => {
      document.removeEventListener('click', this.hidePlace)
    })
  }
  hidePlace = () => {
    this.setState({ place: false },() => {
      document.removeEventListener('click', this.hidePlace)
    })
  }
  showDir = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({ 
      kind: false,
      place: false,
      district: !this.state.district,
      rent: false,
      rentPing: false
     })
  }
  showRent = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({ 
      kind: false,
      place: false,
      district: false,
      rent: !this.state.rent,
      rentPing: false
     })
  }
  showRentPing = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({ 
      kind: false,
      place: false,
      district: false,
      rent: false,
      rentPing: !this.state.rentPing
     })
  }
  price01 = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({
      makePrice: false
    })
  }
  price02 = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({
      makePrice: true
    })
  }
  place01 = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({
      makePlace: false
    })
  }
  place02 = (e) => {
    e.preventDefault();
    this.stopPropagation(e);
    this.setState({
      makePlace: true
    })
  }  
  stopPropagation(e) {
    e.nativeEvent.stopImmediatePropagation();
  }
  render(){
    const colPrice = this.state.makePrice ? 'secondFocus' : ''
    const colPlace = this.state.makePlace ? 'secondFocus' : ''
    return (
      <Layout>
        <Head
          title="租賃商用不動產、商辦、工業地產、土地物件列表 - 信義全球資產"
          description="眾多商用不動產、商辦大樓、工業廠房、土地物件出租，由專業商用不動產顧問團隊為您評估物件合適性、提供投資建議，歡迎立即預約諮詢！"
          url=""
        />
        <Navbar />
        <NavHomeMobile />
        <SearchDiv>
          <HeadTag>
            <a className='itemBuy' href='/sellList'>
              <div>
                買賣
                <img className='itemBorder' src='/static/img/navborder_grey.png' />
              </div>
            </a>
            <a className='itemBuy itemBuyActive' href='/itemList'>
              <div>
                租賃
                <img className='itemBorder' src='/static/img/navborder.png' />
              </div>
            </a>
  
          </HeadTag>
          <HeadList search>
            <IptName className=''>
              <input className='form-control' type='text' placeholder='關鍵字...' />
            </IptName>
            <SearchButton>搜尋</SearchButton>
          </HeadList>
          <HeadListMb>
            <MakeMb long className='zIn'>
              <DrowDown onClick={this.showKind}>種類</DrowDown>
                {
                  this.state.kind ? (
                    <DrowOption>
                      <DrowMenu>
                        <li>辦公</li>
                        <li>店面</li>
                        <li>廠房</li>
                        <li>土地</li>
                      </DrowMenu>
                    </DrowOption>
                  ) : (
                    null
                  )
                }
            </MakeMb>
          </HeadListMb>
          <HeadListMb>
            <MakeMb className='zIn2'>
              <DrowDown onClick={this.showPlace}>縣市</DrowDown>
                {
                  this.state.place ? (
                    <DrowOption>
                      <DrowMenuCity>
                        <li>台北市</li>
                        <li>新北市</li>
                        <li>基隆市</li>
                        <li>桃園市</li>
                        <li>新竹市</li>
                        <li>新竹縣</li>
                        <li>苗栗縣</li>
                        <li>台中市</li>
                        <li>彰化縣</li>
                        <li>雲林縣</li>
                        <li>南投縣</li>
                        <li>嘉義縣</li>
                        <li>台南市</li>
                        <li>高雄市</li>
                        <li>屏東縣</li>
                        <li>宜蘭縣</li>
                        <li>花蓮縣</li>
                        <li>台東縣</li>
                        <li>澎湖縣</li>
                      </DrowMenuCity>
                    </DrowOption>
                  ) : (
                    null
                  )
                }
            </MakeMb>
            <MakeMb className='zIn2'>
            <DrowDown onClick={this.showDir}>行政區</DrowDown>
              {
                this.state.district ? (
                  <PlaceOption onClick={this.stopPropagation}>
                    <Back>
                      &lt; &nbsp;&nbsp;全區
                    </Back>
                    <ForSel>
                    <Check>
                        <input id='city001' type='checkbox' /><label htmlFor="city001">中山區</label>
                      </Check>
                      <Check>
                        <input id='city002' type='checkbox' /><label htmlFor="city002">中正區</label>
                      </Check>
                      <Check>
                        <input id='city003' type='checkbox' /><label htmlFor="city003">信義區</label>
                      </Check>
                      <Check>
                        <input id='city004' type='checkbox' /><label htmlFor="city004">內湖區</label>
                      </Check>
                      <Check>
                        <input id='city005' type='checkbox' /><label htmlFor="city005">北投區</label>
                      </Check>
                      <Check>
                        <input id='city006' type='checkbox' /><label htmlFor="city006">南港區</label>
                      </Check>
                      <Check>
                        <input id='city007' type='checkbox' /><label htmlFor="city007">士林區</label>
                      </Check>
                      <Check>
                        <input id='city008' type='checkbox' /><label htmlFor="city008">大同區</label>
                      </Check>
                      <Check>
                        <input id='city009' type='checkbox' /><label htmlFor="city009">大安區</label>
                      </Check>
                      <Check>
                        <input id='city010' type='checkbox' /><label htmlFor="city010">文山區</label>
                      </Check>
                      <Check>
                        <input id='city011' type='checkbox' /><label htmlFor="city011">松山區</label>
                      </Check>
                      <Check>
                        <input id='city012' type='checkbox' /><label htmlFor="city012">萬華區</label>
                      </Check>
                    </ForSel>
                  </PlaceOption>
                ) : (
                  null
                )
              }
            </MakeMb>
          </HeadListMb>
          <HeadListMb>
            <MakeMb className='zIn3'>
            <DrowDown onClick={this.showRent}>租金</DrowDown>
              {
                this.state.rent ? (
                  <DrowOption onClick={this.stopPropagation}>
                    <ForSel>
                      <SalSelect>
                        <input onFocus={this.price01} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬-
                      </SalSpan>
                      <SalSelect>
                        <input onFocus={this.price02} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬
                      </SalSpan>
                    </ForSel>
                    {
                      this.state.makePrice ? (
                        <DrowMenu>
                          <li className={`${colPrice}`}>3,000</li>
                          <li className={`${colPrice}`}>6,000</li>
                          <li className={`${colPrice}`}>8,000</li>
                          <li className={`${colPrice}`}>10,000</li>
                          <li className={`${colPrice}`}>30,000</li>
                          <li className={`${colPrice}`}>不限</li>
                        </DrowMenu>
                      ) : (
                        <DrowMenu>
                          <li className={`${colPrice}`}>0</li>
                          <li className={`${colPrice}`}>3,000</li>
                          <li className={`${colPrice}`}>6,000</li>
                          <li className={`${colPrice}`}>8,000</li>
                          <li className={`${colPrice}`}>10,000</li>
                          <li className={`${colPrice}`}>30,000</li>
                        </DrowMenu>
                      )
                    }
                  </DrowOption>
                ) : (
                  null
                )
              }
            </MakeMb>
            <MakeMb className='zIn3'>
            <DrowDown onClick={this.showRentPing}>出租坪數</DrowDown>
              {
                this.state.rentPing ? (
                  <PlaceOption onClick={this.stopPropagation}>
                    <ForSel>
                      <SalSelect>
                        <input onFocus={this.place01} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        坪-
                      </SalSpan>
                      <SalSelect>
                        <input onFocus={this.place02} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                      坪
                      </SalSpan>
                    </ForSel>
                    {
                      this.state.makePlace ? (
                        <DrowMenu>
                          <li className={`${colPlace}`}>60</li>
                          <li className={`${colPlace}`}>80</li>
                          <li className={`${colPlace}`}>100</li>
                          <li className={`${colPlace}`}>200</li>
                          <li className={`${colPlace}`}>300</li>
                          <li className={`${colPlace}`}>400</li>
                          <li className={`${colPlace}`}>500</li>
                          <li className={`${colPlace}`}>不限</li>
                        </DrowMenu>
                      ) : (
                        <DrowMenu>
                          <li className={`${colPlace}`}>0</li>
                          <li className={`${colPlace}`}>60</li>
                          <li className={`${colPlace}`}>80</li>
                          <li className={`${colPlace}`}>100</li>
                          <li className={`${colPlace}`}>200</li>
                          <li className={`${colPlace}`}>300</li>
                          <li className={`${colPlace}`}>400</li>
                          <li className={`${colPlace}`}>500</li>
                        </DrowMenu>
                      )
                    }
                  </PlaceOption>
                ) : (
                  null
                )
              }
            </MakeMb>
          </HeadListMb>
          <HeadListMb>
            <SearchButtonMb>搜尋</SearchButtonMb>
          </HeadListMb>
          <HeadList>
            <Make className='zIn3'>
              <DrowDown onClick={this.showKind}>種類</DrowDown>
                {
                  this.state.kind ? (
                    <DrowOption>
                      <DrowMenu>
                        <li>辦公</li>
                        <li>店面</li>
                        <li>廠房</li>
                        <li>土地</li>
                      </DrowMenu>
                    </DrowOption>
                  ) : (
                    null
                  )
                }
            </Make>
            <Make className='zIn3'>
              <DrowDown onClick={this.showPlace}>縣市</DrowDown>
                {
                  this.state.place ? (
                    <DrowOption>
                      <DrowMenuCity>
                        <li>台北市</li>
                        <li>新北市</li>
                        <li>基隆市</li>
                        <li>桃園市</li>
                        <li>新竹市</li>
                        <li>新竹縣</li>
                        <li>苗栗縣</li>
                        <li>台中市</li>
                        <li>彰化縣</li>
                        <li>雲林縣</li>
                        <li>南投縣</li>
                        <li>嘉義縣</li>
                        <li>台南市</li>
                        <li>高雄市</li>
                        <li>屏東縣</li>
                        <li>宜蘭縣</li>
                        <li>花蓮縣</li>
                        <li>台東縣</li>
                        <li>澎湖縣</li>
                      </DrowMenuCity>
                    </DrowOption>
                  ) : (
                    null
                  )
                }
            </Make>
            <Make className='zIn'>
              <DrowDown onClick={this.showDir}>行政區</DrowDown>
              {
                this.state.district ? (
                  <PlaceOption onClick={this.stopPropagation}>
                    <Back>
                      &lt; &nbsp;&nbsp;全區
                    </Back>
                    <ForSel>
                     <Check>
                        <input id='city101' type='checkbox' /><label htmlFor="city101">中山區</label>
                      </Check>
                      <Check>
                        <input id='city102' type='checkbox' /><label htmlFor="city102">中正區</label>
                      </Check>
                      <Check>
                        <input id='city103' type='checkbox' /><label htmlFor="city103">信義區</label>
                      </Check>
                      <Check>
                        <input id='city104' type='checkbox' /><label htmlFor="city104">內湖區</label>
                      </Check>
                      <Check>
                        <input id='city105' type='checkbox' /><label htmlFor="city105">北投區</label>
                      </Check>
                      <Check>
                        <input id='city106' type='checkbox' /><label htmlFor="city106">南港區</label>
                      </Check>
                      <Check>
                        <input id='city107' type='checkbox' /><label htmlFor="city107">士林區</label>
                      </Check>
                      <Check>
                        <input id='city108' type='checkbox' /><label htmlFor="city108">大同區</label>
                      </Check>
                      <Check>
                        <input id='city109' type='checkbox' /><label htmlFor="city109">大安區</label>
                      </Check>
                      <Check>
                        <input id='city110' type='checkbox' /><label htmlFor="city110">文山區</label>
                      </Check>
                      <Check>
                        <input id='city111' type='checkbox' /><label htmlFor="city111">松山區</label>
                      </Check>
                      <Check>
                        <input id='city112' type='checkbox' /><label htmlFor="city112">萬華區</label>
                      </Check>
                    </ForSel>
                  </PlaceOption>
                ) : (
                  null
                )
              }
              
            </Make>
            <Make long className='zIn3'>
              <DrowDown onClick={this.showRent}>租金</DrowDown>
              {
                this.state.rent ? (
                  <DrowOption onClick={this.stopPropagation}>
                    <ForSel>
                      <SalSelect>
                        <input onFocus={this.price01} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬-
                      </SalSpan>
                      <SalSelect>
                        <input onFocus={this.price02} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬
                      </SalSpan>
                    </ForSel>
                    {
                      this.state.makePrice ? (
                        <DrowMenu>
                          <li className={`${colPrice}`}>3,000</li>
                          <li className={`${colPrice}`}>6,000</li>
                          <li className={`${colPrice}`}>8,000</li>
                          <li className={`${colPrice}`}>10,000</li>
                          <li className={`${colPrice}`}>30,000</li>
                          <li className={`${colPrice}`}>不限</li>
                        </DrowMenu>
                      ) : (
                        <DrowMenu>
                          <li className={`${colPrice}`}>0</li>
                          <li className={`${colPrice}`}>3,000</li>
                          <li className={`${colPrice}`}>6,000</li>
                          <li className={`${colPrice}`}>8,000</li>
                          <li className={`${colPrice}`}>10,000</li>
                          <li className={`${colPrice}`}>30,000</li>
                        </DrowMenu>
                      )
                    }
                  </DrowOption>
                ) : (
                  null
                )
              }
            </Make>
            <Make className='pdRight zIn3'>
              <DrowDown onClick={this.showRentPing}>出租坪數</DrowDown>
              {
                this.state.rentPing ? (
                  <PlaceOption onClick={this.stopPropagation}>
                    <ForSel>
                      <SalSelect>
                        <input onFocus={this.place01} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        坪-
                      </SalSpan>
                      <SalSelect>
                        <input onFocus={this.place02} className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                      坪
                      </SalSpan>
                    </ForSel>
                    {
                      this.state.makePlace ? (
                        <DrowMenu>
                          <li className={`${colPlace}`}>60</li>
                          <li className={`${colPlace}`}>80</li>
                          <li className={`${colPlace}`}>100</li>
                          <li className={`${colPlace}`}>200</li>
                          <li className={`${colPlace}`}>300</li>
                          <li className={`${colPlace}`}>400</li>
                          <li className={`${colPlace}`}>500</li>
                          <li className={`${colPlace}`}>不限</li>
                        </DrowMenu>
                      ) : (
                        <DrowMenu>
                          <li className={`${colPlace}`}>0</li>
                          <li className={`${colPlace}`}>60</li>
                          <li className={`${colPlace}`}>80</li>
                          <li className={`${colPlace}`}>100</li>
                          <li className={`${colPlace}`}>200</li>
                          <li className={`${colPlace}`}>300</li>
                          <li className={`${colPlace}`}>400</li>
                          <li className={`${colPlace}`}>500</li>
                        </DrowMenu>
                      )
                    }
                  </PlaceOption>
                ) : (
                  null
                )
              }
              
            </Make>
          </HeadList>
          <h1 className='zero'>租賃</h1>
        </SearchDiv>
        <Container>
          <Content>
            <MakeHead>
              <Breadcrumb data={[{title:"租賃" , link:"/itemList"}]}/>
              <Sort>
                <Select 
                  placeholder="預設排序"
                  label='Single select'
                  inputProps={{readOnly:true}}
                  isSearchable={ false }
                  options={PresetOption}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 5,
                  })}
                />
              </Sort>
            </MakeHead>
            <div className='row mbnone speAround'>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
            <div className='row navBlock'>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </Content>
          <PageInfo className='mbnone'>
            <ul>
              <li>
                <PageCircle>
                  <PageImg src='/static/img/prev.png' />
                </PageCircle>
              </li>
              <li>
                <div className='pagination paginationActive'>1</div>
              </li>
              <li>
                <div className='pagination'>2</div>
              </li>
              <li>
                <div className='pagination'>3</div>
              </li>
              <li>
                <div className='pagination'>4</div>
              </li>
              <li>
                <div className='pagination'>5</div>
              </li>
              <li>
                <div className='pagination'>6</div>
              </li>
              <li>
                <div className='pagination'>7</div>
              </li>
              <li>
                <PageCircle>
                  <PageImg next src='/static/img/next.png' />
                </PageCircle>
              </li>
            </ul>
          </PageInfo>
          <BtnContent className='navBlock'>
            <Show>
              <img src='/static/img/show_all.png' />
            </Show>
          </BtnContent>
        </Container>
        <FastButton />
      </Layout>
    )
  }
}

export default ItemList
