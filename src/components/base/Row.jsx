import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridRow = styled.div`
  display: grid;
  grid-template-columns:
    [left] auto
    repeat(12, [col-start] minmax(10px, 60px) [col-end])
    auto [right];
  grid-column-gap: 10px;
  background-color: ${props => props.backgroundColor || "none"};
  padding: ${props => props.padding || 0}px;
  min-height: 100px;

`;

const Row = ({ children, backgroundColor, padding }) => {
  return (
    <GridRow backgroundColor={backgroundColor} padding={padding}>
      {children}
    </GridRow>
  );
};

Row.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  padding: PropTypes.number
};

export default Row;
