import React from 'react';
import styled from 'styled-components';
import { any } from 'prop-types';

const StyledLayoutContainer = styled.div`
  background-color: lightgrey;
  width: 100%;
  height: 100%;
`;

const StyledLayout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

StyledLayout.propTypes = {
  children: any
};

export default StyledLayout;
