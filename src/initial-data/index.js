//currently being used to test the drag and drop feature

const initialData = {
  elems: {
    'elem-1': { id:'elem-1', content:'take out the garbage' },
    'elem-2': { id:'elem-2', content:'watch show' },
    'elem-3': { id:'elem-3', content:'clean toilet' },
    'elem-4': { id:'elem-4', content:'make food' }
  },
  rowColMarks: {
    'rowColMark-1': {
      id:'rowColMark-1',
      title:'Row',
      elemIds:['elem-1', 'elem-2', 'elem-3', 'elem-4']
    },
    'rowColMark-2': {
      id:'rowColMark-2',
      title:'Column',
      elemIds:[]
    },
    'rowColMark-3': {
      id:'rowColMark-3',
      title:'Mark',
      elemIds:[]
    },
  },
  //facilitate reordering of rowColMarks
  rowColMarkOrder: ['rowColMark-1','rowColMark-2','rowColMark-3']
}

export default initialData;
