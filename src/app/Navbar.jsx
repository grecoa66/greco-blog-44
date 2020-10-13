import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  height: 10vh;
  width: 100%;
  padding: 0 40px;
  position: sticky;
  z-index: ${props => props.theme.zindex['headerFooter']};
  background-color: ${props => props.theme.colors['white']};
`;

const Logo = styled.p`
  display: flex;
  align-items: center;
  font-size: 36px;
  color: ${props => props.theme.colors['black']};
  margin: auto;
  height: 100px;

  left: 50%;
  position: absolute;
`;

const NavOptions = styled.div`
  display: block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: ${props => props.theme.colors['black']};
  padding: 5px;
`;

const Navbar = () => {
  return (
    <StyledNav role="navigation" aria-label="main-navigation">
      <NavOptions>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </NavOptions>
      <Logo>AKG</Logo>
    </StyledNav>
  );
};

export default Navbar;
