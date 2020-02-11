import React, { Component } from 'react';
import {Draggable} from 'react-beautiful-dnd'
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid lightgrey;
  margin-bottom: 8px;
  border-radius: 5px;
  transition: background-color 0.2 ease;
  background-color: ${props => (props.isDragging? '#27AE60': '#C4C4C4')};
  display: flex;
  margin-right: 16px;
  font-size: 10px;
  height: 18px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
`;

const Handle = styled.div`
  width: 14px;
  height: 14px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;


class Elem extends Component {
  render(){
    return(
      <Draggable draggableId={this.props.elem.id} index={this.props.index}>
        {(provided,snapshot) =>
          <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}>
            <Handle {...provided.dragHandleProps} />
            {this.props.elem.content}
          </Container>}
      </Draggable>
    );
  }
}

export default Elem;
