import React, { Component } from 'react';
import axios from 'axios';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      descriptionInput: '',
    };
  }

  render(){
    return (
      <div className="edit-task center" >
        <h3> Edit This Task </h3>

        <label> Title </label>
        <input type="text" value={this.state.titleInput} onChange={(e) =>{this.updateTitle(e)}} />

        <br />

        <label> Description </label>
        <input type="text" value={this.state.descriptionInput} onChange={(e) =>{this.updateDescription(e)}} />

        <br />

        <button onClick={()=>{this.submitChanges()}} > Save Change </button>
      </div>
    )
  }





}



export default EditTask;
