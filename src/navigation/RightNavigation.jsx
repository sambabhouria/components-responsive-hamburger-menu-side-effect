import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink} from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    a {
      text-decoration: none
    }
  }
  .active-link {
    color: white;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 60px;
    background: linear-gradient(
      180deg
      , #FC466B 0%, #3F5EFB 100%);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 1px;
      list-style: none;
    }
  }
`;

const RightNav = ({ open, toggle }) => {
  return (
    <Ul open={open} onClick={toggle}>
        <li><NavLink  exact activeClassName="active-link" to='/'>Home</NavLink></li>
        <li><NavLink  exact activeClassName="active-link" to='/about'>About Us</NavLink></li>
        <li><NavLink  exact activeClassName="active-link" to='/teams'>Teams</NavLink></li>
        <li><NavLink  exact activeClassName="active-link" to='/potfolio'>Potfolio</NavLink></li>
        <li><NavLink  exact activeClassName="active-link" to='/contacts'>Contact Us</NavLink></li>
        <li> <NavLink  exact activeClassName="active-link" to='/discuss'>Discuss</NavLink></li>
        <li> <NavLink  exact activeClassName="active-link" to='/services'>Services</NavLink></li>
        <li> <NavLink  exact activeClassName="active-link" to='/signIn'>Sign In</NavLink></li>
        <li><NavLink  exact activeClassName="active-link" to='/signUp'>Sign Up</NavLink></li>
    </Ul>
  )
}

export default RightNav
