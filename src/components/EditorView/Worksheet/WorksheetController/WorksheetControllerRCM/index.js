import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd'
import Axis from './Axis'
import Mark from './Mark'

class WorksheetControllerRCM extends Component {
  state = this.props.data;
  onDragEnd = result =>{
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return; //check if the location of the draggable changed

    const start = this.state.axis[source.droppableId];
    const finish = this.state.axis[destination.droppableId];

    if (start === finish){
      const newDimIds = Array.from(start.dimIds);
      newDimIds.splice(source.index,1); //remove the dims at source from newDimIds
      newDimIds.splice(destination.index,0,draggableId);

      const newAxis = {
        ...start,
        dimIds: newDimIds
      }

      const newState = {
        ...this.state,
        axis: {
          ...this.state.axis,
          [newAxis.id]: newAxis,
        }
      }

      this.setState(newState);
      return;
    }

    const startDimIds = Array.from(start.dimIds);
    const finishDimIds = Array.from(finish.dimIds)
    //splice from the start axis.
    startDimIds.splice(source.index,1);
    //place into the finish axis
    finishDimIds.splice(destination.index,0,draggableId);
    //add both axis to the newState
    const newStartAxis = {
      ...start,
      dimIds: startDimIds
    }
    const newFinishAxis = {
      ...finish,
      dimIds: finishDimIds
    }
    //setState
    const newState = {
      ...this.state,
      axis: {
        ...this.state.axis,
        [newStartAxis.id]: newStartAxis,
        [newFinishAxis.id]: newFinishAxis
      }
    }
    this.setState(newState);

  }
  render(){
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.axisOrder.map( axisId => {
          const axis = this.state.axis[axisId];
          const dims = axis.dimIds.map(dimId=>this.state.dims[dimId]);
          return <Axis key={axis.id} axis={axis} dims={dims} />
          })}
        </DragDropContext>
        <Mark />
      </div>
    );
  }
}

export default WorksheetControllerRCM;
