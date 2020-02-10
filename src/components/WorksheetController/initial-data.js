const initialData = {
  tasks: {
    'task-1': { id:'task-1', content:'take out the garbage' },
    'task-2': { id:'task-2', content:'watch show' },
    'task-3': { id:'task-3', content:'clean toilet' },
    'task-4': { id:'task-4', content:'make food' }
  },
  columns: {
    'column-1': {
      id:'column-1',
      title:'Row',
      taskIds:['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id:'column-2',
      title:'Column',
      taskIds:[]
    },
    'column-3': {
      id:'column-3',
      title:'Mark',
      taskIds:[]
    },
  },
  //facilitate reordering of columns
  columnOrder: ['column-1','column-2','column-3']
}

export default initialData;
