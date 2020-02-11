import React from 'react';
import styled from 'styled-components';
import WorksheetHeader from './WorksheetHeader'
import WorksheetController from './WorksheetController'
import WorksheetTableView from './WorksheetTableView'
import WorksheetFormulaView from './WorksheetFormulaView'

const Container = styled.div``;

function Worksheet(){
  return(
    <Container>
      <WorksheetHeader />
      <WorksheetController />
      <WorksheetTableView />
      <WorksheetFormulaView />
    </Container>
  )
}

export default Worksheet;
