import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  width: 100%;
  margin: 30px 0;
  padding:0;
  cursor: pointer;
  transition: all .5s;
  &:hover {
    box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
  }
`

const Img = styled.div`
  position: relative;
  width: 100%;
`
const Introduction = styled.div`
  padding:10px 20px;
  background:#fff;
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
`

const NewsCard = () => {
  return(
    <Link>
      <Card>
        <Img>
          <img src='/static/img/career1.jpg' />
        </Img>
        <Introduction>
          <Date>2019/03/02</Date>
          <Title>
            「我的我們次方」算出最大價值的幸福方程式 信義房屋攜手熱忱的你共創最大價值
          </Title>
          <Content>
            新世代職場趨勢中，雇主品牌的探究與要求往往是決定求職、就業與留任的關鍵參數。長期與年輕世代溝通雇主品牌價值，信義房屋
          </Content>
        </Introduction>
      </Card>
    </Link>
  )
}

export default NewsCard