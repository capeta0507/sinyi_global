import React, { Component } from 'react'
import styled from 'styled-components'
import CompareModal from '../components/Card/compareModal'
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
`

class FastButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      intervalId: 0,
      displayConnection: false,
      displayCompare: false,
      displayService: false,
      displayProvicy: false,
      displaySend: false,
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

  showCompare = (event) => {
    event.preventDefault();
    this.setState({ displayCompare: true });
  }
  closeComparer = () => {
    this.setState({ displayCompare: false });
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
      intervalId: intervalId
    })
  }
  render(){
    const { rocketPo } = this.state;
    let rocketSty = rocketPo ? "top-on":"top-off";
    return(
      <div>
        <div className={`fastButton ${rocketSty}`}>
          <div className='compare' onClick={this.showCompare}>
            <img className='compareIcon' src='/static/img/found.png' />
            <div className='compareText'>查看比較(3/3)</div>
          </div>
          <div className='' onClick={this.scrollToTop}>
            <div className='getTop'>
              <img className='top' src='/static/img/top.png' alt='' />
            </div>
          </div>
        </div>
        {
          this.state.displayConnection ? (
            <div className='fastForm'>
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
              <SendButton onClick={this.sendMessenger}>送出</SendButton>
              <ConnectPhone>聯絡電話：02-8979-6060</ConnectPhone>
            </div>
          ) : (
            null
          )
        }
        <CompareModal show={this.state.displayCompare} close={this.closeComparer} />
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
