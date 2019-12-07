import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import ItemCard from '../components/Card/itemCard'
import Select from 'react-select'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchDiv = styled.div`
	background: #566A77;
	width: 100%;
	padding: 150px 0 50px 0;
	@media (max-width: 768px){
		padding: 80px 0 10px 0;
  }
`
const HeadTag = styled.div`
	display: flex;
	margin: 0 auto;
	width: 10%;
	text-align: center;
	@media (max-width: 768px){
    width: 50%;
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
	@media (max-width: 768px){
		width: 90%;
		justify-content: space-between;
  }
`
const IptName = styled.div`
  width: 85%;
  @media (max-width: 768px){
    width: 100%;
  }
`
const SearchButton = styled.div`
	width: 15%;
	background: #00B1FF;
	text-align: center;
	color: #fff;
	font-size: 16px;
	padding: 17px 0 0 0;
	@media (max-width: 768px){
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
	@media (max-width: 768px){
    display: block;
  }
`
const Make = styled.div`
  text-align: left;
  width: ${props => props.long ? '30%' : '18%'};
  padding-right: 15px;
  @media (max-width: 768px){
		display: none;
  }
`
const MakeMb = styled.div`
  text-align: left;
  width: ${props => props.long ? '100%' : '48%'};
	/* padding-right: 15px; */
	display: none;
  @media (max-width: 768px){
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
	@media (max-width: 768px){
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
	background: #008F53;
	border: 1px solid #ABABAB;
`
const PageImg = styled.img`
  width: 12px;
  margin-top: -3px;
  margin-left: ${props => props.next ? '6px' : '9px'};
  @media (max-width: 768px){
    width: 12px;
    margin-top: 13px;
    margin-left: ${props => props.next ? '12px' : '15px'};
  }
`

const ItemList = () => {
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
					<div className='itemBuy'>
						買賣
						<img src='/static/img/navborder.png' />
					</div>
					<div className='itemBuy'>
						租賃
						<img src='/static/img/navborder.png' />
					</div>
				</HeadTag>
				<HeadList search>
					<IptName className=''>
						<input className='form-control' type='text' placeholder='關鍵字...' />
					</IptName>
					<SearchButton>搜尋</SearchButton>
				</HeadList>
				<HeadList>
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
				</HeadList>
				<HeadList>
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
				</HeadList>
				<HeadList>
					<MakeMb>
						<Select 
							placeholder="租金"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
					<MakeMb>
						<Select 
							placeholder="出租坪數"
							label='Single select'
							theme={theme => ({
								...theme,
								borderRadius: 5,
							})}
						/>
					</MakeMb>
				</HeadList>
				<HeadList>
					<SearchButtonMb>搜尋</SearchButtonMb>
				</HeadList>
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
						<Select 
							placeholder="行政區"
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
					<Make long className=''>
						<Select 
							placeholder="租金"
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
					<Make className='pdRight'>
						<Select 
							placeholder="出租坪數"
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
				</HeadList>
			</SearchDiv>
			<Container>
				<Content>
					<div className='row'>
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
		</Layout>
	)
}

export default ItemList
