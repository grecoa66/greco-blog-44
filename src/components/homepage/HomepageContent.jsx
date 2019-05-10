import React from 'react';
import styled from 'styled-components';

const HomepageWrapper = styled.section`
  position: relative;
`;

const HomepageContent = ({ children, ...props }) => (
  <HomepageWrapper>{children}</HomepageWrapper>
);

export default HomepageContent;
