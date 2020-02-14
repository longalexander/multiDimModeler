import React, { Component } from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Dim from '../Dim'

const Container = styled.div`
  margin: 0px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display:flex;
`;

const TitleContainer = styled.div`
`;

const Title = styled.h6`
  padding: 8px;
  text-align: right;
  color: #828282;
  width: 50px;
`;

const Dimlist = styled.div`
  padding: 8px;
  transition: background-color 0.2 ease;
  background-color:${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
  display: flex;
  height: 20px;
  width: 100%;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps){
    if (nextProps.dims === this.props.dims) return false;
    return true;
  }
  render(){
    return this.props.dims.map( (dim,index) => <Dim key={dim.id} dim={dim} index={index}/>);
  }
}

class Axis extends Component {
  render(){
    return(
      <Container>
        <TitleContainer><Title>{this.props.axis.title}</Title></TitleContainer>
        <Droppable droppableId={this.props.axis.id} direction='horizontal'>
          {(provided,snapshot) =>
            <Dimlist
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}>
              <InnerList dims={this.props.dims}/>
              {provided.placeholder}
            </Dimlist>}
        </Droppable>
      </Container>
    );
  }
}

export default Axis;
