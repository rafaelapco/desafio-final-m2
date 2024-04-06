import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #404a4f;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  margin-bottom: 40px; 
`;

const NavItem = styled(NavLink)`
  color: #a1a692;
  text-decoration: none;
  margin: 0 20px;
  font-weight: bold;
  position: relative; 

  &:hover {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px; 
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }

  &.active {
    text-decoration: none;
  }
`;

function Navigation() {
  return (
    <NavBar>
      <NavItem exact to="/">Home</NavItem>
      <NavItem to="/sobre">Sobre</NavItem>
      <NavItem to="/projetos">Projetos</NavItem>
    </NavBar>
  );
}

export default Navigation;