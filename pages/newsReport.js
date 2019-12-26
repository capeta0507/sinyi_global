import React from 'react'
import styled from 'styled-components'
import Head from '../components/head'
import Layout from '../components/layout'
import Navbar from '../components/nav/navBar'
import Breadcrumb from '../components/breadcrumb'
import NavHomeMobile from '../components/nav/navHomeMobile'
import StudyCard from '../components/Card/studyCard'
import Link from 'next/link'
import MbStudyCard from '../components/Card/mbstudyCard'
import '../style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchDiv = styled.div`
	background: #566A77;
	width: 100%;
	padding: 130px 0 1px 0;
	@media (max-width: 992px){
		padding: 80px 0 10px 0;
  }
`
const HeadTag = styled.div`
	display: flex;
	margin: 0 auto;
	width: 40%;
  text-align: center;
  font-size: 28px;
  padding-top: 30px;
	@media (max-width: 992px){
    width: 90%;
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
const NewsBlock = styled.div`
  width: 32%;
  margin: 0 5px;
  @media (max-width: 992px){
		width: 100%;
	}
`
const BigTitle = styled.div`
  text-align: center;
  padding: 60px 0 40px 0;
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
  padding-top: 10px; 
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

const ItemList = () => {
	return (
		<Layout>
			<Head
				title="商用不動產、商辦市場季報分析－信義全球資產"
        description="信義全球資產季報，北市辦公市場專業季度市場趨勢報告，提供總體經濟、投資市場、租賃市場分析，及未來市場展望。"
        url=""
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
        {/* seo h1 */}
        <h1 className='zero'>商用不動產季報</h1>
			</SearchDiv>
			<Container>
        <Bread>
          <Breadcrumb data={[{title:"季報" , link:"/newsList"}]}/>       
        </Bread>
        <HeadTag>
          <Link href='/report'>
            <div className='reportBuy tagActive'>
              季報
              <img className='makeBorder' src='/static/img/navborder.png' />
            </div>
          </Link>          
          <Link href='/reportMonth'>
            <div className='reportBuy'>
              月報
              <img className='makeBorder' src='/static/img/navborder_grey.png' />
            </div>
          </Link>
				</HeadTag>
				<Content>
					<div className='row'>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
            <NewsBlock>
              <StudyCard />
              <MbStudyCard />
            </NewsBlock>
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
		</Layout>
	)
}

export default ItemList
