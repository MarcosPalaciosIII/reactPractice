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

  showTasks() {
    return (
      this.state.theTasks.reverse().map((task, index) => {
        return(
          <div key={index} className="center" >
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
          <AddTask></AddTask>
        </div>

        <div className="list center">
          <button onClick={()=>{this.getAllTheTasks()}} >This is a Button </button>
          {this.showTasks()}
        </div>
      </div>
    );
  }
}

// class AddTask extends Component {
//
//   render() {
//     return (
//       <div className="add-task" >
//         <h3> Add A New Task </h3>
//
//         <label> Title </label>
//         <input type="text"></input>
//
//         <br />
//
//         <label> Description </label>
//         <input type="text"> </input>
//
//         <button type="submit"> Submit </button>
//       </div>
//     )
//   }
// }

export default App;
