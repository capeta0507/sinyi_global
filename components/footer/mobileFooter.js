import React, { Component,useContext } from 'react'
// import UserContext from '../UserContext';  //要import react useContext

import styled from 'styled-components'
import Link from 'next/link'
import Select from 'react-select'
import ProvicyModal from '../Modal/privacyModal'
import ServiceModal from '../Modal/serviceModal'
import SuccessModal from '../Modal/successModal'


// const Block = styled.div`
//   display: none;
//   @media (max-width: 992px){
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
  z-index: 1;
  cursor: pointer;
`
const BtnBottomItem = styled.div`
  width: 35%;
  font-size: 18px;
  text-align: center;
  border-left: ${props => props.side ? '' : '2px solid #fff'};
  border-right: ${props => props.side ? '' : '2px solid #fff'};
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
class MobileFooter extends Component {
  // static contextType = UserContext

  constructor(props){
    super(props)
    this.state = {
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: false,
      displayAll: false,
      bid: false,
      bidlistElement:null
    }


    
  }
  componentDidMount() {
    const context = this.context
    this.data = context.bidlist

    var bidlistElement = this.data && this.data.items ? this.data.items.map((item , index)=>(
      <div><a href={`/bid?id=${item.id}`}>{item.title}</a></div>
    )): null
    this.setState({bidlistElement : bidlistElement})
    // console.log(context) // 
    
  }

  showDropdownMenu1 = (event) => {
    event.preventDefault();
    this.setState({ 
      displayMenu1: !this.state.displayMenu1,
      displayMenu2: false,
      displayMenu3: false
     });
  }
  showDropdownMenu2 = (event) => {
    event.preventDefault();
    this.setState({ 
      displayMenu1: false,
      displayMenu2: !this.state.displayMenu2,
      displayMenu3: false
     });
  }
  showDropdownMenu3 = (event) => {
    event.preventDefault();
    this.setState({ 
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: !this.state.displayMenu3
     });
  }
  showAllMenu = (event) => {
    event.preventDefault();
    this.setState({ 
      displayMenu1: false,
      displayMenu2: false,
      displayMenu3: false,
      displayAll: !this.state.displayAll
     });
  }

  showProvicy = () => {
    this.setState({ displayProvicy: true });
  }
  closeProvicy = () => {
    this.setState({ displayProvicy: false });
  }
  showService = () => {
    this.setState({ displayService: true });
  }
  closeService = () => {
    this.setState({ displayService: false });
  }
  sendMessenger = () => {
    this.setState({ displaySend: true });
  }
  closeMessenger = () => {
    this.setState({ displaySend: false });
  }

