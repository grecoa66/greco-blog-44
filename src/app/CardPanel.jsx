import React from 'react';
import styled from 'styled-components';

const CardPanelWrapper = styled.div`
  padding: 80px 40px;
  display: flex;
  background-color: ${props => props.theme.colors.lightGrey};
`;

const StyledCard = styled.section`
  margin: 0px 24px;
  padding: 12px;
  background-color: ${props => props.theme.colors.lightAsh};
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 12px;
  box-shadow: 0px 8px 12px ${props => props.theme.colors.black};
`;

const StyledTitle = styled.h3`
  text-align: center;
  padding: 4px;
  font-size: 20px;
`;

const CardPanel = ({ panels }) => {
  console.log('panels: ', JSON.stringify(panels, null, 2));

  return (
    <CardPanelWrapper>
      {panels.map((panel, index) => (
        <StyledCard index={index}>
          <StyledTitle>{panel.title}</StyledTitle>
          <p>{panel.text}</p>
        </StyledCard>
      ))}
    </CardPanelWrapper>
  );
};

export default CardPanel;
