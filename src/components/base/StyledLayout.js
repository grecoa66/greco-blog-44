import React from "react";
import styled from "styled-components";

const StyledLayoutContainer = styled.div`
  background-color: lightgrey;
`;

const StyledLayout = ({ children }) => {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
};

export default StyledLayout;
