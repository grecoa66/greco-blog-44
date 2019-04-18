import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    size: 5em;
  }
`;

const HeroTitle = ({ children }) => (
  <Title>
    <h1>{children}</h1>
  </Title>
);

export default HeroTitle;
