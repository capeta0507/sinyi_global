import React, { Component } from 'react'
import styled from 'styled-components'

const BgIcon = styled.div`
  width: 100%;
  padding: 10px 0;
  background: #263843;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`
const BgIconList = styled.div`
  width: 100%;
  padding: 10px 0;
  // height: 200px;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`
const Icon = styled.div`
  width: 35px;
  & > img {
    width: 100%;
  }
`
const IconTwo = styled.div`
  width: 33px;
  & > img {
    width: 100%;
  }
`
const FooterList = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`
const FooterTag = styled.div`
  text-align: center;
  width: ${props => props.long ? '35%' : '32%'};
  margin: 10px 0;
  font-size: 15px;
`
const FooterIntTag = styled.div`
  text-align: center;
  width: ${props => props.long ? '35%' : '30%'};
  font-size: 15px;
  color: #B4B4B4;
`

const FooterTitle = styled.div`
  width:90%;
  margin:0 auto;
  // margin-bottom: 50px;
`
const Footer = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  & > h5 {
    font-weight: 400;
    margin: 15px 0;
  }
  & > h6 {
    color: #fff;
    font-size: 12px;
    margin: 5px 0;
  }
`
const BtnFooter = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  bottom:0;
  z-index: 5;
  cursor: pointer;
`
const BtnBottomItem = styled.div`
  width: 100%;
  font-size: 18px;
  text-align: center;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  padding: 10px 10px;
  display: flex;
  & > img {
    width: 15px;
    height: 15px;
    margin-top: 8px;
    margin-right: 5px;
  }
`
const FoundList = styled.div`
  font-size: 20px;
  color: #969696;
  border-bottom: 1px solid #E3E3E3;
  text-align: center;
  padding: 10px 0;
`
const PhoneCall = styled.div`
  font-size: 27px;
  color: #00B1FF;
  padding: 10px 0;
  border-bottom: 1px solid #E3E3E3;
  & > a {
    width: 100%;
    color: #00B1FF;
  }
`
const FastMessenger = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
` 
const IptName = styled.div`
  width: 100%;
  margin-top: 10px;
  @media (max-width: 992px){
    width: 100%;
  }
`
const BusCheck = styled.div`
  font-size: 12px;
    margin-top: 5px;
  & > a {
    color: #00B1FF;
  }
`
const SendButton = styled.div`
  width: 120px;
  padding: 8px;
  background: #00B1FF;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  cursor: pointer;
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
const ItemList = styled.div`
  margin-bottom: 0;
  color: #B4B4B4;
  z-index: 5;
  margin: 15px 0;
  & > div{
    margin: 15px 0;
    font-size: 13px;
    & > a {
      color: #B4B4B4;
    }
  }
`
const MsgBtn = styled.div`
  width: 20%;
  display: flex;
  margin: 0 auto;
  & > img {
    width: 15px;
    height: 15px;
    margin-top: 8px;
    margin-right: 5px;
  }
`
class MobileFooter extends Component {
  constructor(){
    super()
  }

  showDropdownMenu3 = (event) => {
    event.preventDefault();
    window.location.href='#message'
  }

  render(){
    return(
      <div className='mbFooter'>
        <BtnFooter>
          <BtnBottomItem className='footerOff' onClick={this.showDropdownMenu3}>
            <MsgBtn>
              <img src={`/static/img/messenger.png`} />
              留言
            </MsgBtn>
          </BtnBottomItem>
        </BtnFooter>
      </div>
    )
  }
  
}

export default MobileFooter
