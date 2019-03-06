import React from "react";
import styled from "styled-components";
import Block from "./BaseBlock";

const StyledBlock = styled(Block)`
  background-color: violet;
  justify-content: center;
`;

const CenteredBlock = props => {
  return <StyledBlock {...props} />;
};

export default CenteredBlock;
