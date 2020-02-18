import React, { Component } from 'react';

class DimTitleInput extends Component{
  constructor(props){
    super(props);
    this.state={title:''}
  }
  handleChange = (e)=>{
    this.setState({[e.currentTarget.name]:e.currentTarget.value})
  }
  render(){
    let content = this.props.title;
    if (this.props.title==='Type here'){
      content = <div><input placeholder='Type here' onChange={(e)=>this.handleChange(e)} name='title' value={this.state.title}></input> <button onClick={()=>this.props.updateData('dims',this.props.id, 'title', this.state.title)}>Submit</button></div>
    }
    return(
      content
    );
  }
}

export default DimTitleInput;
