class DimensionObject {
  constructor(id, name, itemList, parentList, childList){
    this.id = id; // unique id of this dimension
    this.name = name; // name as displayed in the application e.g. "Quarter"

    this.item = itemList; //list of items under this dimension e.g. "[Barbie, Action Man]"
    this.parent = parentList; // list of parent dimensions e.g. "[year, 5-year, all-time]"
    this.child = childList; // list of child dimensions e.g. "[month, week, day]"

  }
}

export default DimensionObject;
