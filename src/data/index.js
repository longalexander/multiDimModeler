const data = {
  marks: {},
  dims: {
    'dim-1': { id:'dim-1', title:'year' },
  },
  axis: {
    'axis-1': {
      id:'axis-1',
      title:'Row',
      dimIds:['dim-1']
    },
    'axis-2': {
      id:'axis-2',
      title:'Column',
      dimIds:[]
    },
  },
  //facilitate reordering of axes
  axisOrder: ['axis-1','axis-2']
}

export default data;
