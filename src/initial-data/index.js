const initialData = {
  dims: {
    'dim-1': { id:'dim-1', content:'year' },
    'dim-2': { id:'dim-2', content:'quarter' },
    'dim-3': { id:'dim-3', content:'state' },
  },
  axis: {
    'axis-1': {
      id:'axis-1',
      title:'Row',
      dimIds:['dim-1', 'dim-2', 'dim-3']
    },
    'axis-2': {
      id:'axis-2',
      title:'Column',
      dimIds:[]
    },
  },
  //facilitate reordering of rowColMarks
  axisOrder: ['axis-1','axis-2']
}

export default initialData;
