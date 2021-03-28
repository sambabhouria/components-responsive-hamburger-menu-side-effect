import React from 'react';
import styled from 'styled-components';
import Burger from './Hamburger';
import logo from './sambabhourialogo.png'

const Nav = styled.nav`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  box-shadow: none;
  background-color: #FC466B;
  height: 60px!important;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  overflow: hidden;
  z-index: 10;
`

const Logo = styled.div`
`
const Img = styled.img`
  margin: 1rem;
  width: 6rem;
  border-radius: 50%;s
`

const Navbar = () => {
  return (
    <Nav>
      <Logo className="logo">
        <Img src={logo} alt='logo' />
      </Logo>
      <Burger />
    </Nav>
  )
}

export default Navbar
