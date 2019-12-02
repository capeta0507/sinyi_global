import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const BgIcon = styled.div`
  width: 100%;
  padding: 40px 0;
  background: #3B4B55;
  display: flex;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #707070;
`
const IconList = styled.div`
  width: 20%;
  margin: 0 auto;
  @media (max-width: 1366px){
    width:60%;
  }
  @media (max-width: 1280px){
    width:60%;
  }
  @media (max-width: 768px){
    width:100%;
  }
`
const Img = styled.img`
  width: 50px;
  margin: 0 20px;
`

const myIcon = () => {
  return(
		<>
			<BgIcon>
        <IconList>
          <a href='https://www.facebook.com/SinyiRealtyInc.HR/' target="_blank">
            <Img src="static/img/icon_fb_w.png" alt="" />
          </a>
          <a href='https://www.instagram.com/sinyi.hr/' target="_blank">
            <Img src="static/img/icon_ig_w.png" alt="" />
          </a>
          <a href='https://www.youtube.com/channel/UCOo6fpsDIaNGITs0bpK1_Sg' target="_blank">
            <Img src="static/img/icon_youtube_w.png" alt="" />
          </a>
        </IconList>
      </BgIcon>
		</>
  )
}

export default myIcon
