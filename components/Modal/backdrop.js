import React from 'react'
import styled from 'styled-components'

const BackBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.5);
`

const BackDrop = (props) => (
  props.show ? (<BackBlock onClick={props.close} />) : null
)

export default BackDrop