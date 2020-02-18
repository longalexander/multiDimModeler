import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'
import Worksheet from './Worksheet'
import data from '../../data' // this is a rapid prototype: no connection to database

/*
 The EditorView is shown when the user enters a Workspace.
 The Editor has access to all data related to the Workspace and passes it down to components.
*/

const Container = styled.div`
  height: 90vh;
  display: flex;
  background-color: #f2f2f2;
`;

const SidebarContainer = styled.div`
  height: 100%;
  width: 10%;
  background-color: #828282;
  color: #fff;
  padding: 14px;
`;

const WorksheetContainer = styled.div`
  height: 100%;
  width: 45%;
  padding: 14px;
  background-color: #ffffff;
`;

function createData(dataType, newDataId, newData){
  data[dataType][newDataId] = newData;
  return;
}

function addToAxis(axis_id, dim_id){
  data['axis'][axis_id]['dimIds'].push(dim_id);
  return;
}

function EditorView(){
  return(
    <Container>
      <SidebarContainer><Sidebar /></SidebarContainer>
      <WorksheetContainer><Worksheet data={data} createData={createData} addToAxis={addToAxis}/></WorksheetContainer>
    </Container>
  );
}

export default EditorView;
