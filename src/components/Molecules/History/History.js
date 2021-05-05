import React, { Component } from 'react';
import './History.css';

class History extends Component {
  render() {
    return (
      <section className="history">
        <div>{this.props.status}</div>
        <ol>{this.props.moves}</ol>
      </section>
    );
  }
}

export default History;