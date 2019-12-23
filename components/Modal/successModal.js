import React from 'react'
import styled from 'styled-components'
import Backdrop from './backdrop'
import { Table } from 'react-bootstrap'

const CloseButton = styled.div`
  width: 170px;
  padding: 7px;
  text-align: center;
  color: #fff;
  font-size: 21px;
  margin: 0 auto;
  background: -webkit-linear-gradient(#00B1FF,#2B6ED2);
  background: -o-linear-gradient(#00B1FF,#2B6ED2);
  background: -moz-linear-gradient(#00B1FF,#2B6ED2);
  background: linear-gradient(#00B1FF,#2B6ED2);
  cursor: pointer;
`
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  height: 300px;
  overflow: hidden;
  overflow-y: scroll;
  @media (max-width: 992px){
    width: 100%;
    margin-top: 50px;
  }
`
const Title = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  & > h1{
    font-size: 26px;
    color: #000;
  }
`


const SuccessModal = (props) => {
  // console.log(props.show)
  return (
    <React.Fragment>
      <Backdrop show={props.show} close={props.close} />
      <div className='sendMsg'
        style={{
          display: props.show ? 'block' : 'none'
        }}
      >
        <Title>
          <h1>已收到您的來訊</h1>
          <h1>我們會盡快與您聯絡 !</h1> 
        </Title>
        <CloseButton onClick={props.close}>繼續看屋</CloseButton>
      </div>
    </React.Fragment>

  )
}

export default SuccessModal