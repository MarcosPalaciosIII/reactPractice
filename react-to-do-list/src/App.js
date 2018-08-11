import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddTask from './addTask';
import EditTask from './editTask';
import User from './user';


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
      this.setState({theTasks: allTheTasks.data, showing: false});
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

  renderForm(theIndex, theTaskID, theTitle, theDescription) {
    if(this.state.showing === theIndex) {
      return(

        <EditTask blah={() =>this.getAllTheTasks()} taskProp={theTaskID} title={theTitle} description={theDescription}></EditTask>
      )
    }
  }

  deleteTask(theIdOfTheTask) {
    axios.delete(`http://localhost:5000/api/tasks/delete/${theIdOfTheTask}`, {})
    .then(res => {
      console.log(res);
      this.getAllTheTasks();
    })
    .catch(err => {
      console.log(err);
    });
  }

  showTasks() {
    if(this.state.theTasks.length === 0) {
      this.getAllTheTasks();
    }


    return (
      this.state.theTasks.map((task, index) => {
        return(
          <div key={index} className="allTasks">

            <div className="center taskInfo">
              <div>
                <button onClick={()=>this.deleteTask(task._id)} style={{float:'right', backgroundColor:'maroon', color:'aqua', padding:'5px', marginLeft:'5px'}}> Delete Task </button>
                <button onClick={()=>this.toggleEditForm(index)} style={{float:'right', backgroundColor:'lightgreen', color:'maroon', padding:'5px'}}> Edit Task </button>
              </div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <hr />
            <div className="center taskEdit">
            {this.renderForm(index, task._id, task.title, task.description)}
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
          <User></User>

          <AddTask blah={() =>this.getAllTheTasks()}></AddTask>
        </div>

        <div>

          <div className="center">
            <h2> The To Do List </h2>
          </div>

          <div className="list center">
            {this.showTasks()}
          </div>

        </div>

      </div>
    );
  }
}


export default App;
