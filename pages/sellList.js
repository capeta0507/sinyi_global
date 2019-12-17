import React,{useState} from 'react'
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
	padding: 150px 0 50px 0;
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
  padding: 15px 10px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  background: url(/static/img/select_down.png) no-repeat 94% 21px;
`
const PlaceOption = styled.div`
  background: #fff;
  width: 420px;
  box-shadow: 0 5px 5px rgba(0,0,0,0.2);
  margin-top: 10px;
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
`
const ForSel = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

const ItemList = () => {
  const [district, setDistrict] = useState(false)
  const [price, setPrice] = useState(false)
  const [ping, setPing] = useState(false)

  const showDir = () => {
    setDistrict(!district)
  }
  const showPrice = () => {
    setPrice(!price)
  }
  const showPing = () => {
    setPing(!ping)
  }
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
						<Select 
							placeholder="種類"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
				</HeadListMb>
				<HeadListMb>
					<MakeMb>
						<Select 
							placeholder="縣市"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
					<MakeMb>
						<Select 
							placeholder="行政區"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
				</HeadListMb>
				<HeadListMb>
					<MakeMb>
						<Select 
							placeholder="價格"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
					<MakeMb>
						<Select 
							placeholder="坪數"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
				</HeadListMb>
				<HeadListMb>
					<SearchButtonMb>搜尋</SearchButtonMb>
				</HeadListMb>
				<HeadList>
					<Make className=''>
						<Select 
							placeholder="種類"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
								colors: {
									...theme.colors,
									primary: '#01AB59',
								},
							})}
						/>
					</Make>
					<Make className=''>
						<Select 
							placeholder="縣市"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
								colors: {
									...theme.colors,
									primary: '#01AB59',
								},
							})}
						/>
					</Make>
					<Make className=''>
          <DrowDown onClick={showDir}>行政區</DrowDown>
            {
              district ? (
                <PlaceOption>
                  <Back>
                    &lt; &nbsp;&nbsp;全區
                  </Back>
                  <ForSel>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                    <Check>
                      <input type='checkbox' />中山區
                    </Check>
                  </ForSel>
                </PlaceOption>
              ) : (
                null
              )
            }
					</Make>
					<Make long className=''>
          <DrowDown onClick={showPrice}>價格</DrowDown>
            {
              price ? (
                <DrowOption>
                  <ForSel>
                    <SalSelect>
                      <select className='form-control'>
                        <option>請選擇</option>
                      </select>
                    </SalSelect>
                    <SalSpan>
                      萬-
                    </SalSpan>
                    <SalSelect>
                      <select className='form-control'>
                        <option>請選擇</option>
                      </select>
                    </SalSelect>
                    <SalSpan>
                      萬
                    </SalSpan>
                  </ForSel>
                </DrowOption>
              ) : (
                null
              )
            }
					</Make>
					<Make className='pdRight'>
          <DrowDown onClick={showPing}>坪數</DrowDown>
            {
              ping ? (
                <PlaceOption>
                  <ForSel>
                    <SalSelect>
                      <select className='form-control'>
                        <option>請選擇</option>
                      </select>
                    </SalSelect>
                    <SalSpan>
                      坪-
                    </SalSpan>
                    <SalSelect>
                      <select className='form-control'>
                        <option>請選擇</option>
                      </select>
                    </SalSelect>
                    <SalSpan>
                    坪
                    </SalSpan>
                  </ForSel>
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
					<div className='row'>
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
				</Content>
				<PageInfo>
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
			</Container>
      <FastButton />
		</Layout>
	)
}

export default ItemList
