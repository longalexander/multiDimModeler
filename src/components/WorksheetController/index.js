import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {DragDropContext} from 'react-beautiful-dnd'
import initialData from './initial-data.js'
import Column from './Column'

class WorksheetController extends Component {
  state = initialData;
  onDragEnd = result =>{
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return; //check if the location of the draggable changed

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish){
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index,1); //remove the task at source from newTaskIds
      newTaskIds.splice(destination.index,0,draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        }
      }

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    const finishTaskIds = Array.from(finish.taskIds)
    //splice from the start column.
    startTaskIds.splice(source.index,1);
    //place into the finish column
    finishTaskIds.splice(destination.index,0,draggableId);
    //add both columns to the newState
    const newStartColumn = {
      ...start,
      taskIds: startTaskIds
    }
    const newFinishColumn = {
      ...finish,
      taskIds: finishTaskIds
    }
    //setState
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn
      }
    }
    this.setState(newState);

  }
  render(){
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map( columnId => {
        const column = this.state.columns[columnId];
        const tasks = column.taskIds.map(taskId=>this.state.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>
    );
  }
}

export default WorksheetController;
