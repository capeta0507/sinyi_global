import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  width: 100%;
  margin: 30px 0;
  padding:0;
  cursor: pointer;
  transition: all .5s;
  display: block;
  &:hover {
    box-shadow: 0px 10px 10px rgba(0,0,0,0.2);
  }
  @media (max-width: 992px){
    display: none;
  }
`

const Img = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const Introduction = styled.div`
  padding:10px 20px;
  background:#fff;
`
const Date = styled.div`
  width: 100%;
  color: #B4B4B4;
  font-size: 16px;
  margin:10px 0;
`
const Title = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 20px;
  height: 70px;
  font-weight: bold;
`
const Content = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 15px;
  font-weight: 300;
  color: #5A5A5A;
  margin:10px 0 20px 0;
`

const NewsCard = () => {
  return(
    <Link href='/news'>
      <Card>
        <Img>
          <img src='/static/img/11-02607-005.jpg' />
        </Img>
        <Introduction>
          <Date>2019/03/02</Date>
          <Title>
            台北科技走廊最後一塊版圖 北士科土地交易發燙
          </Title>
          <Content>
            今年土地交易受惠於標售熱潮，各地重劃區土地單價創下歷年新高，信義全球資產統計上市櫃土地交易截至今年8月止，交易金額已遠遠超過2018年全年度，來到937億...
          </Content>
        </Introduction>
      </Card>
    </Link>
  )
}

export default NewsCard