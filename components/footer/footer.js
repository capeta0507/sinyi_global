import React, { Component } from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

const Block = styled.div`
  display: block;
  @media (max-width: 768px){
    display: none;
  }
`
const FooterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const FooterList = styled.div`
  width: 12%;
`

const BgIcon = styled.div`
  width: 100%;
  padding: 0;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`

const Footer = styled.div`
  width: 100%;
  padding: 30px 0;
  color: #fff;
  text-align: center;
  background: #263843;
`

class MyFooter extends Component {
  constructor(){
    super()
    this.state = {
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: false,
    }
  }
  showDropdownMenu1 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu1: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  showDropdownMenu2 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu2: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  showDropdownMenu3 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu3: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  hideDropdownMenu = () => {
    this.setState({ displayMenu1: false,displayMenu2: false,displayMenu3: false}, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  render(){
    const coll01 = this.state.displayMenu1 ? 'drowActive' : 'drow' ;
    const coll02 = this.state.displayMenu2 ? 'drowActive' : 'drow' ;
    const coll03 = this.state.displayMenu3 ? 'drowActive' : 'drow' ;
    return(
      <Block>
        <BgIcon className='text-left'>
          <FooterContainer>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>主題特輯</span>
              </div>
              <h6>主題1</h6>
              <h6>主題2</h6>
              <h6>主題3</h6>
              <h6>主題4</h6>
              <h6>主題5</h6>
              <h6>主題6</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>買賣</span>
              </div>
              <h6>辦公</h6>
              <h6>店面</h6>
              <h6>廠房</h6>
              <h6>土地</h6>
              <h6>其他</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>租賃</span>
              </div>
              <h6>辦公</h6>
              <h6>店面</h6>
              <h6>土地</h6>
              <h6>其他</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>標售</span>
              </div>
              <h6>服務與實續</h6>
              <h6>標案1</h6>
              <h6>標案2</h6>
              <h6>標案3</h6>
              <div className="footerTitle">
                <span>新聞與研究</span>
              </div>
              <h6>焦點新聞</h6>
              <h6>季報</h6>
              <h6>月報</h6>
              <h6>電子報</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>團隊介紹</span>
              </div>
              <h6>總經理</h6>
              <h6>商仲一部</h6>
              <h6>商仲二部</h6>
              <h6>投資一部</h6>
              <h6>工業地產部</h6>
              <h6>顧問服務團隊</h6>
              <h6>估價師團隊</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>關於全球</span>
              </div>
              <h6>公司簡介</h6>
              <h6>加入我們</h6>
              <h6>服務據點</h6>
            </FooterList>
            <FooterList className="iconList">
              <div className="footerTitle">
                <span>集團與社會責任</span>
              </div>
              <h6><a href='https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_aboutsinyi' target="_blank">了解信義</a></h6>
              <h6>
                <span className='flex' onClick={this.showDropdownMenu1}>
                  投資人專區
                  <div className={`drowLeft1 ${coll01}`}></div>
                </span>
                {
                  this.state.displayMenu1 ? (
                    <ul className="footerList showblock">
                      <li><a href='https://www.sinyi.com.tw/investors/investors-ch_mainpage' target="_blank">投資人專區</a></li>
                      <li><a href='https://www.sinyi.com.tw/investors/investors-en_mainpage-en' target="_blank">investor relations</a></li>
                    </ul>
                  ) : (
                    null
                  )
                }
              </h6>
              <h6>
                <span className='flex' onClick={this.showDropdownMenu2}>
                    企業社會責任<div className={`drowLeft2 ${coll02}`}></div>
                </span>
                {
                  this.state.displayMenu2 ? (
                    <ul className="footerList showblock">
                      <li><a href='https://csr.sinyi.com.tw/' target="_blank">企業社會責任</a></li>
                      <li><a href='https://www.sinyicharity.org.tw/' target="_blank">信義公益基金會</a></li>
                      <li><a href='https://www.sinyischool.org.tw/' target="_blank">信義學堂</a></li>
                      <li><a href='https://www.taiwan4718.tw/' target="_blank">社區一家</a></li>
                    </ul>
                  ) : (
                    null
                  )
                }
                
              </h6>
              <h6>
                <span className='flex' onClick={this.showDropdownMenu3}>
                    集團企業<div className={`drowLeft3 ${coll03}`}></div>
                </span>
                {
                  this.state.displayMenu3 ? (
                    <ul className="footerList showblock">
                      <li><a href='https://csr.sinyi.com.tw/' target="_blank">信義房屋</a></li>
                      <li><a href='https://living.sinyi.com.tw/' target="_blank">信義居家</a></li>
                      <li><a href='https://www.sinyi-rema.com.tw/' target="_blank">信義代銷</a></li>
                      <li><a href='https://www.xinyikf.com.tw/' target="_blank">信義開發</a></li>
                      <li><a href='https://app.sinyi.com.tw/' target="_blank">信義鑑定</a></li>
                      <li><a href='https://www.an-sin.com.tw/' target="_blank">安信建經</a></li>
                      <li><a href='https://www.sinyijapan.com/tw/' target="_blank">東京信義</a></li>
                      <li><a href='https://malaysia.sinyi.com.tw/' target="_blank">信義大馬</a></li>
                      <li><a href='http://www.sinyi.com.cn/' target="_blank">中國信義</a></li>
                      <li><a href='http://www.sinyizy.com/' target="_blank">信義置業</a></li>
                    </ul>
                  ) : (
                    null
                  )
                }
                
              </h6>
            </FooterList>
          </FooterContainer>
        </BgIcon>
        <Footer className='footer'>
          信義全球資產管理股份有限公司 &copy;2019 SINYI GLOBAL.版權所有
        </Footer>
      </Block>
    )
  }
}

export default MyFooter
