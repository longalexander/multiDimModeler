import React, { Component } from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Elem from '../Elem'

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
const Elemlist = styled.div`
  padding: 8px;
  transition: background-color 0.2 ease;
  background-color:${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
  display: flex;
  height: 50px;
  width: 100%;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps){
    if (nextProps.elems === this.props.elems) return false;
    return true;
  }
  render(){
    return this.props.elems.map( (elem,index) => <Elem key={elem.id} elem={elem} index={index}/>);
  }
}

class RowColMark extends Component {
  render(){
    return(
      <Container>
        <TitleContainer><Title>{this.props.rowColMark.title}</Title></TitleContainer>
        <Droppable droppableId={this.props.rowColMark.id} direction='horizontal'>
          {(provided,snapshot) =>
            <Elemlist
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}>
              <InnerList elems={this.props.elems}/>
              {provided.placeholder}
            </Elemlist>}
        </Droppable>
      </Container>
    );
  }
}

export default RowColMark;
