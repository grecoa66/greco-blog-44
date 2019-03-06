import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridBlock = styled.div`
  display: flex;
  background-color: pink;
  grid-column: ${props => props.colStart + "/" + props.colEnd || "1/12"};
`;

const Block = ({ children, colStart, colEnd }) => {
  return (
    <GridBlock colStart={colStart} colEnd={colEnd}>
      {children}
    </GridBlock>
  );
};

Block.propTypes = {
  children: PropTypes.any,
  colStart: PropTypes.string,
  colEnd: PropTypes.string
};

export default Block;
