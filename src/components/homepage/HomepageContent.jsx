import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors['white']};
`;

const HomepageContent = ({ children, ...props }) => (
  <HomepageWrapper>{children}</HomepageWrapper>
);

export default HomepageContent;
