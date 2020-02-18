import React, { Component } from 'react';
import styled from 'styled-components'
import {Droppable} from 'react-beautiful-dnd'
import Dim from '../Dim'
import AddCircleButton from '../../../../../General/Button/AddCircleButton'
import DimensionObject from '../../../../../../DataClasses/DimensionObject'

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
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps){
    if (nextProps.dims === this.props.dims) return false;
    return true;
  }
  render(){
    return this.props.dims.map( (dim,index) => <Dim key={dim.id} dim={dim} index={index} updateData={this.props.updateData}/>);
  }
}

class Axis extends Component {
  constructor(props){
    super(props);
    this.addDim = this.addDim.bind(this);
  }
  getRandomID = (length)=>{
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  generateDimId = ()=>{
    let milliseconds = Date.now();
    let seconds = Math.floor(milliseconds/1000);
    let randomSixteen = this.getRandomID(16);
    let returnVal = 'DIM'+JSON.stringify(seconds) + randomSixteen;
    return returnVal;
  }
  addDim(){
    let axis_id = this.props.axis.id;
    let dim_id = this.generateDimId();
    let title = 'Type here'
    let item = [null];
    let parent = [null];
    let child = [null];
    let newDim = new DimensionObject(dim_id, title, item, parent, child); //id, title, item, parent, child
    this.props.createData('dims', dim_id, newDim)
    this.props.addToAxis(axis_id, dim_id);
    return;
  }
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
              <InnerList dims={this.props.dims} updateData={this.props.updateData}/>
              {provided.placeholder}
            </Dimlist>}
        </Droppable>
        <AddCircleButton clickFn={this.addDim}/>
      </Container>
    );
  }
}

export default Axis;
