import React, { Component } from 'react'

class FastButton extends Component {
  constructor(){
    super()
    this.state = {
      intervalId: 0,
    }
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
    return(
      <div className='fastButton'>
        <div className='' onClick={this.scrollToTop}>
          <div className='getTop'>
            <img className='top' src='/static/img/top.png' alt='' />
          </div>
        </div>
      </div>
    )
  }

}

export default FastButton
