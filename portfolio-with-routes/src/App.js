import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p> */}
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
        </Switch>

        {/* <Home />
        <About /> */}
      </div>
    );
  }
}

export default App;
