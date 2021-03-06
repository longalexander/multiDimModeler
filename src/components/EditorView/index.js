import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'
import Worksheet from './Worksheet'
import initialData from '../../initial-data'

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

const data = initialData; // this is a rapid prototype: no connection to database

function EditorView(){
  return(
    <Container>
      <SidebarContainer><Sidebar /></SidebarContainer>
      <WorksheetContainer><Worksheet data={data}/></WorksheetContainer>
    </Container>
  );
}

export default EditorView;
