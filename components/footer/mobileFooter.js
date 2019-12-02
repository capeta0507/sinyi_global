import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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
const People = styled.div`
  width: 23px;
  margin-left: 8px;
  margin-right: 8px;
  & > img {
    width: 100%;
  }
`

const FooterTitle = styled.div`
  width:90%;
  margin:0 auto;
  margin-bottom: 50px;
`
const Title = styled.div`
  text-align: left;
  padding: 20px 10px;
  border-bottom: 1px solid #01AB59;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & > img {
    width: 100%;
  }
`
const Drow = styled.div`
  width: 10px;
  & > img {
    width: 100%;
  }
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
    color: rgba(255, 255, 255, 0.4);
    margin: 20px 0;
  }
`
const FooterLogo = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  & > img {
    width: 100%;
  }
`
const BtnFooter = styled.div`
  width: 100%;
  display: flex;
  background: #263843;
  position: fixed;
  bottom:0;
  z-index: 1;
`
const DrowDown = styled.ul`
  padding:0px 10px;
`
const DownItem = styled.li`
  padding: 10px 0;
  color: #D2D2D2;
  text-align: left;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  & > a{
    color: #D2D2D2 !important;
  }
`
const Button = styled.div`
  width: 60%;
  text-align: center;
  cursor: pointer;
  color: #fff;
  padding:15px 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  & > img {
    width: 20%;
  }
`
const Button2 = styled.div`
  width: 40%;
  text-align: center;
  cursor: pointer;
  color: #fff;
  padding:15px;
  font-size: 18px;
  display: flex;
  // justify-content: space-between;
  & > img {
    width: 20%;
  }
`
const BtnFix = styled.div`
  margin-top: 40px;
