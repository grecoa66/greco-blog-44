import React from "react";
import styled from "styled-components";
import { any } from "prop-types";

const StyledLayoutContainer = styled.div`
  background-color: lightgrey;
  width: 100vw;
  height: 100vh;
`;

const StyledLayout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

StyledLayout.propTypes = {
  children: any
};

export default StyledLayout;
