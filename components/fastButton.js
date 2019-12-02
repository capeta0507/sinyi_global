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
        <div className='circle' onClick={this.scrollToTop}>
          <div className='circlegray getTop'>
            <img className='top' src='/static/img/arrow_top.png' alt='' />
            <h4 className='none'>Top</h4>
          </div>
        </div>
      </div>
    )
  }

}

export default FastButton
