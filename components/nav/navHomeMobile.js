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
  @media (max-width: 992px){
    width: 100px;
  }
`
const Img = styled.img`
	width:100%;
`
const ItemList = styled.div`
  width: 100%;
  font-size: 15px;
  margin-top: 10px;
`
const ListLi = styled.div`
  margin-bottom: 15px ;
  height: 20px;
  color: #B4B4B4;
  z-index: 5;
`
const Item = styled.span`
  margin: 0 15px;
  cursor: pointer;
  color: #fff;
`
const NavLink = styled(Nav.Link)`
  text-align: center;
  padding-top: 5px !important;
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
  margin-top: -20px;
`

const NavHomeMobile = () => {
  const [active ,setActive] = useState(false)
  const [bid, setBid] = useState(false)
  const [news, setNews] = useState(false)
  const [team, setTeam] = useState(false)

  const toggle = () => {
    setActive(!active)
  }
  const displayBid = () => {
    setBid(!bid)
  }
  const displayNews = () => {
    setNews(!news)
  }
  const displayTeams = () => {
    setTeam(!team)
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
          <div className={`menu transition ${active === true ? 'active' : ''}`}>
          {/* <div className="menu transition active" onClick={toggle}> */}
            <div className="bar bar1 transition" onClick={toggle}></div>
            <div className="bar bar2 transition" onClick={toggle}></div>
            <div className="bar bar3 transition" onClick={toggle}></div>
            <ul className="transition">
                <li>
                  <NavLink>
                    <Link href="/">
                      <Item>首頁</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                {/* <li>
                  <NavLink>
                    <Link href="">
                      <Item>主題特輯</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li> */}
                <li>
                  <NavLink>
                    <Link href="/sellList">
                      <Item>買賣</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li> 
                <li>
                  <NavLink>
                    <Link href="/itemList">
                      <Item>租賃</Item>
                    </Link>
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Item onClick={displayBid}>標售</Item>
                    {
                      bid ? (
                      <ItemList>
                        <Link href='/about'>
                          <a className='navLink'>
                            <ListLi>服務與實績</ListLi>
                          </a>
                        </Link>
                        <Link href='/bid'>
                          <a className='navLink'>
                            <ListLi>標案 1</ListLi>
                          </a>
                        </Link>
                        <Link href='/bid'>
                          <a className='navLink'>
                            <ListLi>標案 2</ListLi>
                          </a>
                        </Link>
                        <Link href='/bid'>
                          <a className='navLink'>
                            <ListLi bottom>標案 3</ListLi>
                          </a>
                        </Link>
                      </ItemList>
                      ) : (
                        ''
                      )
                    }
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Item onClick={displayNews}>新聞與研究</Item>
                    {
                      news ? (
                        <ItemList>
                          <Link href='/newsList'>
                            <a className='navLink'>
                              <ListLi>焦點新聞</ListLi>
                            </a>
                          </Link>
                          <Link href='/reportMonth'>
                            <a className='navLink'>
                              <ListLi>月報</ListLi>
                            </a>
                          </Link>
                          <Link href='/report'>
                            <a className='navLink'>
                              <ListLi bottom>季報</ListLi>
                            </a>
                          </Link>
                          {/* <ListLi bottom>電子報</ListLi> */}
                        </ItemList>
                      ) : (
                        ''
                      )
                    }
                    
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Item onClick={displayTeams}>團隊介紹</Item>
                    {
                      team ? (
                        <ItemList>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi>總經理</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi>商仲一部</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>商仲二部</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>投資一部</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>投資二部</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>工業產地部</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>顧問服務團隊</ListLi>
                            </a>
                          </Link>
                          <Link href='/team'>
                            <a className='navLink'>
                              <ListLi bottom>估價師團隊</ListLi>
                            </a>
                          </Link>
                        </ItemList>
                      ) : (
                        ''
                      )
                    }
                  </NavLink>
                  <ItemBod src='/static/img/navborder.png' />
                </li>
                <li>
                  <NavLink>
                    <Link href="/about">
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
