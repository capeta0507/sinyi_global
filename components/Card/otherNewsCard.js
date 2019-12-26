import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  width: 100%;
  margin: 10px 0;
  padding:0;
  cursor: pointer;
  transition: all .5s;
  display: flex;
  @media (max-width: 992px){
    display: flex;
    box-shadow: 0 5px 5px rgba(0,0,0,.2);
    justify-content: flex-end;
  }
`

const Img = styled.div`
  position: relative;
  width: 50%;
  height: 250px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 992px){
    width: 30%;
    height: auto;
  }
`
const Introduction = styled.div`
  padding:10px 20px;
  background:#fff;
  width: 50%;
`
const NewsDate = styled.div`
  width: 100%;
  color: #B4B4B4;
  font-size: 12px;
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
  // height: 47px;
  font-weight: bold;
  color: #000;
  @media (max-width: 992px){
    font-size: 14px;
  }
`
const Content = styled.div`
  overflow:hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 16px;
  font-weight: 300;
  color: #5A5A5A;
  margin:10px 0 20px 0;
`

const MbNewsCard = () => {
  return(
    <Link>
      <Card>
        {/* 桌機板 */}
        <Img className='getMbnone'>
          <img src='/static/img/11-02607-005.jpg' />
        </Img>
        <Introduction className='getMbnone'>
          <NewsDate>2019/03/02</NewsDate>
          <Title>
            Q2買方信心轉強 辦公需求穩定成長 供給持續緊縮
          </Title>
          <Content>
            台北市商辦市場需求搶手，大型企業積極投入商用不動產，純辦大樓交易量飆升，頂級商辦租金日趨上升，鄰近信義計畫區的A辦租金...
          </Content>

        </Introduction>
        {/* 手機板 */}
        <Introduction className='navBlock'>
          <Title>
            Q2買方信心轉強 辦公需求穩定成長 供給持續緊縮
          </Title>
          <NewsDate>2019/03/02</NewsDate>
        </Introduction>
        <Img className='navBlock'>
          <img src='/static/img/11-02607-005.jpg' />
        </Img>
      </Card>
    </Link>
  )
}

export default MbNewsCard