`

class MobileFooter extends Component {
  constructor(){
    super()
    this.state = {
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: false,
      displayMenu4: false,
      displayMenu5: false,
    }
  }
  showDropdownMenu1 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu1: !this.state.displayMenu1 });
  }
  showDropdownMenu2 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu2: !this.state.displayMenu2 });
  }
  showDropdownMenu3 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu3: !this.state.displayMenu3 });
  }
  showDropdownMenu4 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu4: !this.state.displayMenu4 });
  }
  showDropdownMenu5 = (event) => {
    event.preventDefault();
    this.setState({ displayMenu5: !this.state.displayMenu5 });
  }

  render(){
    const coll01 = this.state.displayMenu1 ? 'arrowup' : 'arrow' ;
    const coll02 = this.state.displayMenu2 ? 'arrowup' : 'arrow' ;
    const coll03 = this.state.displayMenu3 ? 'arrowup' : 'arrow' ;
    const coll04 = this.state.displayMenu4 ? 'arrowup' : 'arrow' ;
    const coll05 = this.state.displayMenu5 ? 'arrowup' : 'arrow' ;
    return(
      <div className='mbFooter'>
        <BgIconList>
          <FooterTitle>
            <Title onClick={this.showDropdownMenu1}>
              人才招募
              <Drow>
                <img src={`static/img/${coll01}.png`} alt="" />
              </Drow>
            </Title>
            {
              this.state.displayMenu1 ? (
              <DrowDown>
                <DownItem>
                  <Link href='/newsList'>業務菁英專區</Link>
                </DownItem>
                {/* <DownItem>
                  校園種子計畫
                </DownItem>
                <DownItem>
                 幸福信義人
                </DownItem> */}
                <DownItem>
                  認識信義
                </DownItem>
                <DownItem>
                 集團職缺
                </DownItem>
              </DrowDown>
              ) : (
                null
              )
            }
            <Title onClick={this.showDropdownMenu2}>
              關於我們
              <Drow>
                <img src={`static/img/${coll02}.png`} alt="" />
              </Drow>
            </Title>
            {
              this.state.displayMenu2 ? (
              <DrowDown>
                <DownItem>
                  <a href='https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_aboutsinyi' target="_blank">了解信義</a>
                </DownItem>
                {/* 投資人 */}
                <DownItem onClick={this.showDropdownMenu4}>
                  <a href='https://www.sinyi.com.tw/investors/investors-ch_mainpage' target="_blank">投資人專區</a>
                  <Drow>
                    <img src={`static/img/${coll04}.png`} alt="" />
                  </Drow>
                </DownItem>
                {
                  this.state.displayMenu4 ? (
                  <DrowDown>
                    <DownItem>
                      <a href='https://www.sinyi.com.tw/investors/investors-en_mainpage-en' target="_blank">investor relations</a>
                    </DownItem>
                    <DownItem>
                      <a href='https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_stakeholder'>利害關係人專區</a>
                    </DownItem>
                  </DrowDown>
                  ) : (
                    null
                  )
                }
                {/* 企業專區 */}
                <DownItem onClick={this.showDropdownMenu5}>
                  企業社會責任專區
                  <Drow>
                    <img src={`static/img/${coll05}.png`} alt="" />
                  </Drow>
                </DownItem>
                {
                  this.state.displayMenu5 ? (
                    <DrowDown>
                      <DownItem>
                        <a href='https://csr.sinyi.com.tw/' target="_blank">企業社會責任</a>
                      </DownItem>
                      <DownItem>
                        <a href='https://www.sinyicharity.org.tw/' target="_blank">信義公益基金會</a>
                      </DownItem>
                      <DownItem>
                        <a href='https://www.sinyischool.org.tw/' target="_blank">信義學堂</a>
                      </DownItem>
                      <DownItem>
                        <a href='https://www.taiwan4718.tw/' target="_blank">社區一家</a>
                      </DownItem>
                    </DrowDown>
                  ) : (
                    null
                  )
                }
                
              </DrowDown>
              ) : (
                null
              )
            }
            <Title onClick={this.showDropdownMenu3}>
              關係企業
              <Drow>
                <img src={`static/img/${coll03}.png`} alt="" />
              </Drow>
            </Title>
            {
              this.state.displayMenu3 ? (
              <DrowDown>
                <DownItem>
                  <a href='https://living.sinyi.com.tw/' target="_blank">信義居家</a>
                </DownItem>
                <DownItem>
                  <a href='https://www.sinyi-rema.com.tw/' target="_blank">信義代銷</a>
                </DownItem>
                <DownItem>
                  <a href='https://www.xinyikf.com.tw/' target="_blank">信義開發</a>
                </DownItem>
                <DownItem>
                  <a href='http://www.sinyiglobal.com/' target="_blank">信義全球資產</a>
                </DownItem>
                <DownItem>
                  <a href='https://app.sinyi.com.tw/' target="_blank">信義鑑定</a>
                </DownItem>
                <DownItem>
                  <a href='https://www.sinyijapan.com/tw/' target="_blank">東京信義</a>
                </DownItem>
                <DownItem>
                  <a href='https://malaysia.sinyi.com.tw/' target="_blank">大馬信義</a>
                </DownItem>
                <DownItem>
                  <a href='http://www.sinyi.com.cn/' target="_blank">中國信義</a>
                </DownItem>
                <DownItem>
                  <a href='http://www.sinyizy.com/' target="_blank">信義置業</a>
                </DownItem>
                <DownItem>
                  <a href='https://www.an-sin.com.tw/' target="_blank">安倍建經</a>
                </DownItem>
              </DrowDown>
              ) : (
                null
              )
            }
          </FooterTitle>
        </BgIconList>
        <BgIcon>
          <Footer>
            <FooterLogo>
              <img src="static/img/logo.png" alt="" />
            </FooterLogo>
            <h5>招募專線 0800-093-688</h5>
            <h5>傳真專線 02-2722-6629</h5>
            <h5>電子郵件 hr@sinyi.com.tw</h5>
            <h5>110 台北市信義區信義路五段110號</h5>
            <h6>&copy;2019 信義房屋股份有限公司 版權所有</h6>
          </Footer>
        </BgIcon>
        <BtnFooter>
          <Button>
            <Icon>
              <img src='/static/img/icon_messenger.png' />
            </Icon>
            <Icon>
              <img src='/static/img/icon_fb.png' />
            </Icon>
            <IconTwo>
              <img src='/static/img/icon_ig.png' />
            </IconTwo>
          </Button>
        </BtnFooter>
      </div>
    )
  }
  
}

export default MobileFooter
