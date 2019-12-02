import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import StudyCard from '../components/Card/studyCard'

const StudyContainer = styled.div`
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

const StudyContent = styled.div`
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
const TitleImg = styled.img`
  width:25%;
  @media (max-width: 768px){
    width:60%;
  }
`
const Item = styled.div`
  width: 48%;
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


const StudyList = (props) => {
    return(
      <StudyContainer>
        <BigTitle>
          <TitleImg src='/static/img/t2_job.png' />
        </BigTitle>
        <Content>
          <StudyContent>
            <Item>
             <StudyCard />
            </Item>
            <Item>
             <StudyCard />
            </Item>
          </StudyContent>
          <BtnContent>
            <Show>
              show all
            </Show>
          </BtnContent>
        </Content>
      </StudyContainer>
    )
}

export default StudyList
