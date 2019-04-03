import React from 'react';
import styled from 'styled-components';
import Block from './BaseBlock';

const StyledBlock = styled(Block)`
  justify-content: center;
  padding: 25px;
`;

const CenteredBlock = props => <StyledBlock {...props} />;

export default CenteredBlock;
