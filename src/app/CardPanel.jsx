import React from 'react';
import styled from 'styled-components';

const CardPanelWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  background-color: ${props => props.theme.colors.lightGrey};
`;

const StyledCard = styled.section`
  margin: 0px 24px;
  padding: 12px;
  background-color: ${props => props.theme.colors.lightAsh};
  border-radius: 4px;
  box-shadow: 0px 2px 6px ${props => props.theme.colors.black};
`;

const StyledTitle = styled.h3`
  text-align: center;
  padding: 4px;
  font-size: 20px;
`;

const CardPanel = ({ panel }) => {
  console.log(panel);
  return (
    <CardPanelWrapper>
      <StyledCard>
        <StyledTitle>{panel.title}</StyledTitle>
        <p>{panel.text}</p>
      </StyledCard>
    </CardPanelWrapper>
  );
};

export default CardPanel;
