import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddTask from './addTask';
import EditTask from './editTask';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theTasks: [],
      showing: false,
    };
  }

  addOneTask(taskToAdd) {
    console.log("adding one task!!!!!");
    const currentArray = this.state.theTasks.slice();
    currentArray.push(taskToAdd);
    this.setState({theTasks: currentArray});
  }

  getAllTheTasks(){
    axios.get("http://localhost:5000/api/tasks")
    .then(allTheTasks => {
      console.log(allTheTasks);
      this.setState({theTasks: allTheTasks.data, showing: this.state.showing});
    })
    .catch(err => {
      console.log(err);
    });
  }


  toggleEditForm(whichTask) {
    if(this.state.showing === whichTask) {
        this.setState({theTasks: this.state.theTasks, showing: false});
    } else {
      this.setState({theTasks: this.state.theTasks, showing: whichTask});
    }
  }

  renderForm(theIndex) {
    if(this.state.showing === theIndex) {
      return(

        <EditTask taskProp={theTaskID}></EditTask>
      )
      // return (
      //   <div className="edit-task center" >
      //     <h3> Edit This Task </h3>
      //
      //     <label> Title </label>
      //     <input type="text" value={this.state.titleInput} onChange={(e) =>{this.updateTitle(e)}} />
      //
      //     <br />
      //
      //     <label> Description </label>
      //     <input type="text" value={this.state.descriptionInput} onChange={(e) =>{this.updateDescription(e)}} />
      //
      //     <br />
      //
      //     <button onClick={()=>{this.editTask()}} > Save Change </button>
      //   </div>
      // )
    }
  }

  showTasks() {
    if(this.state.theTasks.length === 0) {
      this.getAllTheTasks();
    }


    return (
      this.state.theTasks.map((task, index) => {
        return(
          <div key={index} className="allTasks">
            <div className="center">
              <button onClick={()=>this.toggleEditForm(index)} style={{float:'right', backgroundColor:'maroon', color:'aqua', padding:'5px'}}> Edit Task </button>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              {this.renderForm(index, task._id)}
            </div>
            <div className="center">
              {this.renderForm(index)}
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (

      <div className="app" >
        <div className="center">
        <h1> The Greatest Sing To Do List of All Time </h1>
        </div>

        <div className="add" >
          <AddTask blah={() =>this.getAllTheTasks()}></AddTask>
        </div>

        <div className="list center">
          <h2> The To Do List </h2>
          {this.showTasks()}
        </div>
      </div>
    );
  }
}


export default App;
