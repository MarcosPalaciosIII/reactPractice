import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Square extends React.Component {

  // constructor(props){
  //   super(props);
  //
  // }

  // theClickFunction(){
    // alert(this.props.blah);
    // this.setState({theXorO: 'X'});
  //   console.log("clicked blah!");
  // }

  render() {
    return (
      <button className="square"
        onClick={()=>this.props.onClick()}>
        {this.props.blah}
      </button>
    );
  }
}

class Board extends React.Component {

  // constructor(props){
  //   super(props)
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }

  // putAnXorO(i){
  //   // console.log(i);
  //   const squares = this.state.squares.slice();
  //   if(calculateWinner(squares) || saquares[i]) {
  //     return
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    return <Square blah={this.props.squares[i]}
    onClick={()=>this.props.onClick(i)}
    />
  }

  render() {

    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if(winner) {
    //   status = `Winner: ${winner}`
    // } else {
    //   status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    // }


    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  putAnXorO(i){

    // console.log(i);
    const squares = this.state.history[this.state.history.length - 1].squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: this.state.history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move)=> {
      const desc = move ? `Go to move # ${move}` : `"Go to game start"`;
      return (
        <li key={move}>
          <button onClick={()=> this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      )
    });

    let status;
    if(winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
          squares = {current.squares}
          onClick = {(i)=> this.putAnXorO(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
