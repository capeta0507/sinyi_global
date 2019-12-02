import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const LogoSection = styled.div`
	width: 150px;
	position: absolute;
	top: 10px;
	left: 12%;
	z-index: 111;
`
const Img = styled.img`
	width:100%;
`

const Logo = () => {
  return(
		<LogoSection className='navList'>
			<a href='/'>
				<Img src="static/img/logo.png" alt="" />
			</a>
		</LogoSection>
  )
}

export default Logo