  render(){
    const coll01 = this.state.displayMenu1 ? 'footerOn' : 'footerOff' ;
    const coll02 = this.state.displayMenu2 ? 'footerOn' : 'footerOff' ;
    const coll03 = this.state.displayMenu3 ? 'footerOn' : 'footerOff' ;
    const icon01 = this.state.displayMenu1 ? 'searchActive' : 'found' ;
    const icon02 = this.state.displayMenu2 ? 'telephoneActive' : 'phone' ;
    const icon03 = this.state.displayMenu3 ? 'chatActive' : 'messenger' ;
    const showAllList = this.state.displayAll ? 'hideClose' : 'show_all';
    return(
      <div className='mbFooter'>
        <BgIconList>
          <FooterTitle>
          <Show onClick={this.showAllMenu}>
            <img src={`/static/img/${showAllList}.png`} />
          </Show>
          {
            this.state.displayAll ? (
              <React.Fragment>
                <FooterList>
                  {/* <FooterTag className='textCenter2'>主題特輯</FooterTag> */}
                  <FooterTag className='textCenter2'>
                    買賣
                    <ItemList>
                      <div><a href='/buy'>辦公</a></div>
                      <div><a href='/buy'>店面</a></div>
                      <div><a href='/buy'>廠房</a></div>
                      <div><a href='/buy'>土地</a></div>
                      <div><a href='/buy'>其他</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    租賃
                    <ItemList>
                      <div><a href='/rent'>辦公</a></div>
                      <div><a href='/rent'>店面</a></div>
                      <div><a href='/rent'>廠房</a></div>
                      <div><a href='/rent'>土地</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    標售
                    <ItemList>
                      <div><a href='/about#bid'>服務與實績</a></div>
                      {
                        <React.Fragment>
                        {this.state.bidlistElement}
                        </React.Fragment>
                      }
                    </ItemList>
                  </FooterTag>
                </FooterList>
                <FooterList>
                  {/* <FooterTag className='textCenter2'>
                    標售
                    <ItemList>
                      <div><a href='/about#bid'>服務與實績</a></div>
                      <div><a href='/bid'>標案1</a></div>
                      <div><a href='/bid'>標案2</a></div>
                      <div><a href='/bid'>標案3</a></div>
                    </ItemList>
                  </FooterTag> */}
                  <FooterTag className='textCenter2'>
                    新聞與研究
                    <ItemList>
                      <div><a href='/newsList'>焦點新聞</a></div>
                      <div><a href='/reports'>季報</a></div>
                      <div><a href='/reports?type=2'>月報</a></div>
                      {/* <div>電子報</div> */}
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    關於全球
                    <ItemList>
                      <div>公司簡介</div>
                      <div>加入我們</div>
                      <div><a href='/service'>服務據點</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag>&nbsp;</FooterTag>
                </FooterList>
                <FooterList>
                  <FooterTag className='textCenter2'>
                    &nbsp;
                    <ItemList>
                      <div><a href='/team_manager'>總經理</a></div>
                      <div><a href='/team_BusinessOne'>商仲一部</a></div>
                      <div><a href='/team_BusinessTwo'>商仲二部</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    團隊介紹
                    <ItemList>
                      <div><a href='/team_investmentOne'>投資一部</a></div>
                      <div><a href='/team_investmentTwo'>投資二部</a></div>
                      <div><a href='/team_industry'>工業地產部</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    &nbsp;
                    <ItemList>
                      <div><a href='/team_Consultant'>顧問服務團隊</a></div>
                      <div><a href='/team_valuation'>估價師團隊</a></div>
                    </ItemList>
                  </FooterTag>
                </FooterList>
                <FooterList>
                  <FooterTag long className='textCenter2'>
                    &nbsp;
                    <ItemList>
                      <div><a href='https://www.sinyi.com.tw/aboutsinyi/aboutsinyi_aboutsinyi' target="_blank">了解信義</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag long className='textCenter2'>
                    集團與社會責任
                    <ItemList>
                      <div><a href='https://hr.sinyi.com.tw/' target="_blank">人才招募</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag long className='textCenter2'>
                    &nbsp;
                  </FooterTag>
                </FooterList>
                <FooterList>
                  <FooterTag className='textCenter2'>
                    投資人專區
                    <ItemList>
                      <div><a href='https://www.sinyi.com.tw/investors/investors-ch_mainpage' target="_blank">投資人專區</a></div>
                      <div><a href='https://www.sinyi.com.tw/investors/investors-en_mainpage-en' target="_blank">investor relations</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    企業社會責任
                    <ItemList>
                      <div><a href='https://csr.sinyi.com.tw/' target="_blank">企業社會責任</a></div>
                      <div><a href='https://www.sinyicharity.org.tw/' target="_blank">信義公益基金會</a></div>
                      <div><a href='https://www.sinyischool.org.tw/' target="_blank">信義學堂</a></div>
                      <div><a href='https://www.taiwan4718.tw/' target="_blank">社區一家</a></div>
                    </ItemList>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    集團企業
                    <ItemList>
                      <div><a href='https://www.sinyi.com.tw/' target="_blank">信義房屋</a></div>
                      <div><a href='https://living.sinyi.com.tw/' target="_blank">信義居家</a></div>
                      <div><a href='https://www.sinyi-rema.com.tw/' target="_blank">信義代銷</a></div>
                      <div><a href='https://www.xinyikf.sinyi.com.tw/' target="_blank">信義開發</a></div>
                      <div><a href='https://app.sinyi.com.tw/' target="_blank">信義鑑定</a></div>
                      <div><a href='https://www.an-sin.com.tw/' target="_blank">安信建經</a></div>
                      <div><a href='https://www.sinyijapan.com.tw/' target="_blank">東京信義</a></div>
                      <div><a href='https://malaysia.sinyi.com.tw/' target="_blank">信義大馬</a></div>
                      <div><a href='https://www.sinyi.com.cn/' target="_blank">中國信義</a></div>
                      <div><a href='https://www.sinyizy.com/' target="_blank">信義置業</a></div>
                    </ItemList>
                  </FooterTag>
                </FooterList>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <FooterList>
                  {/* <FooterTag className='textCenter2'>主題特輯</FooterTag> */}
                  <FooterTag className='textCenter2'>
                    <a className='mylink' href='/sell'>買賣</a>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                  <a className='mylink' href='/item'> 租賃</a>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    <a className='mylink' href='/bid'>標售</a>
                  </FooterTag>
                </FooterList>
                <FooterList>
                  {/* <FooterTag className='textCenter2'>
                    <a className='mylink' href='/bid'>標售</a>
                  </FooterTag> */}
                  <FooterTag className='textCenter2'>
                    <a className='mylink' href='/newsList'>新聞與研究</a>
                  </FooterTag>
                  <FooterTag className='textCenter2'>
                    <a className='mylink' href='/team_manager'>團隊介紹</a>
                  </FooterTag>
                  <FooterTag className='textCenter2'><a className='mylink' href='/about'>關於全球</a></FooterTag>
                </FooterList>
                <FooterList>
                  {/* <FooterTag className='textCenter2'><a className='mylink' href='/about'>關於全球</a></FooterTag> */}
                  <FooterTag long className='textCenter2'>
                    集團與社會責任
                  </FooterTag>
                  <FooterTag>&nbsp;</FooterTag>
                  <FooterTag>&nbsp;</FooterTag>
                </FooterList>
              </React.Fragment>
            )
          }
          </FooterTitle>
        </BgIconList>
        <BgIcon>
          <Footer>
            <h6>信義全球資產管理股份有限公司</h6>
            <h6>&copy;2020 信義房屋股份有限公司 版權所有</h6>
          </Footer>
        </BgIcon>
        {
          this.state.displayMenu1 ? (
            <div className='footerDownList'>
              <FoundList>辦公</FoundList>
              <FoundList>店面</FoundList>
              <FoundList>廠房</FoundList>
              <FoundList>土地</FoundList>
              <FoundList>其它</FoundList>
            </div>
          ) : (
            null
          )
        }
        {
          this.state.displayMenu2 ? (
            <div className='footerDownList'>
              <PhoneCall><a href='tel: 02 5468 2596'>02-5468-2596</a></PhoneCall>
            </div>
          ) : (
            null
          )
        }
        {
          this.state.displayMenu3 ? (
            <div className='footerDownList'>
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
                  <input type="checkbox" /> 送出資料前，請點選同意本站<a onClick={this.showProvicy}>隱私權政策</a>及<a onClick={this.showService}>服務條款</a>
                </BusCheck>
                <SendButton>送出</SendButton>
              </FastMessenger>
            </div>
          ) : (
            null
          )
        }
        <BtnFooter>
          <BtnBottomItem side className={`${coll01}`} onClick={this.showDropdownMenu1}>
            <img src={`/static/img/${icon01}.png`} />
            查找物件
          </BtnBottomItem>
          <BtnBottomItem className={`${coll02}`} onClick={this.showDropdownMenu2}>
          <img src={`/static/img/${icon02}.png`} />
          撥打電話
          </BtnBottomItem>
          <BtnBottomItem side className={`${coll03}`} onClick={this.showDropdownMenu3}>
          <img src={`/static/img/${icon03}.png`} />
          快速留言
          </BtnBottomItem>
        </BtnFooter>
        <ProvicyModal
          show={this.state.displayProvicy}
          close={this.closeProvicy}
         />
         <ServiceModal
          show={this.state.displayService}
          close={this.closeService}
         />
         <SuccessModal 
          show={this.state.displaySend}
          close={this.closeMessenger} />
      </div>
    )
  }
  
}

export default MobileFooter
