import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import NavHomeMobile from '../components/nav/navHomeMobile'
import NewsCard from '../components/Card/newsCard'
import MbNewsCard from '../components/Card/mbnewsCard'
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
  @media (max-width: 768px){
    width: 25%;
  }
`
const Container = styled.div`
	width: 100%;
	background: #F1F1F1;
  padding: 0 0 100px 0;
  @media (max-width: 768px){
    padding: 10px 0 100px 0;
  }
`
const Content = styled.div`
	width: 80%;
	margin: 0 auto;
	@media (max-width: 768px){
		width: 90%;
	}
`
const NewsBlock = styled.div`
  width: 32%;
  margin: 0 5px;
  @media (max-width: 768px){
		width: 100%;
	}
`
const BigTitle = styled.div`
  text-align: center;
  padding: 60px 0 40px 0;
  @media (max-width: 768px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 768px){
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
  @media (max-width: 768px){
		top: 30px;
	}
`
const PageCircle = styled.div`
  width: 26px;
  height: 26px;
  cursor: pointer;
	background: #00B9FF;
  border: 1px solid #00B9FF;
`
const PageImg = styled.img`
  width: 12px;
  margin-top: -3px;
  margin-left: ${props => props.next ? '6px' : '9px'};
  @media (max-width: 768px){
    width: 12px;
    margin-top: 0px;
    margin-left: ${props => props.next ? '5px' : '8px'};
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
				<HeadList search>
					<IptName className=''>
						<input className='form-control' type='text' placeholder='關鍵字...' />
					</IptName>
					<SearchButton>搜尋</SearchButton>
				</HeadList>
			</SearchDiv>
			<Container>
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