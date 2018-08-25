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
  }

  updatePassword(e){
    this.setState({
      usernameInput: this.state.usernameInput,
      passwordInput: e.target.value,
    });
  }

  login(){
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    axios.post('http://localhost:5000/api/login', {username, password}, {withCredentials: true})
    .then((response) => {

      this.setState({
        usernameInput: '',
        passwordInput: '',
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
    axios.post('http://localhost:5000/api/signup', {username, password}, {withCredentials: true})
    .then((response) => {

      this.setState({
        usernameInput: '',
        passwordInput: '',
        loggedInUser: response.data,
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }

  logout(){
    axios.post('http://localhost:5000/api/logout', {}, {withCredentials: true})
    .then((response) => {

      this.setState({
        usernameInput: '',
        passwordInput: '',
        loggedInUser: null,
      });

    })
    .catch((err) => {
      console.log(err);
    });
  }



  showUser(){
    this.fetchUser();
    if(this.state.loggedInUser) {

      return (
        <div className="add-task center">

          <h3>Welcome, {this.state.loggedInUser.username}</h3>
          <button onClick={()=>{this.logout()}} className="logOutButton"> Log Out </button>

        </div>
      );

    }
  }

  fetchUser(){
    console.log('-=-==-=--=-=-==-=-=-=-=-',this.state.loggedInUser)
    if( this.state.loggedInUser === null ) {
      axios.get('http://localhost:5000/api/loggedin', {withCredentials: true})
      .then((response) => {
        this.setState({
          usernameInput: this.state.usernameInput,
          passwordInput: this.state.passwordInput,
          loggedInUser: response.data,
        });

      })
      .catch((err) => {
        this.setState({
          usernameInput: this.state.usernameInput,
          passwordInput: this.state.passwordInput,
          loggedInUser: false,
        });
      })
    }
  }

  showlogInForm() {
    if( !this.state.loggedInUser ) {
      return(
        <div className="add-task center">

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


  render(){
    return(
      <div>
        {this.showlogInForm()}
        {this.showUser()}
      </div>
    )
  }


}


export default User;
