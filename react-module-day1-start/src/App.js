import React, { Component } from "react";
import "./App.css";
import User from '../components/User.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userA: {
              firstName: 'Marcos',
              lastName: 'Palacios',
              avatarUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEzeY5gMuYGWOJ17a4vvxRh3TCtjmWCV0n5-arsYpLU0uSf5o'
      },
      userB: {
              firstName: 'Shin',
              lastName: 'Cero',
              avatarUrl:'data:image/jpeg;base64,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'
      },
      clickCount: 0,
      backColor: 'yellow'
    }
  }


  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount+1
    },
    () => {
      if(this.state.clickCount % 5 === 0){
        this.setState({
          backColor: 'yellow'
        });
      } else {
        this.setState({
            backColor: this.colorMapper()
        });
      }
    })
  };

  render() {


    // const formatName = (user) => {
    //   return `${user.firstName} ${user.lastName}`;
    // };

    // const displayAvartar = (user) => {
    //   if(user.avatarUrl){
    //     return <img src={user.avatarUrl} />
    //   } else {
    //     return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
    //   }
    // }

    // const element = (
    //   <h2>
    //     <User firstName={this.state.userA.firstName} />
    //     <User firstName={this.state.userB.firstName} />
    //   </h2>
    // );

    return (
      <div className="App">
          <h1> Hello Ironhackers! </h1>
          <p>Count is: {this.state.clickCount}</p>
          <button onClick={this.clickHandler}>Click me</button>

          <User theColor={this.state.backColor} firstName={this.state.userA.firstName} lastName={this.state.userA.lastName} image={this.state.userA.avatarUrl} />
          <User firstName={this.state.userB.firstName} lastName={this.state.userB.lastName} image={this.state.userB.avatarUrl} />
      </div>
    );
  }
}

export default App;
