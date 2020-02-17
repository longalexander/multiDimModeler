// this object represents a 2D cartesian table

class MaterializedViewObject {
  constructor(id, xDimId, yDimId){
    this.id = id; // unique id of materialized view
    this.xDim = xDimId; // array of primary keys
    this.yDim = yDimId; // list of measures
    this.values = [null];
  }
}

export default MaterializedViewObject;
