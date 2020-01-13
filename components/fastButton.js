import React, { Component } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import ProvicyModal from './Modal/privacyModal'
import ServiceModal from './Modal/serviceModal'
import SuccessModal from './Modal/successModal'

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
    text-decoration:underline;
    cursor: pointer;
    &:hover{
      color: #00B1FF;
      text-decoration:underline;
    }
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
const ConnectPhone = styled.div`
  color: #000;
  font-size: 12px;
  text-align: center;
  & > a {
    color: #000;
  }
`
const BackBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
`
const KindOption = [
  { value: '1', label: '買屋'},
  { value: '2', label: '賣屋'}
]
const CityOption = [
  { value: '1', label: '台北市'},
  { value: '2', label: '新北市'},
  { value: '3', label: '基隆市'},
  { value: '4', label: '桃園市'},
  { value: '5', label: '新竹市'},
  { value: '6', label: '新竹縣'},
  { value: '7', label: '苗栗縣'},
  { value: '8', label: '台中市'},
  { value: '9', label: '彰化縣'},
  { value: '10', label: '雲林縣'},
  { value: '11', label: '南投縣'},
  { value: '12', label: '嘉義縣'},
  { value: '13', label: '台南市'},
  { value: '14', label: '高雄市'},
  { value: '15', label: '屏東線'},
  { value: '16', label: '宜蘭縣'},
  { value: '17', label: '花蓮縣'},
  { value: '18', label: '台東縣'},
  { value: '19', label: '澎湖縣'}
]

class FastButton extends Component {
  constructor(){
    super()
    this.state = {
      intervalId: 0,
      displayConnection: false,
      displayService: false,
      displayProvicy: false,
      displaySend: false,
      displayButton: false,
      rocketPo: false
    }
  }

  componentDidMount(){
    window.scroll(0, 1);
    window.addEventListener( 'scroll', this.winScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.winScroll);
  }

  winScroll = () => {
    let navRoll = window.pageYOffset;

    if (navRoll > 200){
      this.setState({
        rocketPo : true
      });
    }else{
      this.setState({
        rocketPo : false
      })
    }
  }

  showConnection = (event) => {
    event.preventDefault();
    this.setState({ displayConnection: !this.state.displayConnection });
  }
  showProvicy = () => {
    this.setState({ displayProvicy: true });
  }
  closeProvicy = () => {
    this.setState({ displayProvicy: false });
  }
  closeForm = () => {
    this.setState({ displayConnection: false });
  }
  showService = () => {
    this.setState({ displayService: true });
  }
  closeService = () => {
    this.setState({ displayService: false });
  }
  sendMessenger = () => {
    this.setState({ 
      displaySend: true,
      displayConnection: false
     });
  }
  closeMessenger = () => {
    this.setState({ displaySend: false });
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }
  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 20);
    this.setState({
      intervalId: intervalId,
      displayConnection : false
    })
  }
  render(){
    const { rocketPo } = this.state;
    let rocketSty = rocketPo ? "top-on":"top-off";
    return(
      <div>
        <div className={`fastButton ${rocketSty}`}>
          <div className='connection' onClick={this.showConnection}>
            <img className='connectionIcon' src='/static/img/list/fast_connection.png' />
            <div className='connectionText'>快速聯絡</div>
          </div>
          <div className='' onClick={this.scrollToTop}>
            <div className='getTop'>
              <img className='top' src='/static/img/top.png' alt='' />
            </div>
          </div>
        </div>
        {
          this.state.displayConnection ? (
            <React.Fragment>
            <BackBlock onClick={this.closeForm} />
            <div className='fastForm'>
              <IptName className=''>
                <Select 
                  placeholder="買屋"
                  label='Single select'
                  inputProps={{readOnly:true}}
                  isSearchable={ false }
                  options={KindOption}
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
                  inputProps={{readOnly:true}}
                  isSearchable={ false }
                  options={CityOption}
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
              <SendButton onClick={this.sendMessenger}>送出</SendButton>
              <ConnectPhone>聯絡電話：<a href='tel: 02 8979 6060'>02-8979-6060</a></ConnectPhone>
            </div>
            </React.Fragment>
          ) : (
            null
          )
        }
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

export default FastButton
