import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      loggedInUser: null,
    };
  }


  updateUsername(e){
    this.setState({
      usernameInput: e.target.value,
      passwordInput: this.state.passwordInput,
    });
    console.log(this.state);
  }

  updatePassword(e){
    this.setState({
      usernameInput: this.state.usernameInput,
      passwordInput: e.target.value,
    });
    console.log(this.state);
  }

  login(){
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    axios.post('http://localhost:5000/api/login', {username, password}, {withcredentials: true})
    .then((response) => {
      this.setState({
        usernameInput: this.state.usernameInput,
        passwordInput: this.state.passwordInput,
        loggedInUser: response.data,
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }

  signup(){
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    axios.post('http://localhost:5000/api/signup', {username, password}, {withcredentials: true})
    .then((response) => {
      this.setState({
        usernameInput: this.state.usernameInput,
        passwordInput: this.state.passwordInput,
        loggedInUser: response.data,
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }



  showUser(){
    return this.state.loggedInUser ? `Welcome, ${this.state.loggedInUser.username}` : "User Component";
  }


  render(){
    return(
      <div className="add-task center">

        <h3> {this.showUser()} </h3>

        {/* <div> Username Here </div> */}

        <labal> Username </labal>
        <input type="text" value={this.state.usernameInput} onChange={(e)=>{this.updateUsername(e)}} />
        <br />
        <labal> Password </labal>
        <input type="password" value={this.state.passwordInput} onChange={(e)=>{this.updatePassword(e)}} />
        <br />
        <button onClick={()=>{this.login()}} className="logIn-signUp-button"> Log In </button>
        <button onClick={()=>{this.signup()}} className="logIn-signUp-button"> Sign Up </button>

      </div>
    )
  }


}


export default User;
