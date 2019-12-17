import React, { Component } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

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
  constructor(){
    super()
    this.state = {
      intervalId: 0,
      displayConnection: false
    }
  }

  showConnection = (event) => {
    event.preventDefault();
    this.setState({ displayConnection: !this.state.displayConnection });
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
    // const connectBlock = this.state.displayConnection ? 'getBlock' : 'getNone'
    return(
      <div>
        <div className='fastButton'>
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
                <input type="checkbox" /> 送出資料前，請點選同意本站<a href=''>隱私權政策</a>
              </BusCheck>
              <SendButton>送出</SendButton>
              <ConnectPhone>聯絡電話：02-8979-6060</ConnectPhone>
            </div>
          ) : (
            null
          )
        }
      </div>
    )
  }

}

export default FastButton
