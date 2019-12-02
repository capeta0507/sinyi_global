import React from 'react'
import styled from 'styled-components'

const MyBread = styled.div`
  width: 100%;
  color: #787878;
  margin: 20px 0;
  & > a {
    color: #787878;
  }
`

const Bread = (props) => {
  return(
    <MyBread>
      <a href=''>首頁</a> > <a href=''>最新消息</a>
    </MyBread>
  )
}

export default Bread