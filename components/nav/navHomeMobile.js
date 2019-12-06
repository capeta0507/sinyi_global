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
  padding: 10px 0 10px 0;
`
const Icon = styled.img`
  width:30px;
`
const IconLink = styled(Nav.Link)`
  text-align: center;
  padding: 50px;
`
const ItemBod = styled.img`
  width: 120px;
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
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="">
                      <Item>主題特輯</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="#features">
                      <Item>買賣</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li> 
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>租賃</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>標售</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>新聞與研究</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>團隊介紹</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="/vacancies">
                      <Item>關於全球</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                <IconLink>
                  <Link href="https://www.facebook.com/sinyiglobal">
                    <Item><Icon src="static/img/icon_fb_w.png" alt="" /></Item>
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
