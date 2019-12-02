import React, {useState} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styled from 'styled-components'
import '../../style/index.css'
import Link from 'next/link'

const NavMB = styled(Navbar)`
  width: 100%;
  position: fixed;
  top:0;
  background-color: #263843 !important;
  z-index: 999;
`

const Logo = styled.div`
  display:inline-block;
  width: 125px;
  @media (max-width: 768px){
    width: 100px;
  }
`
const Img = styled.img`
	width:100%;
`
const Item = styled.span`
  margin: 0 15px;
  cursor: pointer;
  color: #fff;
`
const NavLink = styled(Nav.Link)`
  text-align: center;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #5EC859;
`
const Icon = styled.img`
  width:30px;
`
const IconLink = styled(Nav.Link)`
  text-align: center;
  padding: 50px;
`

const NavHomeMobile = () => {
  const [active ,setActive] = useState(false)

  const toggle = () => {
    setActive(!active)
  }
  return(
    <>
      <NavMB className='navBlock' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo>
              <Img src="static/img/logo.png" alt="" />
            </Logo>
          </Navbar.Brand>
          <div className={`menu transition ${active === true ? 'active' : ''}`} onClick={toggle}>
          {/* <div className="menu transition active" onClick={toggle}> */}
            <div className="bar bar1 transition"></div>
            <div className="bar bar2 transition"></div>
            <div className="bar bar3 transition"></div>
            <ul className="transition">
                <li>
                  <NavLink>
                    <Link href="/">
                      <Item>首頁</Item>
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link href="#features">
                      <Item>業務菁英專區</Item>
                    </Link>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink>
                    <Link href="#pricing">
                      <Item>校園種子計畫</Item>
                    </Link>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <Link href="#features">
                      <Item>幸福信義人</Item>
                    </Link>
                  </NavLink>
                </li> */}
                <li>
                  <NavLink>
                    <Link href="#features">
                      <Item>認識信義</Item>
                    </Link>
                  </NavLink>
                </li> 
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>集團職缺</Item>
                    </Link>
                  </NavLink>
                </li>
                <li>
                <IconLink>
                  <Link href="https://www.facebook.com/SinyiRealtyInc.HR/">
                    <Item><Icon src="static/img/icon_fb_w.png" alt="" /></Item>
                  </Link>
                  <Link href="https://www.instagram.com/sinyi.hr/">
                    <Item><Icon src="static/img/icon_ig_w.png" alt="" /></Item>
                  </Link>
                </IconLink>
                </li>          
            </ul>
          </div>
        </Container>
      </NavMB>
    </>
  )
}

export default NavHomeMobile
