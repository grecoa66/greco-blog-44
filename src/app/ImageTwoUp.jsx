import React from 'react';
import styled from 'styled-components';
import { IMG_SIDES } from 'app/constants';
import { useMediaQuery } from '@react-hook/media-query';

const containerHeight = '90vh';

const DesktopStyledContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2px;
  background-color: ${props => props.theme.colors['lightGrey']};
  height: ${containerHeight};
`;

const DesktopStyledTextContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  grid-column: ${props =>
    props.imgSide == IMG_SIDES.RIGHT ? '2 / span 4' : '8 /span 4'};
`;

const DesktopStyledImageContainer = styled.section`
  grid-row: 1;
  grid-column: ${props =>
    props.imgSide == IMG_SIDES.RIGHT ? '7 / span 6' : '1 / span 6'};
  ${props => console.log('styles', props.imgSide)};
`;

const DesktopStyledImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: ${containerHeight};
`;

const MobileStyledContainer = styled.section`
  diplay: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['lightGrey']};
`;

const MobileStyledTextContainer = styled.section`
  height: 50vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const MobileStyledImageContainer = styled.section`
  height: ${containerHeight};
`;

const MobileStyledImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: ${containerHeight};
`;

const ImageTwoUp = ({ text, imgSrc, imgSide }) => {
  const isMobile = useMediaQuery('only screen and (max-width: 700px)');

  return (
    <>
      {isMobile ? (
        <MobileStyledContainer>
          <MobileStyledTextContainer>
            <p>{text}</p>
          </MobileStyledTextContainer>
          <MobileStyledImageContainer>
            <MobileStyledImage src={imgSrc} />
          </MobileStyledImageContainer>
        </MobileStyledContainer>
      ) : (
        <DesktopStyledContainer>
          <DesktopStyledTextContainer imgSide={imgSide}>
            <p>{text}</p>
          </DesktopStyledTextContainer>
          {console.log(imgSide)}
          <DesktopStyledImageContainer imgSide={imgSide}>
            <DesktopStyledImage src={imgSrc} />
          </DesktopStyledImageContainer>
        </DesktopStyledContainer>
      )}
    </>
  );
};

export default ImageTwoUp;
