import React, { Component } from 'react';
import './Game.css';
import Header from '../Molecules/Header/Header';
import Panel from '../Organisms/Panel/Panel';

function defineWinner(chips) {
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
    if (chips[a] && chips[a] === chips[b] && chips[a] === chips[c]) {
      return chips[a];
    }
  }
  return null;
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          chips: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const chips = current.chips.slice();
    if (defineWinner(chips) || chips[i]) {
      return;
    }
    chips[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          chips: chips
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = defineWinner(current.chips);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Back move #' + move :
        'Reset Game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Player: " + (this.state.xIsNext ? "X" : "O");

    }

    return (
      <main className="game">
        <Header />
        <Panel
            chips={current.chips}
            moves={moves}
            onClick={i => this.handleClick(i)}
            status={status}
          />
      </main>
    );
  }
  
}

export default Game;
