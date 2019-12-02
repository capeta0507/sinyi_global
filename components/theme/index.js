import React from 'react'
import styled from 'styled-components'
// import BigTitle from '../bigTitle'
import ThemeCard from './themeCard'

const MyJob = styled.div`
  background: #fff;
  @media (max-width: 768px){
    margin-top: 30px;
  }
`
const ThemeContainer = styled.div`
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

const BigTitle = styled.div`
  text-align: center;
  // padding: 60px 0;
  padding: 60px 0 40px 0;
  @media (max-width: 768px){
    padding: 20px 0 40px 0;
    padding-bottom: 20px;
  }
`
const Img = styled.img`
  width:25%;
  @media (max-width: 768px){
    width:60%;
  }
`
const Show = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
`

const BigJob = (props) => {
  return(
		<MyJob>
			<BigTitle>
        <Img src='/static/img/t2_job.png' />
      </BigTitle>
      <ThemeContainer>
        <Content>
          <ThemeCard title='小資獨立幸福首選' list1='小資獨立幸福首選小資獨立幸福首選' list2='小資獨立幸福首選小資獨立幸福' />
          <ThemeCard title='新手爸媽滿滿愛' list1='新手爸媽滿滿愛新手爸媽滿滿愛' list2='新手爸媽滿滿愛' />
          <ThemeCard title='銀髮樂活日式悠閒宅' list1='銀髮樂活日式悠閒宅' list2='銀髮樂活日式悠閒宅' />
          <ThemeCard title='銀髮樂活日式' list1='新手爸媽滿滿愛新手爸媽滿滿愛' list2='銀髮樂活日式悠閒宅' />
        </Content>
      </ThemeContainer>
      <Show>
        show all
      </Show>
		</MyJob>
  )
}

export default BigJob
