import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
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
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }


  render(){
    return(
      <div>

        <h3> User Component </h3>

        {/*<div> Username Here </div>*/}

        <labal> Username </labal>
        <input type="text" value={this.state.usernameInput} onChange={(e)=>{this.updateUsername(e)}} />
        <labal> Password </labal>
        <input type="password" value={this.state.passwordInput} onChange={(e)=>{this.updatePassword(e)}} />

        <button onClick={()=>{this.login()}}> Log In </button>

      </div>
    )
  }


}


export default User;
