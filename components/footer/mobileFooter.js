import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Select from 'react-select'


// const Block = styled.div`
//   display: none;
//   @media (max-width: 768px){
//     display: bolck;
//   }
// `

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
  height: 200px;
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
  width: ${props => props.long ? '35%' : '30%'};
  margin: 10px 0;
  font-size: 15px;
`

const FooterTitle = styled.div`
  width:90%;
  margin:0 auto;
  margin-bottom: 50px;
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
  z-index: 1;
  cursor: pointer;
`
const BtnBottomItem = styled.div`
  width: 35%;
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
  @media (max-width: 768px){
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
class MobileFooter extends Component {
  constructor(){
    super()
    
  }

  render(){
    return(
      <div className='mbFooter'>
        <BgIconList>
          <FooterTitle>
            <FooterList>
              <FooterTag className='textCenter'>主題特輯</FooterTag>
              <FooterTag className='textCenter'>買賣</FooterTag>
              <FooterTag className='textCenter'>租賃</FooterTag>
            </FooterList>
            <FooterList>
              <FooterTag className='textCenter'>標售</FooterTag>
              <FooterTag className='textCenter'>新聞與研究</FooterTag>
              <FooterTag className='textCenter'>團隊介紹</FooterTag>
            </FooterList>
            <FooterList>
              <FooterTag className='textCenter'>關於全球</FooterTag>
              <FooterTag long className='textCenter'>集團與社會責任</FooterTag>
              <FooterTag>&nbsp;</FooterTag>
            </FooterList>
          </FooterTitle>
        </BgIconList>
        <BgIcon>
          <Footer>
            <h6>信義全球資產管理股份有限公司</h6>
            <h6>&copy;2019 信義房屋股份有限公司 版權所有</h6>
          </Footer>
        </BgIcon>
        <div className='footerDownList footerDown'>
          <FoundList>辦公</FoundList>
          <FoundList>店面</FoundList>
          <FoundList>廠房</FoundList>
          <FoundList>土地</FoundList>
          <FoundList>其它</FoundList>
        </div>
        <div className='footerDownList footerDown'>
          <PhoneCall><a href='tel: 02 5468 2596'>02-5468-2596</a></PhoneCall>
        </div>
        <div className='footerDownList footerDown'>
          <FastMessenger>
            <IptName className=''>
              <Select 
                placeholder="買屋"
                label='Single select'
                theme={theme => ({
                  ...theme,
                  borderRadius: 5,
                })}
              />
            </IptName>
            <IptName className=''>
              <input className='form-control' type='text' placeholder='姓名(必填)' />
            </IptName>
            <IptName className=''>
              <input className='form-control' type='text' placeholder='聯絡電話(必填)' />
            </IptName>
            <IptName className=''>
              <input className='form-control' type='text' placeholder='電子郵件(必填)' />
            </IptName>
            <IptName className=''>
              <Select 
                placeholder="縣市/行政區"
                label='Single select'
                theme={theme => ({
                  ...theme,
                  borderRadius: 5,
                })}
              />
            </IptName>
            <IptName className=''>
              <input className='form-control' type='text' placeholder='路段(必填)' />
            </IptName>
            <BusCheck>
              <input type="checkbox" /> 送出資料前，請點選同意本站<a href=''>隱私權政策</a>
            </BusCheck>
            <SendButton>送出</SendButton>
          </FastMessenger>
        </div>
        <BtnFooter>
          <BtnBottomItem className='footerOff'>
            <img src='/static/img/found.png' />
            查找物件
          </BtnBottomItem>
          <BtnBottomItem className='footerOff'>
          <img src='/static/img/phone.png' />
          撥打電話
          </BtnBottomItem>
          <BtnBottomItem className='footerOff'>
          <img src='/static/img/messenger.png' />
          快速留言
          </BtnBottomItem>
        </BtnFooter>
      </div>
    )
  }
  
}

export default MobileFooter
