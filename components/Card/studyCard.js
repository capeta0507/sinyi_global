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
  border-bottom: 1px solid grey;
  &:hover ${Introduction}{
    background: #E5F7FF;
  }
  @media (max-width: 768px){
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
          <Monthly>2019-Q3 季報</Monthly>
          <Date>2019/10/21</Date>
        </MainTitle>
        <Title>
          自用、投資方需求穩定 商辦市場迎來美好時刻
        </Title>
        <Content>
          本季北市商辦價格持續走穩，平均售價維持在84.7萬元，毛租金資本化率維持在2.51%。其中租賃市場優於買賣市場，受惠於信義計畫區租金行情持續創新高，頂級辦公持續拉高平均租金，Ｑ3平均租金上漲至2,280元，空置...
        </Content>
      </Introduction>
    </Card>
  )
}

export default StudyCard