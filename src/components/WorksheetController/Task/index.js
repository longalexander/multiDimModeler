import React, { Component } from 'react';
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  transition: background-color 0.2 ease;
  background-color: ${props => (props.isDragging? 'lightgreen': 'white')};
  display: flex;
  margin-right: 16px;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

class Task extends Component {
  render(){
    return(
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided,snapshot) =>
          <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}>
            <Handle {...provided.dragHandleProps} />
            {this.props.task.content}
          </Container>}
      </Draggable>
    );
  }
}

export default Task;
