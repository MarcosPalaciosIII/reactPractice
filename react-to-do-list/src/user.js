import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>

        <h3> User Component </h3>

        {/*<div> Username Here </div>*/}

        <labal> Username </labal>
        <input type="text" />
        <labal> Password </labal>
        <input type="password" />

      </div>
    )
  }


}


export default User;
