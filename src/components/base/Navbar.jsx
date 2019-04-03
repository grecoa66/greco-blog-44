import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  height: 4vh;
  position: sticky;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
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
