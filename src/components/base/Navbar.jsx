import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  top: 0;
  height: 8vh;
  width: 100%;
  position: sticky;
  justify-content: flex-start;
  align-items: center;
  z-index: ${props => props.theme.zindex['headerFooter']};
  background-color: ${props => props.theme.colors['primaryAccent']};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors['black']};
  padding: 5px;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <nav role="navigation" aria-label="main-navigation">
        <div>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/resume">Resume</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </div>
      </nav>
    </StyledNav>
  );
};

export default Navbar;
