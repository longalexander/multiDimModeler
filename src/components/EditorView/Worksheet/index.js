import React from 'react';
import styled from 'styled-components';
import WorksheetHeader from './WorksheetHeader'
import WorksheetController from './WorksheetController'
import WorksheetTableView from './WorksheetTableView'
import WorksheetFormulaView from './WorksheetFormulaView'

const Container = styled.div`
  color: #333333;
`;

function Worksheet(props){
  return(
    <Container>
      <WorksheetHeader />
      <WorksheetController data={props.data}/>
      <WorksheetTableView />
      <WorksheetFormulaView />
    </Container>
  )
}

export default Worksheet;
