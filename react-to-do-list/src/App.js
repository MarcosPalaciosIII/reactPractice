import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddTask from './addTask';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theTasks: []
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
      this.setState({theTasks: allTheTasks.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  toggleEditForm(whichTask) {
    console.log(whichTask);
  }

  showTasks() {
    if(this.state.theTasks.length === 0) {
      this.getAllTheTasks();
    }


    return (
      this.state.theTasks.reverse().map((task, index) => {
        return(
          <div key={index} className="center" >
            <button onClick={()=>this.toggleEditForm(index)} style={{float:'right', backgroundColor:'maroon', color:'aqua', padding:'5px'}}> Edit Task </button>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
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
