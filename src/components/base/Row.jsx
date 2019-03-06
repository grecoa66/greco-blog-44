import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const GridRow = styled.div`
  display: grid;
  grid-template-columns:
    [left] auto
    repeat(12, [col-start] minmax(10px, 68px) [col-end])
    auto [right];
  grid-column-gap: 10px;
  background-color: grey;
  min-height: 100px;
`;

const Row = ({ children }) => {
  return <GridRow>{children}</GridRow>;
};

Row.propTypes = {
  children: PropTypes.any
};

export default Row;
