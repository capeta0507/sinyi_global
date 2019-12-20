import React from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

const Introduction = styled.div`
  padding:10px 0px;
  background:#fff;
`
const Card = styled.div`
  width: 100%;
  margin: 30px 0;
  padding:0;
  cursor: pointer;
  transition: all .5s;
  background: #fff;
  // border-bottom: 1px solid grey;
  &:hover ${Introduction}{
    background: #E5F7FF;
  }
  @media (max-width: 992px){
    display: none;
  }
`
const Img = styled.div`
  position: relative;
  width: 100%;
`
const MainTitle = styled.div`
  justify-content: space-between;
  border-bottom: 2px solid #00B1FF;
  border-color: #00B1FF;
  margin: 20px 0;
  padding: 0 10px;
  display: flex;
`
const Monthly = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #00B1FF;
`
const Date = styled.div`
  /* width: 100%; */
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
  padding: 0 10px;
`
const Content = styled.div`
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
  padding: 0 10px;
`

const StudyCard = () => {
  return(
    <Card>
      <Img>
        <img src='/static/img/25358613_1553657854750443_452107410832652332_o.jpg' />
      </Img>
      <Introduction>
        <MainTitle>
          <Monthly>2019-10 月報</Monthly>
          <Date>2019/10/08</Date>
        </MainTitle>
        <Title>
          台商回流轉單效應 帶動建商投資工業用地
        </Title>
        <Content>
          觀察國際經濟情勢，隨著美中雙方加徵關稅範圍與金額逐漸擴大，主要國家出口多呈負成長表現，全球貿易動能降溫。在國內方面，儘管傳統產業景氣表現依舊疲弱，然適逢電子零組件產業旺季；營建業方面儘管面臨傳統民俗月影響...
        </Content>
      </Introduction>
    </Card>
  )
}

export default StudyCard