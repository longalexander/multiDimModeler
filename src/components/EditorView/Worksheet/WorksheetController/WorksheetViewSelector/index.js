import React from 'react';
import styled from 'styled-components';
import ViewChangeButton from './ViewChangeButton'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  background-color: #C4C4C4;
`;

const Button = styled.div``;

function WorksheetViewSelector(){
  return(
    <Container>
      <Button><ViewChangeButton /></Button>
      <Button><ViewChangeButton /></Button>
    </Container>
  )
}

export default WorksheetViewSelector;
