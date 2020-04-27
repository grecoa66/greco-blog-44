import React from 'react';
import styled from 'styled-components';
import HeroTitle from 'components/hero/HeroTitle';

const HeroWrapper = styled.section`
  position: sticky;
  top: 0;
  z-index: ${props => props.theme.zindex['hero']};
  position: relative;
  width: 100%;
  height: 50vh;
`;

const StyledImage = styled.img`
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  overflow: hidden;
`;

const Hero = ({ imgSrc, heroText, subHeroText }) => (
  <HeroWrapper>
    <StyledImage src={imgSrc} />
    <HeroTitle heroText={heroText} subHeroText={subHeroText} />
  </HeroWrapper>
);

export default Hero;
