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

  updateTitle(e) {
    this.setState({
      titleInput: e.target.value,
      descriptionInput: this.state.descriptionInput,
    });
  }

  updateDescription(e) {
    this.setState({
      titleInput: this.state.titleInput,
      descriptionInput: e.target.value,
    });
  }

  submitChanges() {
    console.log(this.props.taskProp, this.state.titleInput, this.state.descriptionInput);
    axios.post(`http://localhost:5000/api/tasks/edit/${this.props.taskProp}`, {
      title: this.state.titleInput,
      description: this.state.descriptionInput,
    })
    .then(res => {
      console.log(res);
      this.setState({titleInput: '', descriptionInput: ''});
      this.props.blah();
    })
    .catch(err => {
      console.log(err);
    });
  }

  render(){
    return (
      <div className="edit-task center" >
        <h3> Edit This Task </h3>

        <label> Update Title </label>
        <input type="text" value={this.state.titleInput} onChange={(e) =>{this.updateTitle(e)}} />

        <br />

        <label> Update Description </label>
        <input type="text" value={this.state.descriptionInput} onChange={(e) =>{this.updateDescription(e)}} />

        <br />

        <button onClick={()=>{this.submitChanges()}} > Save Change </button>
      </div>
    )
  }





}



export default EditTask;
