import React from "react";
import styled from "styled-components";

const StyledLayoutContainer = styled.div`
  background-color: lightgrey;
  width: 100vw;
  height: 100vh;
  padding: 10px;
`;

const StyledLayout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default StyledLayout;
