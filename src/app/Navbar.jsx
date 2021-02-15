import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import GithubIcon from 'img/github-icon.svg';
import MailIcon from 'img/mail-logo.svg';
import PhoneIcon from 'img/phone-logo.svg';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  height: 10vh;
  width: 100vw;
  padding: 0 40px;
  position: sticky;
  z-index: ${props => props.theme.zindex['headerFooter']};
  background-color: ${props => props.theme.colors.lightCream};
`;

const Name = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 800px) {
    font-size: 38px;
  }
`;

const IconWrapper = styled.section`
  margin-left: auto;
`;

const IconStyling = css`
  width: 24px;
  height: 24px;
  margin: 0 8px;
`;

const Github = styled(GithubIcon)`
  ${IconStyling}
`;

const Phone = styled(PhoneIcon)`
  ${IconStyling}
`;

const Mail = styled(MailIcon)`
  ${IconStyling};
`;

const Navbar = () => {
  return (
    <StyledNav role="navigation" aria-label="main-navigation">
      <Name>Alex K. Greco</Name>
      <IconWrapper>
        <a href="https://github.com/grecoa66">
          <Github />
        </a>
        <a href="tel:908-268-9044">
          <Phone />
        </a>
        <a href="mailto:alex.k.greco.4@gmail.com">
          <Mail />
        </a>
      </IconWrapper>
    </StyledNav>
  );
};

export default Navbar;
