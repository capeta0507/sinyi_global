import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import StudyCard from '../components/Card/studyCard'
import MbStudyCard from '../components/Card/mbstudyCard'
import StudyMonthCard from '../components/Card/studyMonthCard'
import MbStudyMonthCard from '../components/Card/mbstudyMonthCard'

const StudyContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 80px;
  @media (max-width: 992px){
    width: 100%;
    margin-bottom: 10px;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const StudyContent = styled.div`
  display: flex;
  margin: 30px 0 0 0;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 992px){
    margin: 10px 10px;
  }
`
const BigTitle = styled.div`
  text-align: center;
  padding: 40px 0 0px 0;
  @media (max-width: 992px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const TitleImg = styled.img`
  width:112px;
  @media (max-width: 992px){
    width:112px;
  }
`
const Item = styled.div`
  width: 48%;
  font-size: 20px;
  @media (max-width: 992px){
    width:100%;
  }
`
const BtnContent = styled.div`
  width:100%;
  text-align: center;
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
const Hr = styled.hr`
  width: 100%;
  margin: 0 auto;
  border: 1px solid #969696;
`


const StudyList = (props) => {
    return(
      <StudyContainer>
        <BigTitle>
          <TitleImg src='/static/img/t3_video.png' />
        </BigTitle>
        <Content>
          <StudyContent>
            <Item>
             <StudyCard />
             <MbStudyCard />
            </Item>
            <Item>
             <StudyMonthCard />
             <MbStudyMonthCard />
            </Item>
          </StudyContent>
          <BtnContent>
            <Show>
              <img src='/static/img/show_all.png' />
            </Show>
          </BtnContent>
        </Content>
      </StudyContainer>
    )
}

export default StudyList
