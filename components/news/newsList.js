import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import NewsCard from '../Card/newsCard'

const NewsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 80px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  flex-wrap: wrap;
`

const NewsContent = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px){
    margin: 10px 10px;
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
const MainNews = styled.div`
  width: 90%;
  display: flex;
  margin: 30px auto;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px){
    margin: 10px 10px;
  }
`
const TitleImg = styled.img`
  width:25%;
  @media (max-width: 768px){
    width:60%;
  }
`
const Img = styled.div`
  position: relative;
  width: 45%;
`
const Introduction = styled.div`
  padding:10px 20px;
  background:#fff;
  width: 45%;
`
const Date = styled.div`
  width: 100%;
  color: #B4B4B4;
  font-size: 20px;
  margin:10px 0;
`
const Title = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 24px;
  font-weight: bold;
`
const NewsSub = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 18px;
  font-weight: 300;
  color: #5A5A5A;
  margin:10px 0 20px 0;
`
const Other = styled.div`
  width: 32%;
  font-size: 20px;
  @media (max-width: 768px){
    width:100%;
  }
`
const BtnContent = styled.div`
  width:100%;
  text-align: center;
  padding: 20px 0 60px 0;
`
const Show = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
`
const Hr = styled.hr`
  width: 100%;
  margin: 0 auto;
  border: 1px solid #969696;
`


const NewsList = (props) => {
    return(
      <NewsContainer>
        <BigTitle>
          <TitleImg src='/static/img/t2_job.png' />
        </BigTitle>
        <Content>
          <MainNews>
            <Img>
              <img src='/static/img/career1.jpg' />
            </Img>
            <Introduction>
              <Date>2019/03/02</Date>
              <Title>
                「我的我們次方」算出最大價值的幸福方程式 信義房屋攜手熱忱的你共創最大價值
              </Title>
              <NewsSub>
                新世代職場趨勢中，雇主品牌的探究與要求往往是決定求職、就業與留任的關鍵參數。長期與年輕世代溝通雇主品牌價值，信義房屋
              </NewsSub>
            </Introduction>
          </MainNews>
          <Hr />
          <NewsContent>
            <Other>
             <NewsCard />
            </Other>
            <Other>
             <NewsCard />
            </Other>
            <Other>
             <NewsCard />
            </Other>
          </NewsContent>
          <BtnContent>
            <Show>
              show all
            </Show>
          </BtnContent>
        </Content>
      </NewsContainer>
    )
}

export default NewsList
