import React, { Component } from 'react'
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
  z-index: 1;
  @media (max-width: 992px){
		display: none;
  }
`
const MakeMb = styled.div`
  text-align: left;
  width: ${props => props.long ? '100%' : '48%'};
  display: none;
  z-index: 1;
  @media (max-width: 992px){
		display: block;
  }
`
const Container = styled.div`
	width: 100%;
	background: #F1F1F1;
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
  display: flex;
  justify-content: space-between;
`
const Sort = styled.div`
  width: 15%;
  padding-top: 20px;
  @media (max-width: 992px){
    width: 50%;
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
    left: 3%;
    width: 340px;
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
  border-radius: 10px;
  @media (max-width: 992px){
    width: 90%;
    position: absolute;
  }
`
const ForSel = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const DrowMenu = styled.ul`
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  overflow-y: scroll;
  height: 200px;
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

class ItemList extends Component {
  constructor(){
    super()
    this.state = {
      kind: false,
      place: false,
      district: false,
      price: false,
      ping: false
    }
  }

  showKind = (e) => {
    e.preventDefault();
    this.setState({ kind: true }, () => {
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
    this.setState({ place: true }, () => {
      document.addEventListener('click', this.hidePlace)
    })
  }
  hidePlace = () => {
    this.setState({ place: false },() => {
      document.removeEventListener('click', this.hidePlace)
    })

  }
  showDir = (e) => {
    e.preventDefault();
    this.setState({ district: !this.state.district })
  }
  showPrice = (e) => {
    e.preventDefault();
    this.setState({ price: !this.state.price })
  }
  showPing = (e) => {
    e.preventDefault();
    this.setState({ ping: !this.state.ping })
  }
  render(){
    return (
      <Layout>
        <Head
          title="信義全球資產"
          description="信義房屋集團人才招募培訓中，提供各種集團熱門職缺、徵才消息、薪資福利。完整新人培訓課程不用怕沒人可以問，歡迎熱忱的你加入我們，與我們一起共創最大價值。"
        />
        <Navbar />
        <NavHomeMobile />
        <SearchDiv>
          <HeadTag>
            <a href='/sellList'>
              <div className='itemBuy itemBuyActive'>
                買賣
                <img className='itemBorder' src='/static/img/navborder.png' />
              </div>
            </a>
            <a href='/itemList'>
              <div className='itemBuy'>
                租賃
                <img className='itemBorder' src='/static/img/navborder_grey.png' />
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
            <MakeMb long>
              <DrowDown onClick={this.showKind}>種類</DrowDown>
              {
                this.state.kind ? (
                  <DrowOption>
                    <DrowMenu>
                      <li>辦公</li>
                      <li>店面</li>
                      <li>廠房</li>
                      <li>土地</li>
                      <li>其他</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </MakeMb>
          </HeadListMb>
          <HeadListMb>
            <MakeMb>
            <DrowDown onClick={this.showPlace}>縣市</DrowDown>
              {
                this.state.place ? (
                  <DrowOption>
                    <DrowMenu>
                      <li>台北市</li>
                      <li>新北市</li>
                      <li>基隆市</li>
                      <li>桃園市</li>
                      <li>新竹市</li>
                      <li>新竹縣</li>
                      <li>苗栗縣</li>
                      <li>台中市</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </MakeMb>
            <MakeMb>
            <DrowDown onClick={this.showDir}>行政區</DrowDown>
              {
                this.state.district ? (
                  <PlaceOption>
                    <Back>
                      &lt; &nbsp;&nbsp;全區
                    </Back>
                    <ForSel>
                      <Check>
                        <input type='checkbox' />中山區
                      </Check>
                      <Check>
                        <input type='checkbox' />中正區
                      </Check>
                      <Check>
                        <input type='checkbox' />信義區
                      </Check>
                      <Check>
                        <input type='checkbox' />內湖區
                      </Check>
                      <Check>
                        <input type='checkbox' />北投區
                      </Check>
                      <Check>
                        <input type='checkbox' />南港區
                      </Check>
                      <Check>
                        <input type='checkbox' />士林區
                      </Check>
                      <Check>
                        <input type='checkbox' />大同區
                      </Check>
                      <Check>
                        <input type='checkbox' />大安區
                      </Check>
                      <Check>
                        <input type='checkbox' />文山區
                      </Check>
                      <Check>
                        <input type='checkbox' />松山區
                      </Check>
                      <Check>
                        <input type='checkbox' />萬華區
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
            <MakeMb>
            <DrowDown onClick={this.showPrice}>價格</DrowDown>
              {
                this.state.price ? (
                  <DrowOption>
                    <ForSel>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬-
                      </SalSpan>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬
                      </SalSpan>
                    </ForSel>
                    <DrowMenu>
                      <li>0</li>
                      <li>200</li>
                      <li>400</li>
                      <li>800</li>
                      <li>1200</li>
                      <li>2000</li>
                      <li>3500</li>
                      <li>5000</li>
                      <li>6000</li>
                      <li>8000</li>
                      <li>10000</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </MakeMb>
            <MakeMb>
              <DrowDown onClick={this.showPing}>坪數</DrowDown>
              {
                this.state.ping ? (
                  <PlaceOption>
                    <ForSel>
                      <label className="form-check-label gendermg3 relative" htmlFor="build">
                        <input className="form-check-input mgtop yesno" type="radio" id="build" name="gender" value="建築面積" />
                        <label className="form-check-label myCheckLabel" htmlFor="build">建築面積</label>
                        <span class="checkmark"></span>
                      </label>
                      <label className="form-check-label gendermg3 relative" htmlFor="sun">
                        <input className="form-check-input mgtop yesno" type="radio" id="sun" name="gender" value="主+陽" />
                        <label className="form-check-label myCheckLabel" htmlFor="sun">主+陽</label>
                        <span class="checkmark"></span>
                      </label>
                      <label className="form-check-label gendermg3 relative" htmlFor="land">
                        <input className="form-check-input mgtop yesno" type="radio" id="land" name="gender" value="土地面積" />
                        <label className="form-check-label myCheckLabel" htmlFor="land">土地面積</label>
                        <span class="checkmark"></span>
                      </label>
                      <input type='radio' />
                      <input type='radio' />
                    </ForSel>
                    <ForSel>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        坪-
                      </SalSpan>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                      坪
                      </SalSpan>
                    </ForSel>
                    <DrowMenu>
                      <li>10</li>
                      <li>20</li>
                      <li>30</li>
                      <li>40</li>
                      <li>50</li>
                      <li>60</li>
                      <li>100</li>
                      <li>不限</li>
                    </DrowMenu>
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
            <Make className=''>
              <DrowDown onClick={this.showKind}>種類</DrowDown>
              {
                this.state.kind ? (
                  <DrowOption>
                    <DrowMenu>
                      <li>辦公</li>
                      <li>店面</li>
                      <li>廠房</li>
                      <li>土地</li>
                      <li>其他</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </Make>
            <Make className=''>
              <DrowDown onClick={this.showPlace}>縣市</DrowDown>
              {
                this.state.place ? (
                  <DrowOption>
                    <DrowMenu>
                      <li>台北市</li>
                      <li>新北市</li>
                      <li>基隆市</li>
                      <li>桃園市</li>
                      <li>新竹市</li>
                      <li>新竹縣</li>
                      <li>苗栗縣</li>
                      <li>台中市</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </Make>
            <Make className=''>
            <DrowDown onClick={this.showDir}>行政區</DrowDown>
              {
                this.state.district ? (
                  <PlaceOption>
                    <Back>
                      &lt; &nbsp;&nbsp;全區
                    </Back>
                    <ForSel>
                      <Check>
                        <input type='checkbox' />中山區
                      </Check>
                      <Check>
                        <input type='checkbox' />中正區
                      </Check>
                      <Check>
                        <input type='checkbox' />信義區
                      </Check>
                      <Check>
                        <input type='checkbox' />內湖區
                      </Check>
                      <Check>
                        <input type='checkbox' />北投區
                      </Check>
                      <Check>
                        <input type='checkbox' />南港區
                      </Check>
                      <Check>
                        <input type='checkbox' />士林區
                      </Check>
                      <Check>
                        <input type='checkbox' />大同區
                      </Check>
                      <Check>
                        <input type='checkbox' />大安區
                      </Check>
                      <Check>
                        <input type='checkbox' />文山區
                      </Check>
                      <Check>
                        <input type='checkbox' />松山區
                      </Check>
                      <Check>
                        <input type='checkbox' />萬華區
                      </Check>
                    </ForSel>
                  </PlaceOption>
                ) : (
                  null
                )
              }
            </Make>
            <Make long className=''>
            <DrowDown onClick={this.showPrice}>價格</DrowDown>
              {
                this.state.price ? (
                  <DrowOption>
                    <ForSel>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬-
                      </SalSpan>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        萬
                      </SalSpan>
                    </ForSel>
                    <DrowMenu>
                      <li>0</li>
                      <li>200</li>
                      <li>400</li>
                      <li>800</li>
                      <li>1200</li>
                      <li>2000</li>
                      <li>3500</li>
                      <li>5000</li>
                      <li>6000</li>
                      <li>8000</li>
                      <li>10000</li>
                    </DrowMenu>
                  </DrowOption>
                ) : (
                  null
                )
              }
            </Make>
            <Make className='pdRight'>
            <DrowDown onClick={this.showPing}>坪數</DrowDown>
              {
                this.state.ping ? (
                  <PlaceOption>
                    <ForSel>
                      <label className="form-check-label gendermg3 relative" htmlFor="build">
                        <input className="form-check-input mgtop yesno" type="radio" id="build" name="gender" value="建築面積" />
                        <label className="form-check-label myCheckLabel" htmlFor="build">建築面積</label>
                        <span class="checkmark"></span>
                      </label>
                      <label className="form-check-label gendermg3 relative" htmlFor="sun">
                        <input className="form-check-input mgtop yesno" type="radio" id="sun" name="gender" value="主+陽" />
                        <label className="form-check-label myCheckLabel" htmlFor="sun">主+陽</label>
                        <span class="checkmark"></span>
                      </label>
                      <label className="form-check-label gendermg3 relative" htmlFor="land">
                        <input className="form-check-input mgtop yesno" type="radio" id="land" name="gender" value="土地面積" />
                        <label className="form-check-label myCheckLabel" htmlFor="land">土地面積</label>
                        <span class="checkmark"></span>
                      </label>
                      <input type='radio' />
                      <input type='radio' />
                    </ForSel>
                    <ForSel>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                        坪-
                      </SalSpan>
                      <SalSelect>
                        <input className='form-control' type='text' placeholder='請選擇' />
                      </SalSelect>
                      <SalSpan>
                      坪
                      </SalSpan>
                    </ForSel>
                    <DrowMenu>
                      <li>10</li>
                      <li>20</li>
                      <li>30</li>
                      <li>40</li>
                      <li>50</li>
                      <li>60</li>
                      <li>100</li>
                      <li>不限</li>
                    </DrowMenu>
                  </PlaceOption>
                ) : (
                  null
                )
              }
            </Make>
          </HeadList>
        </SearchDiv>
        <Container>
          <Content>
            <MakeHead>
              <Breadcrumb second='買賣' />
              <Sort>
                <Select 
                  placeholder="預設排序"
                  label='Single select'
                  theme={theme => ({
                    ...theme,
                    borderRadius: 5,
                  })}
                />
              </Sort>
            </MakeHead>
            <div className='row mbnone'>
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
            <Show className='navBlock'>
              <img src='/static/img/show_all.png' />
            </Show>
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
