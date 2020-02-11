import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd'
import RowColMark from './RowColMark'

class WorksheetControllerRCM extends Component {
  state = this.props.data;
  onDragEnd = result =>{
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return; //check if the location of the draggable changed

    const start = this.state.rowColMarks[source.droppableId];
    const finish = this.state.rowColMarks[destination.droppableId];

    if (start === finish){
      const newElemIds = Array.from(start.elemIds);
      newElemIds.splice(source.index,1); //remove the elem at source from newElemIds
      newElemIds.splice(destination.index,0,draggableId);

      const newRowColMark = {
        ...start,
        elemIds: newElemIds
      }

      const newState = {
        ...this.state,
        rowColMarks: {
          ...this.state.rowColMarks,
          [newRowColMark.id]: newRowColMark,
        }
      }

      this.setState(newState);
      return;
    }

    const startElemIds = Array.from(start.elemIds);
    const finishElemIds = Array.from(finish.elemIds)
    //splice from the start rowColMark.
    startElemIds.splice(source.index,1);
    //place into the finish rowColMark
    finishElemIds.splice(destination.index,0,draggableId);
    //add both rowColMarks to the newState
    const newStartRowColMark = {
      ...start,
      elemIds: startElemIds
    }
    const newFinishRowColMark = {
      ...finish,
      elemIds: finishElemIds
    }
    //setState
    const newState = {
      ...this.state,
      rowColMarks: {
        ...this.state.rowColMarks,
        [newStartRowColMark.id]: newStartRowColMark,
        [newFinishRowColMark.id]: newFinishRowColMark
      }
    }
    this.setState(newState);

  }
  render(){
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.rowColMarkOrder.map( rowColMarkId => {
        const rowColMark = this.state.rowColMarks[rowColMarkId];
        const elems = rowColMark.elemIds.map(elemId=>this.state.elems[elemId]);
        return <RowColMark key={rowColMark.id} rowColMark={rowColMark} elems={elems} />
        })}
      </DragDropContext>
    );
  }
}

export default WorksheetControllerRCM;
