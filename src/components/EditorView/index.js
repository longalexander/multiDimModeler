import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar'
import Worksheet from './Worksheet'
import data from '../../data' // this is a rapid prototype: no connection to database. the state of EditorView is the database.

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

class EditorView extends Component{
  constructor(props){
    super(props);
    this.state = {loaded:false};
    this.createData = this.createData.bind(this);
    this.updateData = this.updateData.bind(this);
    this.addToAxis = this.addToAxis.bind(this);
  }
  componentDidMount(){
    this.setState({data:data , loaded: true}) // loading the temporary "database"
  }
  createData(dataType, newDataId, newData){
    let newDatabase = this.state.data;
    newDatabase[dataType][newDataId] = newData;
    this.setState({data:newDatabase})
    return;
  }
  updateData(dataType, dataId, property, newContent){
    let newDatabase = this.state.data;
    newDatabase[dataType][dataId][property] = newContent;
    this.setState({data:newDatabase})
    return;
  }
  addToAxis(axis_id, dim_id){
    let newDatabase = this.state.data;
    newDatabase['axis'][axis_id]['dimIds'].push(dim_id);
    this.setState({data:newDatabase})
    return;
  }
  render(){
    if (this.state.loaded===false) return "Loading..."
    return(
      <Container>
        <SidebarContainer><Sidebar /></SidebarContainer>
        <WorksheetContainer><Worksheet
                              data={this.state.data}
                              createData={this.createData}
                              updateData={this.updateData}
                              addToAxis={this.addToAxis} />
        </WorksheetContainer>
      </Container>
    );
  }
}

export default EditorView;
