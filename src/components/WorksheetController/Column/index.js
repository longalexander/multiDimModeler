import React, { Component } from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Task from '../Task'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display:flex;
`;

const TitleContainer = styled.div`
`;

const Title = styled.h3`
  padding: 8px;
  text-align: right;
  width: 100px;
`;
const Tasklist = styled.div`
  padding: 8px;
  transition: background-color 0.2 ease;
  background-color:${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
  display: flex;
  height: 50px;
  width: 100%;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps){
    if (nextProps.tasks === this.props.tasks) return false;
    return true;
  }
  render(){
    return this.props.tasks.map( (task,index) => <Task key={task.id} task={task} index={index}/>);
  }
}

class Column extends Component {
  render(){
    return(
      <Container>
        <TitleContainer><Title>{this.props.column.title}</Title></TitleContainer>
        <Droppable droppableId={this.props.column.id} direction='horizontal'>
          {(provided,snapshot) =>
            <Tasklist
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}>
              <InnerList tasks={this.props.tasks}/>
              {provided.placeholder}
            </Tasklist>}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
