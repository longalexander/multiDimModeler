import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'
import Worksheet from './Worksheet'

/*
 The EditorView is shown when the user enters a Workspace.
 The Editor queries info related to the Workspace and passes it down to components.
*/

const Container = styled.div`
  display: flex;
  background-color: #fafafa;
`;

const SidebarContainer = styled.div`
  height: 93vh;
  width: 10%;
  background-color: #828282;
  color: #fff;
  padding: 14px;
`;

const WorksheetContainer = styled.div`
  height: 93vh;
  width: 45%;
  background-color: #ffffff;
  color: #333333;
  padding: 14px;
`;

function EditorView(){
  return(
    <Container>
      <SidebarContainer><Sidebar /></SidebarContainer>
      <WorksheetContainer><Worksheet /></WorksheetContainer>
    </Container>
  );
}

export default EditorView;
