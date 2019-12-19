import React,{useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 80px;
  line-height:60px;
  background: rgba(0,0,0,.2);
  color: #fff;
  position: fixed;
  font-weight: bold;
  @media (max-width: 992px){
    display: none;
  }
`
const NavContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 1366px){
    width: 90%;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  flex-wrap: wrap;
`
const ItemList = styled.ul`
  background: #fff;
  width: 150px;
  color: #000;
  font-size: 15px;
  border-radius: 10px;
  margin-top: 35px;
  display: none;
`
const ListLi = styled.div`
  padding: 0 0 0 10px ;
  border-bottom: ${props => props.bottom ? '' : '1px solid #F0F0F0'};
  height: 50px;
  z-index: 5;
  &:hover{
    background: #D2D2D2;
    color: #00B1FF;
  }
`
const Logo = styled.div`
  display:inline-block;
  width: 180px;
  @media (max-width: 992px){
    width: 100px;
  }
`
const Img = styled.img`
	width:100%;
`
const NavList = styled.div`
  color: #fff;
`
const List = styled.ul`
  display: flex;
  list-style: none;
  font-size: 20px;
  /* & > li {
    font-weight: 200;
    margin: 0 30px;
    cursor: pointer;
    font-weight:500;
    color: #fff;
    width: ${props => props.two ? '50px' : '100px'};
  } */
`
const ItemBorder = styled.div`
  width: 66px;
  height: 7px;
  display: none;
  margin-top: -28px;
  margin-left: ${props => props.short ? '-16px' : '0'};
  & > img {
    width: 100%;
  }
`
const ItemLi = styled.li`
  font-weight: 500;
  margin: 0 20px;
  cursor: pointer;
  font-weight:500;
  color: #fff;
  font-size: 18px;
  width: ${props => props.two ? '50px' : '100px'};
  @media (max-width: 1366px){
    margin: 0 22px;
    width: ${props => props.two ? '50px' : '80px'};
    font-size: 16px;
  }
  &:hover ${ItemList}{
    display: block;
  }
  &:hover ${ItemBorder}{
    display: block;
  }
`
const Item = styled.span`
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
`
const Icon = styled.img`
  width:40px;
`

const NavBar = () => {
  return(
    <Nav>
      <NavContainer>
        <Content>
          <Logo>
            <a href='/'>
              <Img src="static/img/logo.png" alt="" />
            </a>
          </Logo>
          <NavList>
            <List>
              {/* <ItemLi>
                主題特輯
                <ItemBorder>
                  <img src='/static/img/hover.png' />
                </ItemBorder>
                <ItemList>
                  <ListLi>主題 1</ListLi>
                  <ListLi>主題 2</ListLi>
                  <ListLi>主題 3</ListLi>
                  <ListLi bottom>主題 4</ListLi>
                </ItemList>
              </ItemLi> */}
              <ItemLi two>
                <a className='mylink' href='/sellList'>買賣
                  <ItemBorder short>
                    <img src='/static/img/hover.png' />
                  </ItemBorder>
                </a>
              </ItemLi>
              <ItemLi two>
                <a className='mylink' href='/itemList'>租賃
                  <ItemBorder short>
                    <img src='/static/img/hover.png' />
                  </ItemBorder>
                </a>
              </ItemLi>
              <ItemLi two>標售
                <ItemBorder short>
                  <img src='/static/img/hover.png' />
                </ItemBorder>
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
              </ItemLi>
              <ItemLi>新聞與研究
                <ItemBorder className='bdRight'>
                  <img src='/static/img/hover.png' />
                </ItemBorder>
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
              </ItemLi>
              <ItemLi>
                <a className='mylink' href='/team'>團隊介紹
                  <ItemBorder>
                    <img src='/static/img/hover.png' />
                  </ItemBorder>
                </a>
                <ItemList>
                  <ListLi>公司簡介</ListLi>
                  <ListLi>加入我們</ListLi>
                  <Link href='/service'>
                    <a className='navLink'><ListLi bottom>服務據點</ListLi></a>
                  </Link>
                </ItemList>
              </ItemLi>
              <ItemLi>
                <a href='/about' className='linkText' >
                  關於全球
                  <ItemBorder>
                    <img src='/static/img/hover.png' />
                  </ItemBorder>
                </a>
              </ItemLi>
              <ItemLi><a href='https://www.facebook.com/sinyiglobal' target="_blank"><Icon src="static/img/icon_fb_w.png" alt="" /></a></ItemLi>
            </List>
          </NavList>
        </Content>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
