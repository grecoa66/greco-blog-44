import React from 'react';
import styled from 'styled-components';
import { BaseBlock } from 'components/base/blocks';

const StyledBlock = styled(BaseBlock)`
  object-fit: cover;
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: auto;
`;

const ImageBlock = ({ imgSrc, ...props }) => (
  <StyledBlock {...props}>
    <StyledImage src={imgSrc} />
  </StyledBlock>
);

export default ImageBlock;
