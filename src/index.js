import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>{props.value}</button>
  );
}

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square value={props.squares[i]} onClick={() => props.onClick(i)}/>
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

class Game extends Component {
    state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      gridHistory: [{
        col: null,
        row: null 
      }],
      isMoveButtonBold: false,
    };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    const gridHistory = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentGrid = gridHistory[gridHistory.length - 1];
    const col = i % 3; 
    const row = Math.floor(i/3); 
    currentGrid.col = col;
    currentGrid.row = row;
    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
          squares: squares
        }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      gridHistory: gridHistory.concat([{
          col: currentGrid.col,
          row: currentGrid.row
      }]), 
      isMoveButtonBold: false,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0, 
      isMoveButtonBold: true,
    });
    console.log("I am at line 88");
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const gridHistory = this.state.gridHistory;

    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + " (" + gridHistory[move-1].col + "," + gridHistory[move-1].row + ")" :
        'Go to game start';
      return (
        <li key={move}>
          <button 
              // style={{fontWeight:this.state.isMoveButtonBold ? 'bold' : 'normal'}}
              style={{color:this.state.isMoveButtonBold ? 'red' : 'blue'}}
              onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}