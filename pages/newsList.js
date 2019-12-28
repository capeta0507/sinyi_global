import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import NewsCard from '../components/Card/newsCard'
import Breadcrumb from '../components/breadcrumb'
import Link from 'next/link'
import MbNewsCard from '../components/Card/mbnewsCard'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchDiv = styled.div`
	background: #566A77;
	width: 100%;
  padding: 130px 0 1px 0;
  box-shadow: 0 5px 5px rgba(0,0,0,.5);
	@media (max-width: 992px){
		padding: 80px 0 10px 0;
  }
`
const HeadTag = styled.div`
	display: flex;
	margin: 0 auto;
	width: 10%;
	text-align: center;
	@media (max-width: 992px){
    width: 50%;
  }
`
const HeadList = styled.div`
	display: flex;
	margin: 0 auto;
	width: 60%;
	border-radius: 5px;
	text-align: center;
	margin-top: 10px;
	@media (max-width: 992px){
		width: 90%;
		justify-content: space-between;
  }
`
const IptName = styled.div`
  width: 85%;
  @media (max-width: 992px){
    width: 75%;
  }
`
const SearchButton = styled.div`
	width: 15%;
	background: #00B1FF;
	text-align: center;
	color: #fff;
	font-size: 16px;
  padding: 8px 0 0 0;
  @media (max-width: 992px){
    width: 25%;
  }
`
const Container = styled.div`
	width: 100%;
  background-color: #F3F3F3;
  background-image: url(/static/img/icon/grey.png);
  background-repeat:  repeat-x;
  padding: 0 0 100px 0;
  background-position-y: 8%;
  @media (max-width: 992px){
    padding: 10px 0 100px 0;
  }
`
const Content = styled.div`
	width: 80%;
	margin: 0 auto;
	@media (max-width: 992px){
		width: 90%;
	}
`
const MainContent = styled.div`
  width: 100%;
`
const NewsBlock = styled.div`
  width: 32%;
  margin: 0 5px;
  @media (max-width: 992px){
		width: 100%;
	}
`
const BigTitle = styled.div`
  text-align: center;
  padding: 10px 0 40px 0;
  @media (max-width: 992px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:98px;
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
		top: 30px;
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
const Bread = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 0px;
`

const ItemList = () => {
	return (
		<Layout>
			<Head
				title="商用不動產、頂級商辦焦點新聞 - 信義全球資產"
        description="即時提供商用不動產、土地買賣、商辦、廠辦大樓市場焦點新聞，讓您快速掌握投資、買賣商用不動產的絕佳時機。"
        url=""
			/>
			<Navbar />
			<NavHomeMobile />
			<Container>
      <SearchDiv>
				<HeadList search>
					<IptName className=''>
						<input className='form-control searchBar' type='text' placeholder='關鍵字...' />
					</IptName>
					<SearchButton>搜尋</SearchButton>
				</HeadList>
        {/* seo h1 */}
        <h1 className='zero'>商用不動產焦點新聞</h1>
			</SearchDiv>
      <MainContent>
        <Bread>
          <Breadcrumb data={[{title:"新聞" , link:"/newsList"}]} />
        </Bread>
        <BigTitle>
          <TitleImg src='/static/img/t2_job.png' />
        </BigTitle>
				<Content>
					<div className='row'>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
            <NewsBlock>
              <NewsCard />
              <MbNewsCard />
            </NewsBlock>
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
        </MainContent>
			</Container>
		</Layout>
	)
}

export default ItemList
