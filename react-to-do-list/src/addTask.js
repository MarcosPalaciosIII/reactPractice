import React, { Component } from 'react';
import axios from 'axios';


class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      descriptionInput: '',
    };
  }

  addTask(){

    console.log(this.state.titleInput);
    console.log(this.state.descriptionInput);

    axios.post("http://localhost:5000/api/tasks/create", {
      title: this.state.titleInput,
      description: this.state.descriptionInput,
    })
    .then(res => {
      console.log(res);
      this.props.blah();
    })
    .catch(err => {
      console.log(err);
    });

    this.setState({titleInput: '', descriptionInput: ''});
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

  render() {
    return (
      <div className="add-task center" >
        <h3> Add A New Task </h3>

        <label> Title </label>
        <input type="text" value={this.state.titleInput} onChange={(e) =>{this.updateTitle(e)}} />

        <br />

        <label> Description </label>
        <input type="text" value={this.state.descriptionInput} onChange={(e) =>{this.updateDescription(e)}} />

        <br />

        <button onClick={()=>{this.addTask()}}> Submit </button>
      </div>
    )
  }
}



export default AddTask
