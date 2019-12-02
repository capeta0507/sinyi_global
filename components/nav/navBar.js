import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100px;
  line-height:60px;
  background: rgba(0,0,0,.2);
  color: #fff;
  font-weight: bold;
  @media (max-width: 985px){
    display: none;
  }
`
const NavContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  flex-wrap: wrap;
`
const ItemList = styled.ul`
  background: #fff;
  width: 150px;
  color: grey;
  border-radius: 10px;
`
const Logo = styled.div`
  display:inline-block;
  width: 180px;
  @media (max-width: 768px){
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
const ItemLi = styled.li`
  font-weight: 500;
    margin: 0 30px;
    cursor: pointer;
    font-weight:500;
    color: #fff;
    width: ${props => props.two ? '50px' : '100px'};
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
              <ItemLi>主題特輯</ItemLi>
              <ItemLi two>買賣</ItemLi>
              <ItemLi two>租賃</ItemLi>
              <ItemLi two>標售
              <ItemList>
                <li>標案 1</li>
                <li>標案 2</li>
                <li>標案 3</li>
              </ItemList>
              </ItemLi>
              <ItemLi>新聞與研究</ItemLi>
              <ItemLi>團隊介紹</ItemLi>
              <ItemLi><a href='' className='linkText' >關於全球</a></ItemLi>
              <ItemLi><a href='https://www.facebook.com/SinyiRealtyInc.HR/' target="_blank"><Icon src="static/img/icon_fb_w.png" alt="" /></a></ItemLi>
            </List>
          </NavList>
        </Content>
      </NavContainer>
    </Nav>
  )
}

export default NavBar
