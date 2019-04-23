import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors['white']};
  z-index: ${props => props.theme.zindex['heroContent']};

  h1 {
    font-size: 5em;
    z-index: inherit;
  }
  h3 {
    font-size: 2em;
    z-index: inherit;
  }
`;

const HeroTitle = ({ heroText, subHeroText }) => {
  return (
    <Title>
      <h1>{heroText}</h1>
      <h3>{subHeroText}</h3>
    </Title>
  );
};

export default HeroTitle;
