import React from 'react'
import styled from 'styled-components';

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #1E1F21;
  color: #DCDDDD;
  padding: 16px;
  position: relative;
`;
const TextWrapper = styled('span')`
  font-size: 32px;
`;
const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
`;
const ButtonWrapper = styled('button')`
  border: unset;
  background-color: ${props => props.unPressed ? '#27282A' : '#565759'};
  border: 1px solid #565759;
  height: 20px;
  border-radius: 4px;
  margin-right:2px;
  color: ${props => props.unPressed ? '#a4a6a9' : '#E6E6E6'};
  outline: unset;
  cursor: pointer;
  `;
const TodayButton = styled(ButtonWrapper)`
	font-weight: bold;
  padding-left:16px;
  padding-right:16px;
`;


export default function Monitor({today,prevHandler,todayHandler,nextHandler}) {
  
  
  return (
    <DivWrapper>
      <div>
        <TitleWrapper>{today.format('MMMM')}</TitleWrapper>
        <TitleWrapper>{today.format('YYYY')}</TitleWrapper>
      </div>
      <div>
      <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
      <TodayButton onClick={todayHandler}>Today</TodayButton>
      <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>

      </div>
    </DivWrapper>

  )
}
