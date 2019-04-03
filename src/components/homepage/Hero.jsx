import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const ImageWrapper = styled.section`
  width: 100vw;
  overflow: hidden;
`;
const StyledImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 80vh;
  overflow: hidden;
  ${props => console.log(props)}
`;

const Hero = ({ imgSrc, ...props }) => {
  console.log('Image Block: ', props);
  return (
    <HeroWrapper>
      <ImageWrapper>
        <StyledImage src={imgSrc} />
      </ImageWrapper>
    </HeroWrapper>
  );
};
export default Hero;
