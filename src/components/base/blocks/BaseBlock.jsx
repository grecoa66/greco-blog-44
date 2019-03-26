import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const getGridColumns = ({ colStart, colEnd }) => {
  if (!colStart || !colEnd) {
    return "left / right";
  }
  const start = colStart === "left" ? colStart : `col-start ${colStart}`;
  const end = colEnd === "right" ? colEnd : `col-start ${colEnd}`;

  return `${start} / ${end}`;
};

const GridBlock = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || "none"};
  grid-column: ${props => getGridColumns(props)};
`;

// className comes from wrapper components
const Block = ({ children, colStart, colEnd, className, backgroundColor }) => {
  return (
    <GridBlock
      colStart={colStart}
      colEnd={colEnd}
      className={className}
      backgroundColor={backgroundColor}
    >
      {children}
    </GridBlock>
  );
};

Block.propTypes = {
  children: PropTypes.any,
  colStart: PropTypes.string,
  colEnd: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Block;
