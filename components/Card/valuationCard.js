import React from 'react'
import { Col } from 'react-bootstrap'
import Link from 'next/link'
import styled from 'styled-components'

const ThemeCard = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px 0;
  background: -webkit-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: -o-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: -moz-linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background: linear-gradient(to bottom right,white 50%, #E5F7FF 50%);
  background-size: 100% 100%;
  box-shadow: 0 5px 5px rgba(0,0,0,.2);
  cursor: pointer;
  @media (max-width: 992px){
    position: relative;
    width: 100%;
    margin: 5px 0;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
  }
`
const Context = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 992px){
    width: 100%;
    display: flex;
  }
`
const SendButton = styled.div`
  width: 112px;
  margin: 0 auto;
  background: #00B1FF;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  cursor: pointer;
  box-shadow: 5px 5px #C7D1D6;
  @media (max-width: 992px){
    position: absolute;
    right: 40px;
    margin: 0;
    width: 70px;
    font-size: 12px;
    box-shadow: none;
    bottom: 15px;
  }
`
const MyPhone = styled.div`
  width: 70%;
  margin: 0 auto;
  & > h5{
    display: flex;
    font-size: 14px;
    color: #878787;
    font-weight: 400;
  }
`
const MakeYear = styled.h3`
  font-size: 28px;
  color: #000;
  margin-bottom: 20px;
  @media (max-width: 992px){
    font-size: 16px;
  }
`
const YearTitle = styled.h4`
  font-size: 20px;
  color: #000;
  margin-bottom: 0;
  @media (max-width: 992px){
    font-size: 16px;
  }
`
const YearsBlock = styled.div`
  display: block;
  @media (max-width: 992px){
    display: flex;
    padding-left: 75px;
  }
`

const MemberCard = (props) => {
  return(
		<ThemeCard className='text-center'>
      <Context>
        <div className='memberCard'>
          <div className="valuationImg">
            <img className="newsPhoto" src='/static/img/people.png' />
          </div>
        </div>
        <div className="recruitTitle titleBlock">
          <h2>{props.name}</h2>
        </div>
        <div className="memberList text-center">
          <MyPhone>
            <div className="recruitTitle navBlock">
              <h2>{props.name}</h2>
            </div>
          </MyPhone>
          <YearsBlock>
            <YearTitle>估價年資</YearTitle>
            <MakeYear>{props.years}</MakeYear>
          </YearsBlock>
          <SendButton>詳細介紹</SendButton>
        </div>
      </Context>
    </ThemeCard>
  )
}

export default MemberCard
