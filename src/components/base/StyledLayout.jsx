import React from 'react';
import styled from 'styled-components';
import { any } from 'prop-types';

const StyledLayoutContainer = styled.div`
  background-color: ${props => props.theme.colors['primaryBackground']};
  width: 100%;
  height:100%;
  min-height: 100vh;
`;

const StyledLayout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

StyledLayout.propTypes = {
  children: any
};

export default StyledLayout;
