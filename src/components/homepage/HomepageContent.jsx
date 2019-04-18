import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.section`
  position: relative;
  z-index: 2000;
  background-color: ${props => props.theme.colors['white']};
`;

const HomepageContent = ({ children, ...props }) => (
  <HomepageWrapper>{children}</HomepageWrapper>
);

export default HomepageContent;
