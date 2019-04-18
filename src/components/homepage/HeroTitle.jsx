import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors['white']};
  z-index: ${props => props.theme.zindex['heroContent']};

  h1 {
    font-size: 5em;
    z-index: inherit;
  }
`;

const HeroTitle = ({ children }) => {
  return (
    <Title>
      <h1>{children}</h1>
    </Title>
  );
};

export default HeroTitle;
