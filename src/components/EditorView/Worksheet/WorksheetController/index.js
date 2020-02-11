import React from 'react';
import styled from 'styled-components';
import WorksheetViewSelector from './WorksheetViewSelector';
import WorksheetControllerRCM from './WorksheetControllerRCM'

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ViewSelectorContainer = styled.div``;
const RCMContainer = styled.div``;

function WorksheetController(){
  return(
    <Container>
      <ViewSelectorContainer><WorksheetViewSelector /></ViewSelectorContainer>
      <RCMContainer><WorksheetControllerRCM /></RCMContainer>
    </Container>
  );
}

export default WorksheetController;
